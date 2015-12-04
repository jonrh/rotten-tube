"use strict";

var graphql = require("graphql");
var GraphQLInt = graphql.GraphQLInt;
var GraphQLString = graphql.GraphQLString;
var GraphQLObjectType = graphql.GraphQLObjectType;
var GraphQLList = graphql.GraphQLList;
var GraphQLSchema = graphql.GraphQLSchema;

var db = require("./database.js");


var reviewType = new GraphQLObjectType({
    name: "review",
    description: "A review for a YouTube channel",
    fields: {
        id: { type: GraphQLInt },
        username: { type: GraphQLString },
        comment: { type: GraphQLString },
        rating: { type: GraphQLString },
    }
});

var channelType = new GraphQLObjectType({
    name: "channel",
    description: "Represents a YouTube channel",
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        url: { type: GraphQLString },
        category: { type: GraphQLString },
        rating: {
            type: GraphQLInt,
            description: "Average numeric rating for this channel"
        },
        reviews: {
            type: new GraphQLList(reviewType),
            description: "A channel can have zero to many reviews",
            resolve: channel => db.getReviewsByChannelId(channel.id)
        }
    }
});

var channelCategoryType = new GraphQLObjectType({
    name: "channelCategory",
    description: "A category of YouTube channels",
    fields: {
        category: {
            type: GraphQLString,
            description: "One of: Cooking, Comedy, Traveling. For simplicity.",
            resolve: category => category
        },
        channels: {
            type: new GraphQLList(channelType),
            resolve: category => db.getChannelsByCategory(category)
        }
    }
});

var query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        channel: {
            type: new GraphQLList(channelType),
            args: {
                id: { type: GraphQLInt },
                category: { type: GraphQLString }
            },
            resolve: function(root, args) {
                // If we are querying by channel ID
                if (args.id) {
                    return db.getChannelById(args.id);
                }

                // If we are querying for channels belonging to specific category
                if (args.category) {
                    return db.getChannelsByCategory(args.category);
                }
            }
        },
        categories: {
            type: new GraphQLList(channelCategoryType),
            resolve: function(root, args) {
                return ["Cooking", "Comedy", "Traveling"];
            }
        }
    }
});

var Schema = new GraphQLSchema({
    query: query
});

module.exports = Schema;