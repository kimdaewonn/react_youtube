import React from 'react'
import { useState, useEffect } from 'react'
import { fetchAPI } from '../utils/fetchAPI'
import { useParams } from 'react-router-dom'
import { Videos } from './'
import { FaBreadSlice } from 'react-icons/fa'
import { FaChessKnight } from 'react-icons/fa'
import { FaHeartbeat } from 'react-icons/fa'

const ChannelConts = () => {
  const [channelDetail, setChannelDetail] = useState()
  const [videos, setVideos] = useState(null)
  const { id } = useParams()
  // console.log(channelDetail)

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchAPI(`channels?part=snippet&id=${id}`)

      setChannelDetail(data?.items[0])

      const videosData = await fetchAPI(
        `search?channelId=${id}&part=snippet&order=date`
      )
      setVideos(videosData?.items)
    }
    fetchResults()
  }, [id])

  return (
    <section id="channelConts">
      <div
        className="channel-header"
        style={{
          backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
        }}
      ></div>
      <img
        src={channelDetail?.snippet?.thumbnails?.medium?.url}
        alt={channelDetail?.snippet?.title}
        className="thum"
      />
      <div className="channel-infor">
        <h3 className="channel-name">
          {channelDetail?.brandingSettings?.channel?.title}
        </h3>
        <div className="channel-desc">
          {channelDetail?.brandingSettings?.channel?.description}
        </div>
        <a
          className="channel-go"
          href={`https://www.youtube.com/${channelDetail?.snippet?.customUrl}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-through-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l3.103-3.104a.5.5 0 1 1 .708.708L4.5 12.207V14a.5.5 0 0 1-.146.354l-1.5 1.5ZM16 3.5a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182A23.825 23.825 0 0 1 5.8 12.323L8.31 9.81a1.5 1.5 0 0 0-2.122-2.122L3.657 10.22a8.827 8.827 0 0 1-1.039-1.57c-.798-1.576-.775-2.997-.213-4.093C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3Z"
            />
          </svg>
          유튜브 바로가기 GOGO!
        </a>
        <div className="channel-sub">
          <span>
            <em>
              <FaBreadSlice
                style={{ verticalAlign: '-1px', marginRight: '5px' }}
              />
              구독자 수
            </em>
            : {channelDetail?.statistics?.subscriberCount}
          </span>
          <span>
            <em>
              <FaChessKnight
                style={{ verticalAlign: '-1px', marginRight: '5px' }}
              />
              전체 비디오 수
            </em>
            : {channelDetail?.statistics?.videoCount}
          </span>
          <span>
            <em>
              <FaHeartbeat
                style={{ verticalAlign: '-1px', marginRight: '5px' }}
              />
              전체 조회수
            </em>
            : {channelDetail?.statistics?.viewCount}
          </span>
        </div>
      </div>
      <div className="channel-videos">
        <Videos videos={videos} layout="column2" />
      </div>
    </section>
  )
}

export default ChannelConts