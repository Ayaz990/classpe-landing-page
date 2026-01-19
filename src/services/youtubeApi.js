const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || ''
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || ''
const MAX_RESULTS = 6

// Flag to check if API is configured
const isApiConfigured = YOUTUBE_API_KEY && CHANNEL_ID

export const getChannelIdFromCustomUrl = async (customUrl) => {
  try {

    const username = customUrl.replace('@', '')

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=${username}&key=${YOUTUBE_API_KEY}`
    )

    const data = await response.json()

    if (data.items && data.items.length > 0) {
      return data.items[0].id
    }

    throw new Error('Channel not found')
  } catch (error) {
    console.error('Error fetching channel ID:', error)
    throw error
  }
}

export const fetchLatestVideos = async () => {

  if (!isApiConfigured) {
    console.log('YouTube API not configured. Using fallback videos.')
    return getFallbackVideos()
  }

  try {

    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}&type=video`
    )

    if (!searchResponse.ok) {
      console.log('YouTube API request failed. Using fallback videos.')
      return getFallbackVideos()
    }

    const searchData = await searchResponse.json()

    if (!searchData.items || searchData.items.length === 0) {
      return getFallbackVideos()
    }

    const videoIds = searchData.items.map(item => item.id.videoId).join(',')

    const statsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&id=${videoIds}&part=snippet,statistics,contentDetails`
    )

    if (!statsResponse.ok) {
      console.log('YouTube API statistics request failed. Using fallback videos.')
      return getFallbackVideos()
    }

    const statsData = await statsResponse.json()

    const videos = statsData.items.map(video => ({
      videoId: video.id,
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnail: video.snippet.thumbnails.high.url,
      publishedAt: new Date(video.snippet.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      views: formatViews(video.statistics.viewCount),
      likes: formatNumber(video.statistics.likeCount),
      duration: formatDuration(video.contentDetails.duration),
      channelTitle: video.snippet.channelTitle,
    }))

    return videos
  } catch (error) {
    console.log('YouTube API error. Using fallback videos.')

    return getFallbackVideos()
  }
}

const formatViews = (count) => {
  const num = parseInt(count)
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M views`
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K views`
  } else {
    return `${num} views`
  }
}

const formatNumber = (count) => {
  const num = parseInt(count)
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`
  } else {
    return num.toString()
  }
}

const formatDuration = (duration) => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)

  const hours = (match[1] || '').replace('H', '')
  const minutes = (match[2] || '').replace('M', '')
  const seconds = (match[3] || '').replace('S', '')

  if (hours) {
    return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
  } else if (minutes) {
    return `${minutes}:${seconds.padStart(2, '0')}`
  } else {
    return `0:${seconds.padStart(2, '0')}`
  }
}

const getFallbackVideos = () => {
  return [
    {
      videoId: "wZbMH9TPqtY",
      title: "ClassPe Live Session",
      description: "Interactive live class with expert teachers.",
      publishedAt: "Recent",
      views: "Live",
      duration: "Live",
    },
    {
      videoId: "-Mt8-9CYGnw",
      title: "ClassPe Live Session",
      description: "Comprehensive topic coverage.",
      publishedAt: "Recent",
      views: "Live",
      duration: "Live",
    },
    {
      videoId: "GJTNXTKbJdU",
      title: "ClassPe Live Session",
      description: "Expert-led session.",
      publishedAt: "Recent",
      views: "Live",
      duration: "Live",
    },
    {
      videoId: "vryIHPf_EH4",
      title: "ClassPe Live Session",
      description: "In-depth analysis.",
      publishedAt: "Recent",
      views: "Live",
      duration: "Live",
    },
    {
      videoId: "NMYUmt3bo5M",
      title: "ClassPe Live Session",
      description: "Interactive learning.",
      publishedAt: "Recent",
      views: "Live",
      duration: "Live",
    },
    {
      videoId: "jy7VR9WpuFI",
      title: "ClassPe Extended Session",
      description: "Extended live class.",
      publishedAt: "Recent",
      views: "Live",
      duration: "Live",
    },
  ]
}

export default {
  fetchLatestVideos,
  getChannelIdFromCustomUrl,
}
