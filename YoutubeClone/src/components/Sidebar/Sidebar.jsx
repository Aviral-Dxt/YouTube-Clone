import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const Sidebar = () => {
    return (
        <div className='sidebar'>

            <div className="sortcut-links">

                <div className="side-link">
                    <img src={home} alt="home-icon" /> <p>Home</p>
                </div>
                <div className="side-link">
                    <img src={game_icon} alt="game-icon" /> <p>Gaming</p>
                </div>
                <div className="side-link">
                    <img src={automobiles} alt="automobile-icon" /> <p>Automobiles</p>
                </div>
                <div className="side-link">
                    <img src={sports} alt="sport-icon" /> <p>Sports</p>
                </div>
                <div className="side-link">
                    <img src={entertainment} alt="entertainment-icon" /> <p>Entertainment</p>
                </div>
                <div className="side-link">
                    <img src={tech} alt="tech-icon" /> <p>Technology</p>
                </div>
                <div className="side-link">
                    <img src={music} alt="music-icon" /> <p>Music</p>
                </div>
                <div className="side-link">
                    <img src={blogs} alt="blog-icon" /> <p>Blogs</p>
                </div>

                <div className="side-link">
                    <img src={news} alt="news-icon" /> <p>News</p>
                </div>


                <hr />
            </div>

            <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-link">
                    <img src={jack} alt="jack-img" /> <p>PewDiePai</p>
                </div>
                <div className="side-link">
                    <img src={simon} alt="simon-img" /> <p>MrBeast</p>
                </div>
                <div className="side-link">
                    <img src={tom} alt="tom-img" /> <p>Justin Bieber</p>
                </div>
                <div className="side-link">
                    <img src={megan} alt="megan-img" /> <p>5-Minute Crafts</p>
                </div>
                <div className="side-link">
                    <img src={cameron} alt="cameron-img" /> <p>Nas Daily</p>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
