import { useThemeContext } from "../themes/themes"

interface Prop {
    text: string
}

export const Italic = ({text} : Prop) => {
    let theme = useThemeContext();

  return (
    <i className={"inline italic " + theme.italic}>{text}</i>
  )
}
