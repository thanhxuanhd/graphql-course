import React from 'react';
import './App.css';
import './tailwind.output.css';

// Component
import BookList from './components/BookList';

// Apollo client setup
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AddBook from './components/AddBook';
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App h-full bg-gray-100">
        <div className="w-full mx-auto flex p-6 bg-gray-100 rounded-lg">
          <div className="text-center">
            <h1 className="text-2xl text-blue-700 leading-tight">
              Book React App
          </h1>
          </div>
        </div>
        <div className="container mx-auto">
          <BookList />
          <AddBook />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
