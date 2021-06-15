import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-elastic-carousel';
import Card from '../cards/Card';

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
                            <Card id={categories.id} image={categories.icons[0].url} name={categories.name} />
                        </a>
                    )}
                </Carousel>
            </div>    
   )
}
export default CategoriesList;