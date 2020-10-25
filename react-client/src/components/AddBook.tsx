import React, { Component } from 'react';
import { graphql, ChildDataProps  } from "@apollo/react-hoc";
import { Mutation } from 'react-apollo';
import { getAuthorsQuery, addBookMutation } from '../queries/queries';
import { AuthorData } from '../interfaces/author';
import { Book } from '../interfaces/book';

type ChildAuthorProps = ChildDataProps<{}, AuthorData>;

type BookProps = {
    name: string,
    genre: string,
    authorId: string
}

type ChildBookProps = ChildDataProps<BookProps, Book>;

// Display Author data in select box
const Authors = graphql<{}, AuthorData, {}, ChildAuthorProps>(getAuthorsQuery);

export const DisplayAuthor = Authors(({ data: { loading, error, authors } }) => {
    if (loading) return <>Loading</>;
    if (error) return <>ERROR</>;
    return <>{authors?.map(author => {
        return <option key={author.id} value={author.id}>{author.name}</option>
    })}</>;
});

class AddBook extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        };
    }

    submitForm(e: any) {
        e.preventDefault()
        console.log('model', this.state);
        // use the addBookMutation
    }
    render() {
        return (
            <div className="mt-4">
                <h1>Add Book</h1>
                <form id="add-form" className="w-full max-w-lg" onSubmit={this.submitForm.bind(this)}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="book-name">
                                Name
                            </label>
                            <input className="appearance-none block w-full 
                                bg-gray-200 text-gray-700 border 
                                rounded py-3 px-4 mb-3 
                                leading-tight 
                                focus:outline-none focus:bg-white" id="book-name" type="text" placeholder="Book Name" onChange={(e) => this.setState({ name: e.target.value })} />
                        </div>

                        <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="book-genre">
                                Genre
                            </label>
                            <input className="appearance-none block w-full 
                                bg-gray-200 text-gray-700 border 
                                rounded py-3 px-4 mb-3 
                                leading-tight 
                                focus:outline-none focus:bg-white" id="book-genre" type="text" placeholder="Book Genre" onChange={(e) => this.setState({ genre: e.target.value })} />
                        </div>

                        <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="book-author">
                                Author
                            </label>
                            <div className="inline-block relative w-full">
                                <select className="block appearance-none w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 rounded leading-tight" onChange={(e) => this.setState({ authorId: e.target.value })}>
                                    <option>Please select author</option>
                                    <DisplayAuthor />
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-full px-3 mb-6 md:mb-5">
                            <button title="Add book" type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                <svg className="w-4 mx-auto mr-2    " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Add Book</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div >
        )
    }
}

export default (AddBook);