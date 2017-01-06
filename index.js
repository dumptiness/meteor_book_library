books = new Mongo.Collection("books");

if (Meteor.isServer) {
	Meteor.startup (
		function() {
			if (!books.find().count()) {
				books.insert({book_name: "Pet Semetary", book_author: "Stephen King", book_date: "1985"});
			}
		}
	);
}