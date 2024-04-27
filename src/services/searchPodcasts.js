export const searchPodcasts = (podcasts, searchTerm) => podcasts.filter((podcast) => {
    const titleMatch = podcast.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const authorMatch = podcast.author
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    return titleMatch || authorMatch;
});