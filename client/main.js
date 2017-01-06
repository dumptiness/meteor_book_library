import { Template } from 'meteor/templating';
import {Session} from 'meteor/session';

Template.book.helpers({
  all_books: function() {
    return books.find();
  }
});

Template.view_book.helpers({
  book_name: function() {
    return books.findOne(Session.get('one_book')).book_name;
  },
  book_author: function() {
    return books.findOne(Session.get('one_book')).book_author;  
  },
  book_date: function() {
    return books.findOne(Session.get('one_book')).book_date;
  }
});

Template.book.events({
  "click #add_book": function(event, template) {
    var new_book_name = template.find("#book_name").value;
    var new_book_author = template.find("#book_author").value;
    var new_book_date = template.find("#book_date").value;
    if( new_book_name.trim() !== ""	&& new_book_author.trim() !== "" && new_book_date.trim() !== "" ) {
    	books.insert({book_name: new_book_name, book_author: new_book_author, book_date: new_book_date});	
    }
  },

  "click #delete_book": function(event) {
    books.remove(this._id);
  },

  "click #update_book": function(event) {
    
  }

});