import {useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import { useGetMusicDataQuery } from '../redux/services/lastFm';


import PlayPause from './PlayPause';
import {playPause, setActiveSong} from '../redux/features/playerSlice';

const TopChartCard = ({track, i,isPlaying,activeSong, handlePauseClick, handlePlayClick}) =>(
  <div className='w-full text-black flex flex-row items-center hover:bg-[#4c426e] py2 p-4 rounded-lg cursor-pointer'>
   <h3 className='font-bold text-base text-white mr-3'>{i + 1}.</h3>
   <div className='flex-1 flex-row justify-center items-center'>
    
        <Link to={`/track/${track.key}`}>
          <p className='text-xl mx-3 font-bold text-white'>{track}</p>
        </Link>
   </div>
   <PlayPause
   isPlaying={isPlaying}
   activeSong={activeSong}
   track={track}
   handlePause={handlePauseClick}
   handlePlay={()=>handlePlayClick(track, i)}
   />
  </div>
);
const TopPlay = () => {
  const dispatch = useDispatch();
  const {activeSong, isPlaying } = useSelector((state) => state.player);
  const {data} = useGetMusicDataQuery();

  const divRef = useRef(null);


  const trackArray = data?.tracks.track || [];

   // Perform slice operation on the track array
   const topPlays = trackArray.slice(0, 10).map(track => track.name);

  useEffect(() => {
    divRef.current.scrollIntoView({behavior: 'smooth'});
  });

  const handlePauseClick =() =>{
    dispatch(playPause(false));
  };
  const handlePlayClick =( track, i) =>{
    dispatch(playPause({track, data, i}));
    dispatch(playPause(true));
  };
return (
  <div ref={divRef} className='xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col'>
   <div className='w-full flex flex-col'>
    <div className='flex flex-row justify-between items-center'>
       <h2 className='text-white font-bold text-2xl'>
        Top Ten
       </h2>
       <Link to ="/top-charts" >
        <p className='text-gray-300 text-base cursor-pointer'>See More</p>
       </Link>
    </div>
    <div className='mt-4 flex flex-col gap-1'>
    {topPlays?.map((track, i) => (
      <TopChartCard
      key ={track.key}
      track ={track}
      i = {i}
      isPlaying = {isPlaying}
      activeSong = {activeSong}
      handlePauseClick = {handlePauseClick}
      handlePlayClick = {handlePlayClick}
      />
    ))}
    </div>
   </div>
   
   </div>
   
)


};

export default TopPlay;
