
import type { Books } from "../models/Events";
const books: Books[] = [
    {        id: 1,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        publicationDate: "1949-06-08",
        summary: "A novel about a dystopian future.",
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        publicationDate: "1960-07-11",
        summary: "A novel about racial injustice in the Deep South.",
    },
    {        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        publicationDate: "1925-04-10",
        summary: "A novel about the American dream.",
    },
    {        id: 4,
        title: "Moby Dick",
        author: "Herman Melville",
        genre: "Adventure",
        publicationDate: "1851-10-18",
        summary: "A novel about the voyage of the whaling ship Pequod.",
    },
    {
        id: 5,
        title: "Pride and Prejudice",   
        author: "Jane Austen",
        genre: "Romance",
        publicationDate: "1813-01-28",
        summary: "A novel about the manners and matrimonial machinations among the British gentry of the early 19th century.",
    },
];


export function getBooksByGenre(genre: string): Books[] {
    const filteredBooks = books.filter((book) => book.genre === genre);
    return filteredBooks;   
}

export function getAllBooks(): Books[] {
    return books;
}

export function getBookById(id: number): Books | undefined {
    return books.find((book) => book.id === id);
}

export function addBook(newBook: Books): Books {
    newBook.id = books.length + 1;
    books.push(newBook);
    return newBook;
}
