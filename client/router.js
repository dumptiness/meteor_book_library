FlowRouter.route('/', {
	name: 'book',
	action: function() {
		BlazeLayout.render('book_layout', {main: 'book'});
	}
});

FlowRouter.route('/book/:id', {
	name: 'view_book',
	action: function(params, queryParams) {
		BlazeLayout.render('book_layout', {main: 'view_book'});
	}
	
});