import { Heart } from '../Icons/Heart'
import { Comment } from '../Icons/Comment'
import { Share } from '../Icons/Share'
import styles from './styles.module.css'

export default function VideoPlayerActions ({
  likes = 12,
  comments = 3,
  shares = 8,
  hearted = true
}) {
  const handleLike = () => {
    console.log('like')
  }
  const handleComent = () => {
    console.log('comment')
  }
  const handleshare = () => {
    console.log('share')
  }
  return (
    <aside className={styles.actions}>
      <button className={styles.action} onClick={handleLike}>
        <Heart />
        <span title='like'>{likes}</span>
      </button>
      <button className={styles.action} onClick={handleComent}>
        <Comment />
        <span title='comments'>{comments}</span>
      </button>
      <button className={styles.action} onClick={handleshare}>
        <Share />
        <span title='shares'>{shares}</span>
      </button>
    </aside>
  )
}
