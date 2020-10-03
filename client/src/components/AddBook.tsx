import { addBookMutation, getAuthorsQuery, getBooksQuery } from 'queries';
import React from 'react';
import { useMutation, useQuery } from 'react-apollo';
import { useForm } from 'react-hook-form';

const AddBook = () => {
	const [addBook] = useMutation(addBookMutation);
	const { register, handleSubmit, reset } = useForm();
	const submit = async (formParams: any) => {
		await addBook({ variables: { ...formParams }, refetchQueries: [{ query: getBooksQuery }] });
		reset();
	};
	const { loading, data } = useQuery(getAuthorsQuery);
	return (
		<form id='add-book' onSubmit={handleSubmit(submit)}>
			<div className='field'>
				<label>Book name:</label>
				<input type='text' name='name' ref={register} />
			</div>

			<div className='field'>
				<label>Genre:</label>
				<input type='text' name='genre' ref={register} />
			</div>

			<div className='field'>
				<label>Author:</label>
				<select ref={register} name='authorId'>
					<option value=''>Select author</option>
					{!loading &&
						data?.authors?.map((author: any) => (
							<option key={author.id} value={author.id}>
								{author.name}
							</option>
						))}
				</select>
			</div>

			<button type='submit'>+</button>
		</form>
	);
};

export default AddBook;
