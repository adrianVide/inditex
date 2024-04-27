import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { formatPodcasts } from '../services/formatPodcasts';
import PodcastCard from '../Components/PodcastCard';

const Home = () => {
    const [podcasts, setPodcasts] = useState([]);



    useEffect(() => {
        fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
        .then(response => response.json())
        .then(data => setPodcasts(formatPodcasts(data)))    
    }, [])



   console.log(podcasts)
return (
    <div>
        {podcasts?.map(podcast => (
            <PodcastCard key={podcast.id} podcast={podcast} />
        ))}
    </div>
)
}

export default Home