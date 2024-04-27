export const formatPodcasts = (podcasts) => {

    let formattedPodcasts = []

    podcasts?.feed?.entry?.map(podcast => (formattedPodcasts.push({
        id: podcast.id.attributes['im:id'],
        title: podcast['im:name'].label,
        author: podcast['im:artist'].label,
        image: podcast['im:image'][2].label,
        description: podcast['summary'].label
    })))

    return formattedPodcasts
}