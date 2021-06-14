import BackgroundBanner from '../components/banner/BackgroundBanner';
import './HomePage.css';
import SongsData from '../components/api/SongsData';

const HomePage  = () => {
    return (
        <div>
            <BackgroundBanner />
            <SongsData />
        </div>
    )
}

export default HomePage;