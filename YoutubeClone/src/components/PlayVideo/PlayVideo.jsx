import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, view_count_valueConverter } from '../../Data'
import moment from 'moment';

const PlayVideo = ({ videoId }) => {


    const [videoDeta, setVideoDeta] = useState(null);

    const url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`

    const fetchVideoDeta = async () => {

        try {

            const response = await fetch(url);
            const deta = await response.json();
            setVideoDeta(deta.items[0]);

        } catch (error) {
            console.log(error);
        }
    }

     
    useEffect(()=>{
        fetchVideoDeta()
    },[videoId])

   
    
    return (

        <div className='play-video'>

            {/* <video src={video1} controls autoPlay muted ></video> */}

            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


            <h3>{videoDeta?videoDeta.snippet.title : "Title Here"}</h3>
            <div className="play-video-info">
                <p> {videoDeta?view_count_valueConverter(videoDeta.statistics.viewCount) : "199k"} views &bull , {videoDeta?moment(videoDeta.snippet.publishedAt).fromNow() : "3 days ago"}</p>
                <div>
                    <span><img src={like} alt="like" /> {videoDeta?view_count_valueConverter(videoDeta.statistics.likeCount) : "199k"} </span>
                    <span><img src={dislike} alt="dislike" />  </span>
                    <span><img src={share} alt="share" /> share </span>
                    <span><img src={save} alt="save" /> save </span>
                </div>
            </div>

            <hr />

            <div className="publisher">
                <img src={jack} alt="jack" />
                <div>
                    <p>ShaktiMan</p>
                    <span>10M subscriber</span>
                </div>
                <button>Subscribe</button>
            </div>

            <div className="video-discription">
                <p>{videoDeta ? videoDeta.snippet.description.slice(0,250) : "Description here"}</p>
                <hr />
                <h4>69 Comments</h4>
                <div className="comments">
                    <img src={user_profile} alt="user_profile" />
                    <div>
                        <h3>Jack Nicholson <span>2 days ago</span></h3>
                        <p>"Shaktimaan was an iconic superhero show! Nostalgic vibes, great moral lessons, and Mukesh Khanna’s legendary performance. </p>
                        <div className="comment-action">
                            <img src={like} alt="like" />
                            <span>6969</span>

                            <img src={dislike} alt="dislike" />
                            <span>9</span>
                        </div>
                    </div>
                </div>

                <div className="comments">
                    <img src={user_profile} alt="user_profile" />
                    <div>
                        <h3>Jack Nicholson <span>2 days ago</span></h3>
                        <p>"Shaktimaan was an iconic superhero show! Nostalgic vibes, great moral lessons, and Mukesh Khanna’s legendary performance. The storyline, action, and life lessons made it unforgettable. Truly a classic for every 90s kid!" 🚀🔥</p>
                        <div className="comment-action">
                            <img src={like} alt="like" />
                            <span>6969</span>

                            <img src={dislike} alt="dislike" />
                            <span>9</span>
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <img src={user_profile} alt="user_profile" />
                    <div>
                        <h3>Jack Nicholson <span>2 days ago</span></h3>
                        <p>"Shaktimaan was an iconic superhero show! Nostalgic vibes, great moral lessons, and Mukesh Khanna’s legendary performance. The storyline, action, and life lessons made it unforgettable. Truly a classic for every 90s kid!" 🚀🔥</p>
                        <div className="comment-action">
                            <img src={like} alt="like" />
                            <span>6969</span>

                            <img src={dislike} alt="dislike" />
                            <span>9</span>
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <img src={user_profile} alt="user_profile" />
                    <div>
                        <h3>Jack Nicholson <span>2 days ago</span></h3>
                        <p>"Shaktimaan was an iconic superhero show! Nostalgic vibes, great moral lessons, and Mukesh Khanna’s legendary performance. The storyline, action, and life lessons made it unforgettable. Truly a classic for every 90s kid!" 🚀🔥</p>
                        <div className="comment-action">
                            <img src={like} alt="like" />
                            <span>6969</span>

                            <img src={dislike} alt="dislike" />
                            <span>9</span>
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <img src={user_profile} alt="user_profile" />
                    <div>
                        <h3>Jack Nicholson <span>2 days ago</span></h3>
                        <p>"Shaktimaan was an iconic superhero show! Nostalgic vibes, great moral lessons, and Mukesh Khanna’s legendary performance. The storyline, action, and life lessons made it unforgettable. Truly a classic for every 90s kid!" 🚀🔥</p>
                        <div className="comment-action">
                            <img src={like} alt="like" />
                            <span>6969</span>

                            <img src={dislike} alt="dislike" />
                            <span>9</span>
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <img src={user_profile} alt="user_profile" />
                    <div>
                        <h3>Jack Nicholson <span>2 days ago</span></h3>
                        <p>"Shaktimaan was an iconic superhero show! Nostalgic vibes, great moral lessons, and Mukesh Khanna’s legendary performance. The storyline, action, and life lessons made it unforgettable. Truly a classic for every 90s kid!" 🚀🔥</p>
                        <div className="comment-action">
                            <img src={like} alt="like" />
                            <span>6969</span>

                            <img src={dislike} alt="dislike" />
                            <span>9</span>
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <img src={user_profile} alt="user_profile" />
                    <div>
                        <h3>Jack Nicholson <span>2 days ago</span></h3>
                        <p>"Shaktimaan was an iconic superhero show! Nostalgic vibes, great moral lessons, and Mukesh Khanna’s legendary performance. The storyline, action, and life lessons made it unforgettable. Truly a classic for every 90s kid!" 🚀🔥</p>
                        <div className="comment-action">
                            <img src={like} alt="like" />
                            <span>6969</span>

                            <img src={dislike} alt="dislike" />
                            <span>9</span>
                        </div>
                    </div>
                </div>





            </div>
        </div>

    )
}

export default PlayVideo
