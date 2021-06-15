import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-elastic-carousel';
import Card from '../cards/Card'; 

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
            <a href={ singles.external_urls.spotify } style={{textDecoration: 'none'}} key={ idx }>
              <Card id={ singles.id } name={ singles.name } image={ singles.images[0].url } />
            </a>  
          )}
      </Carousel>
  </div>    
   )
}
export default SongList;