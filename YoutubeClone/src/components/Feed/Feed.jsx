import React, { useEffect, useState } from 'react';
import './Feed.css';
import moment from 'moment';
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom';
import { API_KEY, view_count_valueConverter } from '../../Data';




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

         {deta.map((item, index) => {
            return (

               <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                  <img src={item.snippet.thumbnails.medium.url} alt="VodeoImg" />
                  <h2>{item.snippet.title}</h2>
                  <h3>{item.snippet.channelTitle}</h3>
                  <p>{view_count_valueConverter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    
               </Link >

            )
         })}





      </div>
   )
}

export default Feed
