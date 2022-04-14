export interface Movie {
    id: number;
    name: string;
    genre: Genres[];
    image: string;
    releaseYear: string;
    story: string;
    rating: number;
}

export interface Genres {
    id: number;
    name: string;
}