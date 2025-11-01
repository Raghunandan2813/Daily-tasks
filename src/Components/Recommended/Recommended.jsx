import React, { useEffect, useState } from "react";
import "./Recommended.css";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import { useParams } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";
const Recommended = ({ categoryId }) => {
  const [recommendedData, setRecommendedData] = useState([]);

  const fetchData = async () => {
    const recommendedData_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=1000&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
    await fetch(recommendedData_url)
      .then((Response) => Response.json())
      .then((data) => setRecommendedData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="recommended">
      {recommendedData.map((item, index) => {
        return (
          <div key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)} Views</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Recommended;
