import { Injectable } from '@nestjs/common';
import { Book } from "./data/book.dto";


@Injectable()
export class BookService{
    public books: Book[]=[];
    //add
    addBookService(book: Book) : string{
        this.books.push(book);
        return "Book has been Successfully Added";
    }
    //delete
    deleteBookService(bookId: string) : string{
        this.books = this.books.filter((book)=>{
           return book.id != bookId;
        });
        return"Book hase been deleted";
    }
    //update
    updateBookService(book: Book) : string{
        let index = this.books.findIndex((currentBook)=>{
             return currentBook.id == book.id;
        });
        this.books[index]=book;
        return "Book has been Succesfully Updated";
    }
    //findAll
    findAllBookS() : Book [] {
        return this.books;
    }
}