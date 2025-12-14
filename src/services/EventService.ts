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


export function getEventsByCategory(category: string): Event[] {
    const filteredEvents = events.filter((event) => event.category === category);
    return filteredEvents;
}

export function getAllEvents(): Event[] {
    return events;
}

export function getEventById(id: number): Event | undefined {
    return events.find((event) => event.id === id);
}

export function addEvent(newEvent:Event): Event {
    newEvent.id = events.length + 1;
    events.push(newEvent);
    return newEvent;
}
