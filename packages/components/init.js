Options.init('components.framework', 'bootstrap');

ReactiveTemplates.request('components.oneItem', 'afArrayField_bootstrap_components_oneItem');
ReactiveTemplates.request('components.oneItemPreview', 'afArrayField_bootstrap_components_oneItem_preview');
ReactiveTemplates.request('components.base', 'afArrayField_bootstrap_components');

/**
 * Set templates to materialize if the materialize framework is set.
 */
Meteor.startup(function(){
	if (Options.get('components.framework') === 'materialize') {
		ReactiveTemplates.request('components.oneItem', 'afArrayField_materialize_components_oneItem');
		ReactiveTemplates.request('components.oneItemPreview', 'afArrayField_materialize_components_oneItem_preview');
		ReactiveTemplates.request('components.base', 'afArrayField_materialize_components');
	}
});



