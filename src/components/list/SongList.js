import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Carousel from 'react-elastic-carousel';
import SongCard from '../cards/SongCard'; 

const SongList = (props) => {
    const {singles} = props;

    const breakpoints = [
      {width: 1, itemsToShow: 1},
      {width: 500, itemsToShow:3},
      {width: 768, itemsToShow:6},
      {width: 1200, itemsToShow:8}
    ]
    return (
  <div>
      <Carousel breakPoints={breakpoints} pagination={false}>
          {singles.map(
            (singles, idx) =>   
            <a href={singles.external_urls.spotify} style={{textDecoration: 'none'}} key={idx}>
              <SongCard singles={singles} />
            </a>  
          )}
      </Carousel>
  </div>    
   )
}
export default SongList;