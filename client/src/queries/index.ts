import { gql } from 'apollo-boost';

export const getAuthorsQuery = gql`
	query GetAuthors {
		authors {
			name
			id
		}
	}
`;

export const getBooksQuery = gql`
	query GetBooks {
		books {
			name
			id
		}
	}
`;

export const getBookQuery = gql`
	query GetBook($id: ID) {
		book(id: $id) {
			name
			id
			genre
			author {
				name
				id
				age
				books {
					name
					id
				}
			}
		}
	}
`;

export const addBookMutation = gql`
	mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
		addBook(name: $name, genre: $genre, authorId: $authorId) {
			name
			id
		}
	}
`;
