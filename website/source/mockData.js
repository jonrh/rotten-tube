/**
 * This files stores mock JSON data. Useful for until we start fetching data
 * from REST and GraphQL.
 */

"use strict";

/* Mock YouTube channels */
export const channel1 = {
    channelID: 1,
    channelName: "You Suck at Cooking",
    rating: 8,
    category: "Cooking",
    channelURL: "url"
};

export const channel2 = {
    channelID: 2,
    channelName: "How to Cook That",
    rating: 7.5,
    category: "Cooking",
    channelURL: "url"
};

export const channel3 = {
    channelID: 3,
    channelName: "COOKING WITH SPEIRS",
    rating: 6,
    category: "Cooking",
    channelURL: "url"
};

export const cookingChannels = [channel1, channel2, channel3];

/* Mock reviews */
// none so far

/* Mock YouTube channels */
export const frontPageCategories = [
    {
        categoryName: "Cooking",
        channels: cookingChannels
    },
    {
        categoryName: "Comedy",
        channels: cookingChannels // just being lazy here re-using cooking ch.
    },
    {
        categoryName: "Traveling",
        channels: cookingChannels // just being lazy here re-using cooking ch.
    }
];