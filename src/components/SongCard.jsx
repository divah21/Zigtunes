import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { music_disc } from "../assets";

import PlayPause from "./PlayPause";
//import { playPause, setActiveSong } from "../redux/features/playerSlice";


const SongCard = (track, i) => {
  
 const activeSong = 'Test';

 return (
  
  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup cursor-pointer">
    <div className="relative w-full h-56 group">
      <div className={`absolute inset-0 items-center justify-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === track.name ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>

        {/* <PlayPause />  */}
       </div>
        <img alt="img_cover"  src={music_disc}/>
    </div>
    <div className=" mt-4 flex flex-col">
      <p className="font-semibold text-lg text-white truncate">
        <Link to ={`/track/${track?.key}`}>
        {track.track.name}
        </Link>
      </p>
      <p className="text-sm truncate text-gray-300 mt-1">
        <Link to={track.track.artist?`/artist/${track?.track.artist}` : '/top-artist'}>
        {track.track.artist.name}
        </Link>
      </p>

    </div>
  </div>
);
}

export default SongCard;
