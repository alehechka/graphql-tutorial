import { GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import { BookModel } from '../models';
import { BookType } from './Book';

export const AuthorType: any = new GraphQLObjectType({
	name: 'Author',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
		books: {
			type: new GraphQLList(BookType),
			resolve(parent) {
				return BookModel.find({ authorId: parent.id });
			},
		},
	}),
});
