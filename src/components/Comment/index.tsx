import profile_pic from '../../assets/images/profile_pic.jpg'
import { ThumbsUp, Trash, TrashSimple } from 'phosphor-react'
import { Avatar } from '../Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { useState } from 'react'


export function Comment({ comment, onDeleteComment }: CommentProps) {
  const formatedDateTime = format(comment.commentedAt, "d 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBR
  })
  const formatedDateFromNow = formatDistanceToNow(comment.commentedAt, {
    locale: ptBR,
    addSuffix: true
  })
  const [likes, setLikes] = useState(comment.likes)
  const handleDeleteComment = () => {
    onDeleteComment(comment)
  }
  return (
    <>
      <div className={'flex'}>
        <div className={'mr-4 '}>
          <Avatar alt='teste' hasBorder={false} profilePic={comment.author.avatarUrl} />
        </div>
        <div className={'grow'}>
          <div className={'bg-[#29292E] rounded-lg flex flex-col p-4'}>
            <div className='flex items-center justify-between'>
              <span className={'text-sm leading-4 font-bold'}>{comment.author.name}</span>
              <button>
                <Trash onClick={handleDeleteComment} size={24}></Trash>
              </button>
            </div>
            <time className={'text-xs mb-4 text-gray-600'} title={formatedDateTime}>{formatedDateFromNow}</time>
            <p className='text-sm'>{comment.content}</p>
          </div>
          <button onClick={() => setLikes(likes + 1)} className='flex items-center mt-4 hover:text-[#00B37E] cursor-pointer font-bold'>
            <ThumbsUp size={20} className='mr-[10px]'></ThumbsUp>
            <span className='text-sm'>Aplaudir • {likes}</span>
          </button>

        </div>
      </div>
    </>
  )
}
interface CommentProps {
  comment: Comment
  onDeleteComment(comment: Comment): void
}
interface Comment {
  content: string
  author: Author
  commentedAt: Date
  likes: number
}
interface Author {
  avatarUrl: string
  name: string
  role: string

}