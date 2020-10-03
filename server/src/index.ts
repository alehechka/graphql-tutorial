import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';
import schema from './schema';

const app = express();

const mongoPassword = 'DGbLEz9GTSDmJXh';
const mongoDB = 'Cluster0';
const mongoUser = 'alehechka';
const mongoConnect = `mongodb+srv://${mongoUser}:${mongoPassword}@cluster0.ddlcb.gcp.mongodb.net/${mongoDB}?retryWrites=true&w=majority`;

mongoose
	.connect(mongoConnect, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.error(err));

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
	console.log(`Listening on port 4000...`);
});
