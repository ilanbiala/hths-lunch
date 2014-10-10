angular.module('hthsLunch.panel').factory(
	'PanelItem', [
		'$resource',
		function($resource) {
			return $resource('/api/panel/items/:itemId', {
				itemId: '@_id'
			}, {
				update: {
					method: 'PUT'
				}
			});
		}
	]).factory('PanelOrder', [
	'$resource',
	function($resource) {
		return $resource('/api/panel/orders/:orderId', {
			'orderId': '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]).factory('PanelSchedule', [
	'$resource',
	function($resource) {
		return $resource('/api/panel/schedule', {}, {
			// query: {
			// 	method: 'GET',
			// 	isArray: false
			// },
			update: {
				method: 'PUT'
			}
		});
	}
]).filter('prettyprint', function() {
	return function(items) {
		var prettyPrint = '';
		for (var i = 0; i < items.length; i++) {
			prettyPrint += items[i].title + ' x' + items[i].quantity;
			if (i + 1 < items.length) {
				// another item left to evaluate
				prettyPrint += ', ';
			}
		}

		return prettyPrint;
	};
});
