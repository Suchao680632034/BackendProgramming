import type Event from "../models/Events";
import { Books } from "../models/Events";

import { 
    getAllEvents as allEvents , getEventsByCategory as eventByCategory , 
    getEventById as eventByID , addEvent as addNewEvent  } 
    from "../repository/EventRepository";

import {
    getAllBooks as allBooks , getBooksByGenre as booksByGenre ,
    getBookById as bookByID , addBook as addNewBook }
    from "../repository/EventRepository";   



export function getEventsByCategory(category: string): Promise<Event[]> {
    return eventByCategory(category);
}

export function getAllEvents(): Promise<Event[]> {
    return allEvents();
}

export function getEventById(id: number): Promise<Event | undefined> {
    return eventByID(id);
}

export function addEvent(newEvent: Event): Promise<Event> {
    return addNewEvent(newEvent);
}

export function getBooksByGenre(genre: string): Promise<Books[]> {
    return booksByGenre(genre);
}

export function getAllBooks(): Promise<Books[]> {
    return allBooks();
}

export function getBookById(id: number): Promise<Books | undefined> {
    return bookByID(id);
}

export function addBook(newBook: Books): Promise<Books> {
    return addNewBook(newBook);
}
