import { Header } from './components/Header'
import { SideBar } from './components/SideBar'
import { Post } from './components/Post'
import './global.css'
import styles from './app.module.scss'
function App() {

  const posts: Post[] = [
    {
      id: 1,
      author: {
        name: 'Thiago',
        avatarUrl: 'https://github.com/TChinasso.png',
        role: 'WebDev'
      },
      content: [
        { text: 'teste 1', type: 'p' },
        { text: 'teste 2', type: 'a' },
        { text: 'teste 3', type: 'a' },
        { text: 'teste 4', type: 'p' }
      ],
      publishedAt: new Date('2022-06-05 20:00:00')
    },
    {
      id: 2,
      author: {
        name: 'Fernando',
        avatarUrl: 'https://github.com/maykbrito.png',
        role: 'Designer'
      },
      content: [
        { text: 'aloooo 1', type: 'p' },
        { text: 'aloooo 2', type: 'a' },
        { text: 'aloooo 3', type: 'a' },
        { text: 'aloooo 4', type: 'p' }
      ],
      publishedAt: new Date('2022-06-05 18:00:00')
    },
  ]

  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <SideBar />
        <main className='gap-8 flex flex-col'>
          {
            posts.map((post, index) => {
              return (
                <Post
                  key={index}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                ></Post>
              )
            })
          }
        </main>
      </div>
    </>
  )
}
interface Post {
  id: number
  author: {
    avatarUrl: string
    name: string
    role: string
  },
  content: {
    type: string
    text: string
  }[]
  publishedAt: Date
}
export default App
