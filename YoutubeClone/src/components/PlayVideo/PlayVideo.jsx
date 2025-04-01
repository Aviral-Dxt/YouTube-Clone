import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, valueConverter } from '../../Data'
import moment from 'moment';

const PlayVideo = ({ videoId }) => {


    const [videoDeta, setVideoDeta] = useState(null);
    const [channelDeta, setchannelDeta] = useState(null);
    const [commentDeta, setCommentDeta] = useState([]);

    const url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`

    // const channelDeta_url = ` `


  


    // fetching videoDeta 
    const fetchVideoDeta = async () => {

        try {

            const response = await fetch(url);
            const deta = await response.json();
            setVideoDeta(deta.items[0]);

        } catch (error) {
            console.log(error);
        }
    }




    // function  channel deta like channel-logo, subscribers...etc 

    // const fetchChannelDeta = async () => {

    //     try {

    //         const response = await fetch(channelDeta_url);
    //         const deta = await response.json();
    //         setchannelDeta(deta.items[0]);

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


   

    const fetchOtherDeta = async () => {
       
            // fetching  comments deta 
          const commentDeta_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
          await fetch(commentDeta_url).then((res)=>res.json()).then((data)=>setCommentDeta(data.items))       
    }


    useEffect(() => {
        fetchVideoDeta()
    }, [])



    useEffect(() => {
        fetchOtherDeta()
    }, [])


    return (

        <div className='play-video'>


            {/* <video src={video1} controls autoPlay muted ></video> */}

            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


            <h3>{videoDeta ? videoDeta.snippet.title : "Title Here"}</h3>
            <div className="play-video-info">
                <p> {videoDeta ? valueConverter(videoDeta.statistics.viewCount) : "199k"} views &bull , {videoDeta ? moment(videoDeta.snippet.publishedAt).fromNow() : "3 days ago"}</p>
                <div>
                    <span><img src={like} alt="like" /> {videoDeta ? valueConverter(videoDeta.statistics.likeCount) : "199k"} </span>
                    <span><img src={dislike} alt="dislike" />  </span>
                    <span><img src={share} alt="share" /> share </span>
                    <span><img src={save} alt="save" /> save </span>
                </div>
            </div>

            <hr />

            <div className="publisher">
                <img src={jack} alt="jack" />
                <div>
                    <p>{videoDeta ? videoDeta.snippet.channelTitle : ""}</p>
                    <span>10M subscriber</span>
                </div>
                <button>Subscribe</button>
            </div>

            <div className="video-discription">
                <p>{videoDeta ? videoDeta.snippet.description.slice(0, 250) : "Description here"}</p>
                <hr />
                <h4> {videoDeta ? videoDeta.statistics.commentCount : 169} Comments</h4>

                {commentDeta.map((item, index) => {

                    return (

                        <div key={index} className="comments">
                            <img src={item?item.snippet.topLevelComment.snippet.authorProfileImageUrl : {user_profile}} alt="user_profile" />
                            <div>
                                <h3> {item.snippet.topLevelComment.snippet.authorDisplayName} <span>2 days ago</span></h3>
                                <p>  {item.snippet.topLevelComment.snippet.textDisplay} </p>
                                <div className="comment-action">
                                    <img src={like} alt="like" />
                                    <span>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>

                                    <img src={dislike} alt="dislike" />
                                    <span>9</span>
                                </div>
                            </div>
                        </div>


                    )

                })}

                

            </div>
        </div>


    )
}

export default PlayVideo
