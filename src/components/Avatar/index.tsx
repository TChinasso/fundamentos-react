import { ImgHTMLAttributes } from "react"
import styles from "./Avatar.module.scss"

export function Avatar({ profilePic, hasBorder = false, ...props }: AvatarProps) {
  return (
    <>
      <img {...props} src={profilePic} className={`${hasBorder ? styles.avatarWithBorder : styles.avatar}`} alt="Foto de perfil" />
    </>
  )

}

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  profilePic: string
  hasBorder?: boolean
}