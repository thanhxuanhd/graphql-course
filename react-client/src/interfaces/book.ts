
export interface Book {
    name: string,
    genre: string,
    id: string,
    authorId: string
}

export interface BookData {
    books: Array<Book>
}

