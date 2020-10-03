import { getBooksQuery } from 'queries';
import React from 'react';
import { useQuery } from 'react-apollo';

const BookList = () => {
	const { loading, data } = useQuery(getBooksQuery);
	return (
		<div>
			<ul id='book-list'>
				{!loading && data?.books?.map((book: any) => <li key={book.id}>{book.name}</li>)}
			</ul>
		</div>
	);
};

export default BookList;
