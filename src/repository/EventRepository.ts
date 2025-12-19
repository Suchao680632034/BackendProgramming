import type Event from "../models/Events";
const events: Event[] = [
    {
        id: 1,
        category: "Music",
        title: "Concert",
        description: "A live concert",
        location: "London",
        date: "2021-07-01",
        time: "19:00",
        petsAllowed: false,
        organizer: "Live Nation",
    },
    {
        id: 2,
        category: "Art",
        title: "Art Exhibition",
        description: "An exhibition of modern art",
        location: "New York",
        date: "2021-08-15",
        time: "10:00",
        petsAllowed: true,
        organizer: "Art World",
    },
    {
        id: 3,
        category: "Music",
        title: "Jazz Night",
        description: "An evening of smooth jazz",
        location: "Paris",
        date: "2021-09-10",
        time: "21:00",
        petsAllowed: false,
        organizer: "Jazz Society",
    },
    {
        id: 4,
        category: "Food",
        title: "Food Festival",
        description: "A festival celebrating world cuisines",
        location: "Berlin",
        date: "2021-10-05",
        time: "11:00",
        petsAllowed: true,
        organizer: "Foodies United",
    },
    {
        id: 5,
        category: "Tech",
        title: "Tech Conference",
        description: "A conference about the latest in tech",
        location: "San Francisco",
        date: "2021-11-20",
        time: "09:00",
        petsAllowed: false,
        organizer: "Tech Innovators",
    },
];


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



export async function getEventsByCategory(category: string): Promise<Event[]> {
    const filteredEvents = events.filter((event) => event.category === category);
    return Promise.resolve(filteredEvents);
}

export function getAllEvents(): Promise<Event[]> {
    return Promise.resolve(events);
}

export async function getEventById(id: number): Promise<Event | undefined> {
    return events.find((event) => event.id === id);
}

export async function addEvent(newEvent: Event): Promise<Event> {
    newEvent.id = events.length + 1;
    events.push(newEvent);
    return Promise.resolve(newEvent);
}

export async function getBooksByGenre(genre: string): Promise<Books[]> {
    const filteredBooks = books.filter((book) => book.genre === genre);
    return Promise.resolve(filteredBooks);   
}

export function getAllBooks(): Promise<Books[]> {
    return Promise.resolve(books);
}

export async function getBookById(id: number): Promise<Books | undefined> {
    return books.find((book) => book.id === id);
}

export async function addBook(newBook: Books): Promise<Books> {
    newBook.id = books.length + 1;
    books.push(newBook);
    return Promise.resolve(newBook);
}