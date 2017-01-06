import {Session} from 'meteor/session';

// ALL
FlowRouter.route('/', {
	name: 'book',
	action: function() {
		BlazeLayout.render('book_layout', {main: 'book'});
	}
});

// VIEW
FlowRouter.route('/book/:id', {
	name: 'view_book',
	action: function(params, queryParams) {
		Session.set('one_book', params.id);
		BlazeLayout.render('book_layout', {main: 'view_book'});
	}
});

// UPDATE
FlowRouter.route('/book/:id', {
	name: 'update_book',
	action: function(params, queryParams) {
		Session.set('one_book', params.id);
		BlazeLayout.render('book_layout', {main: 'update_book'});
	}
});