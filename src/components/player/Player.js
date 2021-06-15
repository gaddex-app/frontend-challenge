import './Player.css';
import sampleImg from '../../assets/blouse.png';
import { MdSkipPrevious, MdPlayArrow, MdSkipNext } from 'react-icons/md';
import { AiOutlineHeart, AiFillSound } from 'react-icons/ai';
import { FaRandom } from 'react-icons/fa';
import { IoMdRepeat } from 'react-icons/io';
const Player = () => {

    return (
      <div className="player">
        <div className="container">
          <img className="sampleImg" src={sampleImg}/>
          <p id="playerCurrSong">Blouse</p>
          <MdSkipPrevious />
          <MdPlayArrow />
          <MdSkipNext />
          <div className="bottomBorderLine"></div>
          <AiOutlineHeart />
          <FaRandom />
          <IoMdRepeat />
          <AiFillSound />
        </div>
      </div>  
    )

}

export default Player;