import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';
import { AuthorModel } from '../models';
import { AuthorType } from './Author';

export const BookType: any = new GraphQLObjectType({
	name: 'Book',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
		author: {
			type: AuthorType,
			resolve(parent) {
				return AuthorModel.findById(parent.authorId);
			},
		},
	}),
});
