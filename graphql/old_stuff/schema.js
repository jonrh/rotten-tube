/**
 * Original GrapQL schema file by Radha, modified a bit by jonrh.
 */

"use strict";

var graphql = require("graphql");
var Db = require("./db.js");

// Define type schema

// Channels
var channels = new graphql.GraphQLObjectType({
    name: 'channels',
    description: 'This represents a channel',
    fields: () => ({
        id: {
            type: graphql.GraphQLInt,
            description: 'The id of the channel.',
            resolve(channels) {
                return channels.id;
            }
        },
        name: {
            type: graphql.GraphQLString,
            description: 'The name of the channel',
            resolve(channels) {
                return channels.name;
            }
        },
        url: {
            type: graphql.GraphQLString,
            description: 'The url to the channel on youtube.',
            resolve(channels) {
                return channels.url;
            }
        },
        category: {
            type: graphql.GraphQLString,
            description: 'The category to which this channel belongs.',
            resolve(channels) {
                return channels.category;
            }
        },
        rating: {
            type: graphql.GraphQLInt,
            description: 'the rating',
            resolve(channels) {
                return channels.rating;
            }
        }
    })
});

// Reviews

var reviews = new graphql.GraphQLObjectType({
    name: 'Reviews',
    description: 'Review creator',
    fields: () => ({
        id: {
            type: graphql.GraphQLInt,
            description: 'The id of the Review.',
            resolve(reviews) {
                return reviews.id;
            }
        },
        username: {
            type: graphql.GraphQLString,
            description: 'name of the user wrote the Review',
            resolve(reviews) {
                return reviews.username;
            }
        },
        comment: {
            type: graphql.GraphQLString,
            description: 'The comment.',
            resolve(reviews) {
                return reviews.comment;
            }
        },
        rating: {
            type: graphql.GraphQLInt,
            description: 'The channel rating',
            resolve(reviews) {
                return reviews.rating;
            }
        },
        channel_id: {
            //type: channels,
            type: graphql.GraphQLInt,
            description: 'The channel to which this review belongs.',
            resolve(parent, args) {
                return reviews.channel_id;
                //return Db.models.reviews.findAll({where: args});
            }
        }
    })
});

// Queries
// Find channel based on the _args_ which are id, name, url and category.

var query = new graphql.GraphQLObjectType({
	name: 'Query',
	description: 'This is a root query',
	fields: () => ({
		channel: {
			type: new graphql.GraphQLList(channels),
			args: {
				id: {
					type: graphql.GraphQLInt
				},
				name: {
					type: graphql.GraphQLString
				},
				url: {
					type: graphql.GraphQLString
				},
				category: {
					type: graphql.GraphQLString
				}
			},
			resolve(root, args) {
                console.log(args);
				return {id: 1, name: "derp"};
                //return Db.models.channelsfindAll({where: args});
			}
		},
		review: {
			type: new graphql.GraphQLList(reviews),
			args: {
				id: {
					type: graphql.GraphQLInt
				},
				username: {
					type: graphql.GraphQLString
				},
				channel_id: {
					type: graphql.GraphQLInt
                    //type: channels
				}
			},
			resolve(root, args) {
				return Db.models.channelsfindAll({where: args});
			}
		}
	})
});

var Schema = new graphql.GraphQLSchema({
    query: query
});

module.exports = Schema;