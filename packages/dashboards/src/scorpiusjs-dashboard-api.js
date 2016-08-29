/**
 * @property scorpius
 * @where {client}
 * @public
 * @return {Object}
 * 
 * Declares the scorpius namespace
 */
scorpius = scorpius;

/**
 * @property scorpius.dashboard
 * @where {client}
 * @public
 * @return {Object}
 * 
 * Declares the scorpius.dashboard namespace and Object.
 */
scorpius.dashboard = {};

/**
 * @property scorpius.dashboard._widgets
 * @where {client}
 * @public
 * @return {[Object]}
 * 
 * Declares the scorpius.dashboard._widgets array. Which is an array
 * of objects that are 
 */
scorpius.dashboard._widgets = [];

/**
 * @method scorpius.dashboard.registerWidget
 * @where {client}
 * @public
 * @param  {Object} data An object that contains the data to be passed to the template
 * @return {Object}      Returns an object with data for the widet.
 *
 * Registers the widget and passes the data along to the declared template.
 * Template must be defined within the Passed argument otherwise it will default
 * to the default widget template.
 */
scorpius.dashboard.registerWidget = function (data){
	check(data,Object);
	
	if (data.template === undefined || data.template == 'default') {
		data.template = ReactiveTemplates.get('scorpiusDashboardWidget');
	}
	return scorpius.dashboard._widgets.push(data);
}; 

/**
 * @property ReactiveTemplates.helpers
 * @where {client}
 * @public
 * @return {undefined}
 * 
 * Pulls all widgets from the scorpius.dashboard._widgets array and passes them
 * along to the declared template.
 */
ReactiveTemplates.helpers('scorpiusDashboard', {
	widgets: function () {
		return scorpius.dashboard._widgets;
	},
	count: function () {
		return Counter.get(this);
	}
});

/**
 * @property ReactiveTemplates.onCreated('scorpiusDashboardWidget')
 * @where {client}
 * @public
 * @return {undefined}
 * 
 * Subscribes to the publication passed to the widget.
 */
ReactiveTemplates.onCreated('scorpiusDashboardWidget', function () {
	var data = this.data
	this.subscribe(data.publication);
});

ReactiveTemplates.helpers('scorpiusDashboardWidget', {
	/**
	 * @method getCount
	 * @public
	 * @param  {String} count The count passed to through registerWidget
	 * @return {Number}       Returns the total counts from the publication.
	 *
	 * Returns the total count of records based on the Counter
	 * passed through the registerWidget function.
	 */
	getCount: function (count) {
		return Counts.get(count);
	}
});
