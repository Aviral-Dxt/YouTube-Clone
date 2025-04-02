import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { API_KEY, valueConverter } from '../../Data'


const Recommended = ({ categoryId }) => {

    const [apiDeta, setApiDeta] = useState([]);

    const fetchDeta = async () => {

        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`

        await fetch(url).then((res) => res.json()).then(deta => setApiDeta(deta.items));

    }



    useEffect(() => {
        fetchDeta()
    }, [])


    return (
        <div className='recommended'>

            {console.log(apiDeta)}

            {apiDeta.map((item, index) => {

                return (

                    <div key={index} className="side-video-list">
                        <img src={item.snippet.thumbnails.medium.url} alt="thumbnail1" />
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{valueConverter(item.statistics.viewCount)} views</p>
                        </div>
                    </div>

                )

            })}


        </div>
    )
}

export default Recommended
