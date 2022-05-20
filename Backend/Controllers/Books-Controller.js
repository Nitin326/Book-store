const express = require('express');
const Book = require('../Model/Book');

const getAllBooks = async (req,res,next) => {
    let books;

    try{
        books = await Book.find();
    }catch(err){
        console.log(err);
    }

    if(!books){
        return res.status(400).json({message:"No produuct Found"});
    }else{
        return res.status(200).json({books});
    }
}

const getAddBooks = async (req,res,next) => {
    const {name,author,description,price,available,image} = req.body;
    let book;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book.save();
    }
    catch(err){
        console.log(err);
    }

    if(!book){
        return res.status(500).json({message: "unable to Add"});
    }
    return res.status(201).json({book});
}

const getById = async (req,res,next) => {
    const id = req.params.id;
    let book;
    try{
        book = await Book.findById(id);
    }
    catch(err){
        console.log(err);
    }

    if(!book){
        return res.status(404).json({message: "No Book Found"});
    }
    return res.status(200).json({book});
}

const getUpdateBook = async (req,res,next) => {
    const id = req.params.id;
    const {name,author,description,price,available,image} = req.body;
    let book;
    try{
        book = await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            available,
            image
            }
            )
            book = await book.save()
       }
        catch(err){
            console.log(err);
        }

        if(!book){
            return res.status(404).json({message: "unable to update with this id"});
        }
        return res.status(200).json({book});
}

const getDeleteBook = async (req,res,next) => {
    const id = req.params.id;
    const {name,author,description,price,available} = req.body;
    let book;
    try{
        book = await Book.findByIdAndRemove(id)
       }
        catch(err){
            console.log(err);
        }

        if(!book){
            return res.status(404).json({message: "unable to delete with this id"});
        }
        return res.status(200).json({message:"product Successfully deleted"});
}
exports.getAllBooks = getAllBooks;
exports.getAddBook = getAddBooks;
exports.getById = getById;
exports.getUpdateBook = getUpdateBook;
exports.getDeleteBook = getDeleteBook;