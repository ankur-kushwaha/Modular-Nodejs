var bookController = require("./book_controller");
var express=require('express');

module.exports = function(app){
   
   var router = express.Router();
   
  //Get the details of the book with the given isbn
  router.get('/book/:isbn', function(req, res){
    bookController.getBookDetails(req.params, function(results){res.json(results);});
  });

  //Get all the books
  router.get('/book', function(req, res){
	  console.log('inside catalog books');
		res.json(['catalog']);
	//bookController.getAllBooks(function(results){res.json(results);});
  });

  router.post('/book', function(req, res){
	  console.log('inside catalog books');
    bookController.addNewBook(req.body, function(results){
      res.json(results);
    });
  });

  router.put('/book/:isbn', function(req, res){
    bookController.editBook(req.body, req.params.isbn, function(results){
      res.json(results);
    });
  });

  router.delete('/book/:isbn', function(req, res){
    bookController.deleteBook(req.params.isbn, function(results){
      res.json(results);
    });
  });
  
  app.use('/catalog', router);
}
