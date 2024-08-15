import styles from './sidebar.module.scss'
import { PencilLine } from 'phosphor-react'
import profile_pic from '../../assets/images/profile_pic.jpg'
import { Avatar } from '../Avatar'
export function SideBar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.coverage_pic}>
          <img src={profile_pic} alt="Foto de perfil" />
        </div>
        <div className={styles.profile_pic}>
          <Avatar hasBorder={true} profilePic={profile_pic} />
        </div>
        <div className={styles.profile_info}>
          <span>
            Thiago chinasso
          </span>
          <span>
            Web dev
          </span>
        </div>
        <footer>
          <a href="">
            <PencilLine size={20} />
            Editar perfil
          </a>
        </footer>
      </aside>
    </>
  )
}