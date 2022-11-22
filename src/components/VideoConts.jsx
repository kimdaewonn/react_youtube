import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useParams, Link } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { Videos, Loader } from './'
import { FaSplotch } from 'react-icons/fa'

const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()
  // console.log(videoDetail)

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    )

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [id])
  if (!videoDetail?.snippet) return <Loader />
  // const {
  //   snippet: { title, channelTitle },
  //   statistics: { viewCount, likeCount },
  // } = videoDetail
  return (
    <div className="contanier">
      <section className="videoConts">
        <div className="videoLeft">
          <div className="video__player">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
          </div>
          <div className="video__desc">
            <div className="video__flex">
              <div className="video__title">{videoDetail.snippet?.title}</div>
              <div className="viewcount">
                조회수 : {videoDetail.statistics?.viewCount}회
              </div>
              <div className="likecount">
                <FaSplotch /> {videoDetail.statistics?.likeCount}
              </div>
            </div>
            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
              <div className="video__channel">
                {videoDetail.snippet?.channelTitle}
              </div>
            </Link>
            <div className="video__add">
              {videoDetail.snippet?.localized.description}
            </div>
          </div>
        </div>
        <aside className="videoRight side">
          <Videos videos={videos} layout="column" />
        </aside>
      </section>
    </div>
  )
}

export default VideoConts