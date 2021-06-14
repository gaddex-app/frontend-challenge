import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Carousel from 'react-elastic-carousel';
import CategoriesCard from '../cards/CategoriesCard';

const CategoriesList = (props) => {
    const {categories} = props;

    const breakpoints = [
      {width: 1, itemsToShow: 1},
      {width: 500, itemsToShow:3},
      {width: 768, itemsToShow:6},
      {width: 1200, itemsToShow:8}
    ];

    return (
  <div>
      <Carousel breakPoints={breakpoints} pagination={false}>
      {categories.map(
            (categories, idx) =>   
            <a href={categories.href} style={{textDecoration: 'none'}} key={idx} >
                <CategoriesCard categories={categories}/>
            </a>
          )}
      </Carousel>
  </div>    
   )
}
export default CategoriesList;