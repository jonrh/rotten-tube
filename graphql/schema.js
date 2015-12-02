import {
	graphql,
		GraphQLSchema,
		GraphQLObjectType,
		GraphQLString,
		GraphQLInt,
		GraphQLSchema,
		GraphQLList
} from 'graphql';
import Db from './db';

// Define type schema
// Channels

var channels = new GraphQLObjectType({
name: 'channels',
description: 'This represents a channel',
fields: () => ({
	id: {
		type: GraphQLInt,
		description: 'The id of the channel.',
		resolve(channels) {
		return channels.id;
			}
		},
	name: {
		type: GraphQLString,
		description: 'The name of the channel',
		resolve(channels) {
		return channels.name;
			}
		},
	url: {
		type: GraphQLString,
      		description: 'The url to the channel on youtube.',
      		resolve(channels) {
	     	return channels.url;
      			}
     		},
	category: {
		type: GraphQLString,
      		description: 'The category to which this channel belongs.',
      		resolve(channels) {
	      	return channels.category;
      			}
	  	},
	rating: {
		type: GraphQLInt,
      		description: 'the rating',
      		resolve(channels) {
	      	return channels.rating;
      			}
		}
	})
});

// Reviews

var reviews = new GraphQLObjectType({
name: 'Reviews',
description: 'Review creator',
fields: () => ({
	id: {
		type: GraphQLInt,
		description: 'The id of the Review.',
		resolve(reviews) {
		return reviews.id;
			}

		},
	username: {
		type: GraphQLString,
		description: 'name of the user wrote the Review',
		resolve(reviews) {
		return reviews.username;
			}
		},
	comment: {
		type: GraphQLString,
      		description: 'The comment.',
      		resolve(reviews) {
	      	return reviews.comment;
      			}
		 },
	rating: {
		type: GraphQLInt,
      		description: 'The channel rating',
      		resolve(reviews) {
	      	return reviews.rating;
      			}
		},
	channel_id: {
		type: channels,
      		description: 'The channel to which this review belongs.',
      		resolve(parent, args) {
	      	return Db.models.reviews.findAll({where: args});
      			}
		} 
	})

});

// Queries
// Find channel based on the _args_ which are id, name, url and category.

var query = new GraphQLObjectType({
	name: 'Query',
	description: 'This is a root query',
	fields: () => ({
		channel: {
			type: new GraphQLList(channels),
			args: {
				id: {
					type: GraphQLInt
				},
				name: {
					type: GraphQLString
				},
				url: {
					type: GraphQLString
				},
				category: {
					type: GraphQLString
				}
			},
			resolve(root, args) {
				return Db.models.channelsfindAll({where: args});
			}
		},
		review: {
			type: new GraphQLList(reviews),
			args: {
				id: {
					type: GraphQLInt
				},
				username: {
					type: GraphQLString
				},
				channel_id: {
					type: channels
				}
			},
			resolve(root, args) {
				return Db.models.channelsfindAll({where: args});
			}
		},
	})
})

var Schema = new GraphQLSchema({
  query: Query
});

export default schema;
