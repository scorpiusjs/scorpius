/*******************
 * Client Testing  *
 *******************/
if(Meteor.isClient){
	describe('Dashboard', function () {
		it('scorpius.dashboard Should be instantiated.', function () {
			var test = result = scorpius.dashboard;
			chai.assert.equal(test, result);
		}),
		it('scorpius.dashboard Should be an object.', function () {
			var test = scorpius.dashboard;
			chai.assert.typeOf(test, 'object');
		})
	});
	describe('Dashboard Widgets', function () {
		it('scorpius.dashboard._widgets Should be an array', function () {
			var test = scorpius.dashboard._widgets;
			chai.assert.typeOf(test, 'array');
		}),
		it('scorpius.dashboard.registerWidget Should register a new widget', function () {
			scorpius.dashboard.registerWidget({
				template: 'default',
				publication: 'allProducts',
				count: 'totalProducts',
				label: 'Products',
				path: '/admin/products/',
				baseColor: 'blue',
				icon: 'shopping_cart',
				textColor: 'white'
			});
			
			chai.assert.equal(scorpius.dashboard._widgets.length > 0,true)
		})
	});
}

/******************
 * Server Testing *
 ******************/
