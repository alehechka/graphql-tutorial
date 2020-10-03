import BookDetails from 'components/BookDetails';
import { getBooksQuery } from 'queries';
import React from 'react';
import { useQuery } from 'react-apollo';

const BookList = () => {
	const { loading, data } = useQuery(getBooksQuery);
	const [selectedBook, setSelectedBook] = React.useState('');
	return (
		<div>
			<ul id='book-list'>
				{!loading &&
					data?.books?.map((book: any) => (
						<li key={book.id} onClick={() => setSelectedBook(book.id)}>
							{book.name}
						</li>
					))}
			</ul>
			<BookDetails id={selectedBook} />
		</div>
	);
};

export default BookList;
