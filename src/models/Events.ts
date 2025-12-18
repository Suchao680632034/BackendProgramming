export default interface Event {
    id: number;
    category: string;
    title: string;
    description: string;
    location: string;
    date: string;
    time: string;
    petsAllowed: boolean;
    organizer: string;
}

export interface Books {
    id: number;
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    summary: string;
}