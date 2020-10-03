import { GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { AuthorModel, BookModel } from '../models';
import { AuthorType } from './Author';
import { BookType } from './Book';

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		book: {
			type: BookType,
			args: {
				id: { type: GraphQLID },
			},
			resolve(parent, args) {
				return BookModel.findById(args.id);
			},
		},
		books: {
			type: new GraphQLList(BookType),
			resolve() {
				return BookModel.find({});
			},
		},
		author: {
			type: AuthorType,
			args: {
				id: { type: GraphQLID },
			},
			resolve(parent, args) {
				return AuthorModel.findById(args.id);
			},
		},
		authors: {
			type: new GraphQLList(AuthorType),
			resolve() {
				return AuthorModel.find({});
			},
		},
	},
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addAuthor: {
			type: AuthorType,
			args: {
				name: { type: GraphQLString },
				age: { type: GraphQLInt },
			},
			async resolve(parent, args) {
				const author = new AuthorModel({
					name: args.name,
					age: args.age,
				});
				return await author.save();
			},
		},
		addBook: {
			type: BookType,
			args: {
				name: { type: GraphQLString },
				genre: { type: GraphQLString },
				authorId: { type: GraphQLString },
			},
			async resolve(parent, args) {
				const book = new BookModel({
					name: args.name,
					genre: args.genre,
					authorId: args.authorId,
				});
				return await book.save();
			},
		},
	},
});

export default new GraphQLSchema({ query: RootQuery, mutation: Mutation });
