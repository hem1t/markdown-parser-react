import { useThemeContext } from "../themes/themes"

interface Prop {
    text: string
}

export const Code = ({ text }: Prop) => {
  let theme = useThemeContext();
  return (
    <>
      &nbsp;
      <div className={"inline " + theme.code}> {text} </div>
      &nbsp;
    </>
  )
}
