import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

// Import from the DB Channel and Review tables!
// import co from 'co';
// import User from './user';

/**
 * generate projection object for mongoose
 * @param  {Object} fieldASTs
 * @return {Project}
 */
function getProjection (fieldASTs) {
  return fieldASTs.selectionSet.selections.reduce((projections, selection) => {
    projections[selection.name.value] = 1;

    return projections;
  }, {});
}

// Define type schema

var channelType = new GraphQLObjectType({
  name: 'Channel',
  description: 'Channel creator',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The id of the channel.',
    },
    name: {
      type: GraphQLString,
      description: 'The name of the channel',
    },
    url: {
      type: new GraphQLString,
      description: 'The url to the channel on youtube.',
    },
    category: {
      type: GraphQLString,
      description: 'The category to ehich this channel belongs.',
}  
})
});

var reviewType = new GraphQLObjectType({
  name: 'Review',
  description: 'Review creator',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The id of the Review.',
    },
    username: {
      type: GraphQLString,
      description: 'name of the user wrote the Review',
    },
    comment: {
      type: new GraphQLString,
      description: 'The comment.',
    },
    rating: {
      type: new GraphQLEnumType,
      description: 'The channel rating',
    },
    channel: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The channel to which this review belongs.',
}  
})
});


// Query

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: function() {
          return 'world';
        }
      },
      channel: {
        type: userType,
        args: {
          id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve: (root, {id}, source, fieldASTs) => {
          var projections = getProjection(fieldASTs);
          return Channel.findById(id, projections);
        }
      }
    }
  }),

// Mutation : Just one that creates the review.

mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createReview: {
        type: reviewType,
        args: {
          name: {
            name: 'name',
            type: GraphQLString
          }
        },
        resolve: (obj, {name}, source, fieldASTs) => co(function *() {
          var projections = getProjection(fieldASTs);

          var review = new Review();
          review.name = name;


          return yield review.save();
        })
      }
}
}),




