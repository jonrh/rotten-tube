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

export const channel4 = {
    channelID: 4,
    channelName: "Comedy Football",
    rating: 8,
    category: "Cooking",
    channelURL: "url"
};

export const channel5 = {
    channelID: 5,
    channelName: "The Death Penalty",
    rating: 7.5,
    category: "Cooking",
    channelURL: "url"
};

export const channel6 = {
    channelID: 6,
    channelName: "Louis C.K.",
    rating: 6,
    category: "Cooking",
    channelURL: "url"
};

export const channel7 = {
    channelID: 7,
    channelName: "Airplane Essentials",
    rating: 8,
    category: "Cooking",
    channelURL: "url"
};

export const channel8 = {
    channelID: 8,
    channelName: "Traveling With Friends",
    rating: 7.5,
    category: "Cooking",
    channelURL: "url"
};

export const channel9 = {
    channelID: 9,
    channelName: "Travel abroad",
    rating: 6,
    category: "Cooking",
    channelURL: "url"
};


export const cookingChannels = [channel1, channel2, channel3];
export const comedyChannels = [channel4, channel5, channel6];
export const travelChannels = [channel7, channel8, channel9];

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
        channels: comedyChannels // just being lazy here re-using cooking ch.
    },
    {
        categoryName: "Traveling",
        channels: travelChannels // just being lazy here re-using cooking ch.
    }
];