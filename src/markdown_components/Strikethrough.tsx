import { useThemeContext } from "../themes/themes"

interface Prop {
    text: string
}

export const Strikethrough = ({text} : Prop) => {
    let theme = useThemeContext();
  return (
    <s className={theme.strikethrough}>{text}</s>
  )
}
