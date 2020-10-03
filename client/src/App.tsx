import ApolloClient from 'apollo-boost';
import AddBook from 'components/AddBook';
import BookList from 'components/BookList';
import React from 'react';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<div id='main'>
				<h1>Adam's Reading List</h1>
				<BookList />
				<AddBook />
			</div>
		</ApolloProvider>
	);
};

export default App;
