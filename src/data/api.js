// src/data/api.js
// Currently uses local data — swap the functions here when server is ready
// and nothing else in the project needs to change

import { newsItems, getNewsItem, getRelatedItems } from "./newsData"

export async function fetchNewsItems() {
    // TODO: replace with → fetch("https://ccti.edu.gh/wp-json/wp/v2/posts")
    return newsItems
}

export async function fetchNewsItem(slug) {
    // TODO: replace with → fetch(`https://ccti.edu.gh/wp-json/wp/v2/posts?slug=${slug}`)
    return getNewsItem(slug)
}

export async function fetchRelatedItems(slugs) {
    // TODO: replace with → fetch(`https://ccti.edu.gh/wp-json/wp/v2/posts?slugs=${slugs}`)
    return getRelatedItems(slugs)
}