import React from 'react'
import './VideosListing.scss'

interface VideosListingProps {
    videosList: any[]
}


function VideosListing({videosList}: VideosListingProps) {
    
    const videoPublishedHistory = (videoPublishedDate: number) => {
        let date = new Date(videoPublishedDate)
        let today = new Date()
        let diff = today.getTime() - date.getTime()
        let diffInDays = diff / (1000 * 3600 * 24)
        let diffInYears = diffInDays / 365
        if(diffInYears > 1) {
            return `${Math.floor(diffInYears)} years ago`
        } else {
            return `${Math.floor(diffInDays)} days ago`
        }
    }

  return (
    <div className='videosListing'>
         {videosList.map((video, index) => {
                return (
                    <div key={index} className={`video ${video.id?.channelId ? 'channel': 'singleVideo'}`}>
                        <div className='video__thumbnail'>
                            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                        </div>
                        <div className='video__details'>
                            <h3>{video.snippet.title}</h3>
                            <div className='video__subTitle'>
                                <p>{video.snippet.channelTitle}</p>
                                <p>{videoPublishedHistory(video.snippet.publishTime)}
                                </p>
                            </div>
                            <p className='video__description'>{video.snippet.description}</p>
                        </div>
                    </div>
                )
            })
         }
    </div>
  )
}

export default VideosListing