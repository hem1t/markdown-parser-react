import { useThemeContext } from "../themes/themes"

interface Prop {
    src: string,
    alt: string
}

export const ImageTag = ({ src, alt }: Prop) => {
    let theme = useThemeContext();
  return (
    <img alt={alt} src={src} className={theme.img}/>
  )
}
