import { useRef, useState } from 'react'
import styles from './styles.module.css'

const videoTiktok =
  'https://v16-webapp.tiktok.com/03891203525696726fa8b0671ed3383a/62f87f15/video/tos/useast2a/tos-useast2a-ve-0068c002/aaa8b8c790a44a10aa92aae9584b9dd0/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2478&bt=1239&cs=0&ds=3&ft=gKSYZ88oo0PD1pxNbsg9w6F2O5LiaQ2D~wT&mime_type=video_mp4&qs=0&rc=OTY0aTYzaGhkPGlpZDNlZ0BpMzR2OTc6ZnQ2ZDMzNzczM0BfNjEtYWNgNmAxXmI1NjFiYSNmaGVrcjRnbXFgLS1kMTZzcw%3D%3D&l=202208132249030101891941632198A8B8&btag=80000'

export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <div>
      <video
        className={styles.video}
        src={videoTiktok}
        controls={false}
        ref={video}
      />
      <button className={styles.player} onClick={handlePlay} />
    </div>
  )
}
