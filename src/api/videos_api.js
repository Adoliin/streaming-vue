import axios from 'axios'
const videosUrl = `${location.protocol}//${location.host}/api/videos`
const actorsUrl = `${location.protocol}//${location.host}/api/actors`

class VideosApi{
  // GET videos
  static getVideos(pageNum) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: videosUrl,
        params: {
          pageNum
        }
      })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
  }

  static getVideos_byActor(pageNum, name) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: actorsUrl,
        params: {
          pageNum,
          name,
        }
      })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
  }
}


class GetIframe {
  getLinks() {
    return {
      vtt: 'https://cdn.plyr.io/static/demo/thumbs/240p.vtt',
      array: [
        {
          url: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4',
          quality: '1080',
        },
        {
          url: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
          quality: '720',
        },
        {
          url: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
          quality: '576',
        }
      ],
    }
  }
}

export {
  VideosApi,
  GetIframe
}
