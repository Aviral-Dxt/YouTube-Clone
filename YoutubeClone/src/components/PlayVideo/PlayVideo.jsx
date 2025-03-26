import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {

    return (

        <div className='play-video'>

            <video src={video1} controls autoPlay muted ></video>
            <h3>Best Youtube channel to Explore the World..!</h3>
            <div className="play-video-info">
                <p> 1890 views &bull , 2 days ago</p>
                <div>
                    <span><img src={like} alt="like" /> 169 </span>
                    <span><img src={dislike} alt="dislike" /> 6 </span>
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
                <p>Channel that makes us Happy</p>
                <p>Subscribe Shaktiman to Watch more Episode to Transform your Life</p>
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
