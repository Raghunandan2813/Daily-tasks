import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import  video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'

const PlayVideo = ({videoId}) => {

const [apiData , setApiData] = useState(null)

const fetchVideoData = async()=>{
    //Fetching Videos Data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(videoDetails_url).then(response=>response.json()).then(data=> setApiData(data.items[0]))

}
useEffect(()=>{
    fetchVideoData();

},[])
  return (
    <div className='play-video'>
<iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title: " Title Here"}</h3>
        <div className='play-video-info'>
            <p>{value_converter(apiData?apiData.statistics.viewCount: "16K")} &bull;{moment(apiData.snippet.publishedAt).fromNow()}</p>
            <div>
                <span><img src={like}/>{value_converter(apiData?apiData.statistics.likeCount: "1K")}</span>
                <span><img src={dislike}/>125</span>
                <span><img src={share}/>Share</span>
                <span><img src={save}/>Save</span>
            </div>
        </div>
        <hr/>
        <div className='publisher'>
            <img src={jack} alt="" />
            <div>
                <p>GreatStack</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className='vid.discription'>
            <p>
                Subscribe GreatStack to watch more tutorials on web development
            </p>
            <hr/>
            <h4>130 Comments</h4>  
            <div className='comment'>
                <img src={user_profile}/>
                <div>
                    <h3>Arion Nilolo <span>3 days ago</span></h3>
                    <p> Amazing </p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>255</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile}/>
                <div>
                    <h3>Arion Nilolo <span>3 days ago</span></h3>
                    <p> Amazing </p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>255</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile}/>
                <div>
                    <h3>Arion Nilolo <span>3 days ago</span></h3>
                    <p> Amazing </p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>255</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile}/>
                <div>
                    <h3>Arion Nilolo <span>3 days ago</span></h3>
                    <p> Amazing </p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>255</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile}/>
                <div>
                    <h3>Arion Nilolo <span>3 days ago</span></h3>
                    <p> Amazing </p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>255</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile}/>
                <div>
                    <h3>Arion Nilolo <span>3 days ago</span></h3>
                    <p> Amazing </p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>255</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile}/>
                <div>
                    <h3>Arion Nilolo <span>3 days ago</span></h3>
                    <p> Amazing </p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>255</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile}/>
                <div>
                    <h3>Arion Nilolo <span>3 days ago</span></h3>
                    <p> Amazing </p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>255</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile}/>
                <div>
                    <h3>Arion Nilolo <span>3 days ago</span></h3>
                    <p> Amazing </p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>255</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile}/>
                <div>
                    <h3>Arion Nilolo <span>3 days ago</span></h3>
                    <p> Amazing </p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>255</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo