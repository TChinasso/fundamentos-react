import styles from './post.module.scss'
import { Comment } from '../Comment'
import { Avatar } from '../Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, useState } from 'react'
export function Post({ author, content, publishedAt }: PostProps) {
  const formatedDateTime = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBR
  })
  const formatedDateFromNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const [comments, setComments] = useState<CommentInterface[]>([
    {
      author: {
        name: 'Fernando',
        avatarUrl: 'https://github.com/maykbrito.png',
        role: 'Designer'
      },
      commentedAt: new Date('2022-06-05 20:00:00'),
      content: 'Muito bom, amigo!',
      likes: 3
    },
    {
      author: {
        name: 'Thiago',
        avatarUrl: 'https://github.com/TChinasso.png',
        role: 'Designer'
      },
      commentedAt: new Date('2022-06-05 20:00:00'),
      content: 'Muito bom, ma friend!',
      likes: 3
    }
  ])
  const [newCommentText, setNewCommentText] = useState('')
  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentText(event?.target.value)
  }
  const handleCreateNewComment = (event: FormEvent) => {
    event?.preventDefault()
    const newComment: CommentInterface = {
      author: {
        name: 'Thiago',
        avatarUrl: 'https://github.com/TChinasso.png',
        role: 'WebDev'
      },
      commentedAt: new Date(),
      content: newCommentText,
      likes: 0
    }
    setComments([...comments, newComment])
    setNewCommentText('')

  }
  const deleteComment = (commentToDelete: CommentInterface) => {
    const newArrayOfComments = comments.filter(comment => {
      return comment != commentToDelete
    })
    setComments(newArrayOfComments)
  }

  const isNewCommentEmpty = newCommentText.length == 0
  return (
    <>
      <article className={`${styles.post} p-10 bg-[#202024] rounded-lg gap-8`}>
        <header className='flex'>
          <div className={styles.profile_pic}>
            <Avatar hasBorder={true} profilePic={author.avatarUrl}></Avatar>
          </div>
          <div className={`${styles.profile_info} flex flex-col ml-4 self-end`}>
            <span className='text-lg leading-[160%]'>
              {author.name}
            </span>
            <span className='leading-[160%] text-sm text-gray-600'>
              {author.role}
            </span>
          </div>
          <div className='self-center grow text-end text-gray-500'>
            <time title={formatedDateTime} dateTime={formatedDateTime}>{formatedDateFromNow}</time>
          </div>
        </header>
        <div className='mt-6 flex flex-col'>
          {content.map((content, index) => {
            if (content.type == 'p') {
              return <p key={index}>{content.text}</p>
            } else {
              return <a key={index}>{content.text}</a>
            }
          })}
        </div>
        <form onSubmit={handleCreateNewComment} className={'flex flex-col commentForm border-t-[1px] border-gray-700 pt-6 mt-6 ' + styles.commentForm}>
          <strong className='mb-4'>Deixe seu feedback</strong>
          <textarea value={newCommentText} onChange={handleNewCommentChange} name='comment' className={`${styles.commentField} h-24 resize-none w-full bg-gray-950 text-gray-500 rounded-lg focus:border-2 focus:border-green-900 p-4`} placeholder='deixe um comenttario...' />
          <footer>
            <button disabled={isNewCommentEmpty} type='submit' className='outline-none mt-4 px-6 py-3.5 bg-[#00875F] hover:bg-[#00B37E] text-white rounded-lg self-start'>Comentar</button>
          </footer>
        </form>

        <div className={styles.comments + ' mt-8 gap-2 grid'}>
          {
            comments.map((comment, index) => {
              return (
                <Comment onDeleteComment={deleteComment} key={index} comment={comment} ></Comment>
              )
            })
          }
        </div>
      </article>
    </>
  )
}


interface PostProps {
  author: Author
  content: {
    text: string
    type: string
  }[]
  publishedAt: Date
}

interface CommentInterface {
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