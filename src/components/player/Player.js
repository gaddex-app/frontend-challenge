import './Player.css';
import sampleImg from '../../assets/blouse.png';

import Previous from '../svg/Previous';
import Play from '../svg/Play';
import Next from '../svg/Next';

import Favorite from '../svg/Favorite';
import Random from '../svg/Random';
import Repeat from '../svg/Repeat';
import Volume from '../svg/Volume';

import Dots from '../svg/Dots';

const Player = () => {
    return (
      <div className="player">
        <div className="container">

          <div className="flex">
            <img className="sampleImg" src={sampleImg}/>
            <p id="playerCurrSong">Blouse</p>
          </div>

          <div className="flex" style={{marginLeft: '20px'}}>
            <Previous width="25px" height="25px" color="#a5a5a5"/>
            <Play width="25px" height="25px" color="#a5a5a5"/>
            <Next width="25px" height="25px" color="#a5a5a5"/>
          </div>

          <div className="bottomBorderLinePlayer"></div>

          <div id="rightBtns" className="show">
              <Favorite width="25px" height="25px" color="#a5a5a5"/>
              <Random width="25px" height="25px" color="#a5a5a5" />
              <Repeat width="25px" height="25px" color="#a5a5a5" />
              <Volume width="25px" height="25px" color="#a5a5a5" />
          </div>
          
          <div id="dots">
              <Dots width="25px" height="25px" color="#a5a5a5" />
          </div>

        </div>
      </div>  
    )

}

export default Player;