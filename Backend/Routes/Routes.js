const express = require('express');
const Book = require('../Model/Book');
const router = express.Router();
const booksController = require('../Controllers/Books-Controller');

router.get('/',booksController.getAllBooks);
router.post('/',booksController.getAddBook);
router.get('/:id',booksController.getById);
router.put('/:id',booksController.getUpdateBook);
router.delete('/:id',booksController.getDeleteBook);

module.exports = router;