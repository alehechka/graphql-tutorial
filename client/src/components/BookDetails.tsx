import { getBookQuery } from 'queries';
import React from 'react';
import { useQuery } from 'react-apollo';

const BookDetails = ({ id }: { id: string }) => {
	const { loading, data } = useQuery(getBookQuery, { variables: { id } });
	const book = data?.book;
	return (
		<div id='book-details'>
			{id ? (
				!loading && (
					<div>
						<h2>{book.name}</h2>
						<p>{book.genre}</p>
						<p>{book.author.name}</p>
						<p>All books by this author:</p>
						<ul className='other-books'>
							{book.author.books.map((item: any) => {
								return <li key={item.id}>{item.name}</li>;
							})}
						</ul>
					</div>
				)
			) : (
				<div>No book selected...</div>
			)}
		</div>
	);
};

export default BookDetails;
