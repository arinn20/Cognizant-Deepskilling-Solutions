package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Setter for Dependency Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addNewBook(String title) {
        System.out.println("Service: Adding a new book...");
        bookRepository.addBook(title);
    }
}
