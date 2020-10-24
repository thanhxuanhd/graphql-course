import React from 'react';
import { graphql } from "@apollo/react-hoc";
import { getBooksQuery } from '../queries/queries'
import { BookData } from '../interfaces/book';

const BookList = graphql<{}, BookData>(getBooksQuery);

export default BookList(({ data }) => {
    if (data!.loading) return <div>Loading</div>;
    if (data!.error) return <h1>Error</h1>;
    return (
        <table className="table-auto border w-full">
            <thead>
                <tr>
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Genre</th>
                </tr>
            </thead>
            <tbody>
                {data?.books && data!.books.map(book => <tr key={book.id} className="text-gray-700">
                    <td className="border">
                        {book.name}
                    </td>
                    <td className="border">
                        {book.genre}
                    </td>
                </tr>)}
            </tbody>
        </table>

    );
});
