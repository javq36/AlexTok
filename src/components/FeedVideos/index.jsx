import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: '1',
    description: '🙏 Thanks for the 500k 🙏  ',
    author: 'Александp Rihanna',
    likes: 123,
    shares: 234,
    comments: 345,
    songTitle: 'sonido original - zzerok1',
    albumCover:
      'http://pm1.narvii.com/7949/43d01ccdd6fb6e35b9840c2c24f4ed4676b75202r1-472-666v2_uhq.jpg',
    src: 'https://v16-webapp.tiktok.com/9bdabbbe6cfa8aec379c2ce4a3864b46/62f9bd2a/video/tos/maliva/tos-maliva-ve-0068c799-us/df040f80d6314ac1bcc6007186c8d7af/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2268&bt=1134&cs=0&ds=3&ft=eXd.6HHMMyq8ZCVbAwe2NT_0yl7Gb&mime_type=video_mp4&qs=0&rc=Zzw6M2gzODY6OTk8OmdoNEBpanZ5dDQ6Zjc3ZDMzZzczNEAyYGMwL2NeNi8xNmI0YDBfYSNmZnNpcjQwMmNgLS1kMS9zcw%3D%3D&l=202208142127180102170291361515DA32&btag=80000'
  },
  {
    id: '2',
    description: '🙏 Thanks for the 500k 🙏  ',
    author: 'Александр Linking Park',
    likes: 123,
    shares: 234,
    comments: 345,
    songTitle: 'sonido original - zzerok1',
    albumCover:
      'http://pm1.narvii.com/7949/43d01ccdd6fb6e35b9840c2c24f4ed4676b75202r1-472-666v2_uhq.jpg',
    src: 'https://v16-webapp.tiktok.com/35fa7028bc43d73c79c9ef4f775a0741/62f9be06/video/tos/maliva/tos-maliva-ve-0068c799-us/7284b0f540444fd5a6a800bdee35d5d1/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2150&bt=1075&cs=0&ds=3&ft=eXd.6HHMMyq8ZSVbAwe2NT_0yl7Gb&mime_type=video_mp4&qs=0&rc=aWllOTVmNmRoOTw2NjZpOkBpM3RxODo6Zjs7ZTMzZzczNEAwMmJiNmEwNi4xXjIyYmA1YSMxczNqcjRnZ21gLS1kMS9zcw%3D%3D&l=202208142127180102170291361515DA32&btag=80000'
  }
]

export default function FeedVideos () {
  return (
    VIDEOS.map((video) => {
      return (
        <div className={styles.item} key={video.id}>
          <VideoPlayer {...video} />
        </div>
      )
    })
  )
}
