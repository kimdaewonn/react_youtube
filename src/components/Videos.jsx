import React from 'react'

import { VideoCard, Loarder } from './'

const Videos = ({ videos }) => {
  console.log(videos)
  if (!videos?.length) return <Loarder />
  return (
    <article className="videos__inner">
      {videos.map((item, idx) => (
        <VideoCard key={idx} video={item} />
      ))}
    </article>
  )
}

export default Videos
