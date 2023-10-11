import { BookService } from './book.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Book } from './data/book.dto';


@Controller("book")
export class BookController{
     constructor(private BookService : BookService){}

     @Get("/findAll")
     getAllbooks() : Book[]{
        return this.BookService.findAllBookS();
     }
     @Put("/udate")
     updateBook(@Body() book : Book): string{
        return this.BookService.updateBookService(book);
     }

     @Delete("/delete/:id")
     deleteBook(@Param() bookId : string): string{
        return this.BookService.deleteBookService(bookId);
     }

     @Post("/add")
     addBook((@Body() book : Book): string{
        return this.BookService.updateBookService(book);
     }

}