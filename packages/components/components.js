import { ModalComponent } from './imports/utils/ModalComponent.js';

scorpius.components = {
	registerComponent(id, definition) {
		definition.id = id;
		this.definitions[id] = definition;
	},
	getDefinition(id){
		return this.definitions[id];
	},
	definitions: {},
	definitionsOptions({allowedComponents = null}) {
		let definitions = _.keys(this.definitions);
		if(_.isArray(allowedComponents)){
			definitions = _.intersection(definitions, allowedComponents);
		}
		return definitions.map((id) => {return {label: this.definitions[id].title, value: id}});
	},
	components({label = "Components", allowedComponents = null, optional = true}) {
		return new SimpleSchema({
			components: {
				type: [Object],
				label: label,
				optional: optional,
				autoform: {
					template: `${Options.get('components.framework')}_components`
				}
				
			},
			"components.$.definitionId": {
				type: String,
				label: "Component",
				autoform: {
					class: "input-lg select-definitionId",
					template: "${Options.get('components.framework')}",
					options(){
						return scorpius.components.definitionsOptions({allowedComponents});
					}
				}
			},
			"components.$.data": {
				autoform: {
					template: `${Options.get('components.framework')}_components`
				},

				type: scorpius.components.schemaComponentData({allowedComponents}),
				
			},
		});
	},
	schemaComponentData({allowedComponents}) {

		let allCompomentsSchema = {};
		let definitions = _.keys(this.definitions);
		if(_.isArray(allowedComponents)){
			definitions = _.intersection(definitions, allowedComponents);
		}

		for(let id of definitions) {
			
			allCompomentsSchema[id] = {
				type: this.definitions[id].schema,
				optional: true,
				autoform: {
					template: `${Options.get('components.framework')}`
				},
				
			};
		}
		return new SimpleSchema(allCompomentsSchema);
	}
}

// TODO : Settings scorpius.component to scorpius.components.components to get around 
// the long unfriendly scoping.
scorpius.component = scorpius.components.components;

ScorpiusComponentCollection = new Meteor.Collection("scorpius.components");
if(Meteor.isClient) {
	// fix problem with arrays in autoform
	// autoform seems to not re-index arrays
	// we do this here, but only for our components
	AutoForm.addHooks(null, {
		formToModifier(modifier) {
			
			if(modifier.$set) {
				for(key in modifier.$set) {
					let value = modifier.$set[key];
					if(_.isArray(value)) {
						let [suffix, ...parts] = key.split(".").reverse();
						if(suffix === "components") {
							modifier.$set[key] = _.compact(value).filter((val) => val);
						}
					}
				}
			}
			return modifier;
		},
		formToDoc(doc) {
			
			return doc;
		}
	});

	ReactiveTemplates.helpers('components.oneItem', {
		definitionSelectDisabled() {
			return !Template.instance().isEditing.get();
		}, 
		fieldNameDefinitionId() {
			return `${this.name}.definitionId`;
		},
		fieldNameData() {
			return `${this.name}.data.${Template.instance().selectedDefinitionId.get()}`;
		},
		selectedDefinitionId() {
			return Template.instance().selectedDefinitionId.get();
		},
		subDoc() {
			return AutoForm.getFieldValue(`${this.name}.data`);
		},
		isEditing() {
			return Template.instance().isEditing.get();
		}
	})

	ReactiveTemplates.events('components.oneItem', {
		["change .select-definitionId"](event, template){
			template.selectedDefinitionId.set($(event.currentTarget).val());
		},
		["click .btn-edit"](event, template) {
			template.isEditing.set(true);
			return false;
		},
		["click .btn-finish-edit"](event, template) {
			template.isEditing.set(false);
			return false;
		}
	});
	
	ReactiveTemplates.onCreated('components.oneItem', function () {
		let definitionField = `${this.data.name}.definitionId`;
		this.selectedDefinitionId = new ReactiveVar();
		let isNew = _.isEmpty(AutoForm.getFieldValue(definitionField));
		this.isEditing = new ReactiveVar(isNew);
		// AutoForm.getFieldValue is buggy, when the item is in a array, because we will have the wrong field name for these items
		// see https://github.com/aldeed/meteor-autoform/issues/833
		// we therefore attach an event to catch the value of the definitionId (see events)
		this.selectedDefinitionId.set(AutoForm.getFieldValue(definitionField));
	})
	
	Template.scorpiusComponent.helpers({
		data() {
			if(this.data)
				return this.data[this.definitionId];
		},
		definition(){
			let definition = scorpius.components.getDefinition(this.definitionId);
			return definition;
		}
	});
}