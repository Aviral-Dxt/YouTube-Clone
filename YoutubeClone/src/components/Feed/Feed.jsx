import React, { useEffect, useState } from 'react';
import './Feed.css';

import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom';
import { API_KEY } from '../../Data';




const Feed = ({ category }) => {

   const [deta, setDeta] = useState([]);

   const fetchDeta = async () => {

      let videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`

      try {

         const response = await fetch(videoList_url);
         const deta = await response.json();

         setDeta(deta.items);

      } catch (error) {
         console.log(error);

      }
   }

   useEffect(() => {
      fetchDeta()

   }, [category])



   return (
      <div className="feed">

       {deta.map((item,index)=>{
         return (
             
            <Link to={`video/20/4521`} className='card'>
            <img src={thumbnail1} alt="thumb1" />
            <h2>Best location to visit in your holidays with your family and friends</h2>
            <h3>TravellerHub</h3>
            <p>15k views &bull; 3 days ago</p>
            
         </Link >

         )
       })}

        



      </div>
   )
}

export default Feed
