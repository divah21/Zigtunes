import { Error, Loader, SongCard } from "../components";

import { useEffect, useState } from "react";
import { getMusicData } from "../redux/services/musicData";

import {useSelector, useDispatch } from "react-redux";

const Discover = () => {

  const [musicData, setMusicData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
     const data = await getMusicData();
      setMusicData(data);
      
    };
    fetchData();
  }, []);



  return (
    <div className="flex flex-col">
      <div className="w-full items-center justify-center  sm:flex-row mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white">Trending</h2>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {musicData.map((track, i) => (
          <SongCard
           key={track.key}
           track={track} 
           i={i}
           />
        ))}
        
      </div>
    </div>
  );
};

export default Discover;
