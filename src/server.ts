import express, {Request, Response} from 'express'
import { getAllEvents, getEventById, getEventsByCategory, addEvent } from "../src/services/EventService";
import { getAllBooks, getBookById, getBooksByGenre, addBook } from "../src/services/BooksService";
import type Event from "./models/Events";
import { Books } from './models/Events';

const app = express()
const port = 3000
app.use(express.json())




app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

app.get("/events/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const event = await getEventById(id);
    if (event) {
        res.json(event);
    } else {
        res.status(404).send("Event not found");
    }
});


app.get("/events", async (req, res) => {
    if (req.query.category) {
        const category = req.query.category;
        const filteredEvents = await getEventsByCategory(category as string);
        res.json(filteredEvents);
    } else {
        res.json(await getAllEvents());
    }
});

app.post("/events", async (req, res) => {
    const newEvent: Event = req.body;
    
    res.json(await addEvent(newEvent));
});


app.get("/books", async (req, res) => {
    const genre = req.query.genre as string;
    if (genre) {
        const filteredBooks = await getBooksByGenre(genre);
        res.json(filteredBooks);
    } else {
        res.json(await getAllBooks());
    }
});

app.get("/books/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const book = await getBookById(id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).send("Book not found");
    }
});

app.post("/books", async (req, res) => {
    const newBook: Books = req.body;
    res.json(await addBook(newBook));
});


