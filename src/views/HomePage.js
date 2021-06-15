import BackgroundBanner from '../components/banner/BackgroundBanner';
import './HomePage.css';
import SongsData from '../components/api/SongsData';
import Player from '../components/player/Player';

const HomePage  = () => {
    return (
        <div>
            <BackgroundBanner />
            <SongsData />
            <Player />
        </div>
    )
}

export default HomePage;