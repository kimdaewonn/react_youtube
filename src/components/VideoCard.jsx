import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div className="box">
      <Link to={`/video/${videoId}`}>
        <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} />
      </Link>
      <Link to={`/video/${videoId}`}>
        <span className="videoTitle">{snippet?.title}</span>
      </Link>
      <Link to={`/channel/${snippet.channelId}`}>
        <span className="channelName">{snippet.channelTitle}</span>
      </Link>
    </div>
  )
}

export default VideoCard