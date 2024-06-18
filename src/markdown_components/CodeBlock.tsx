import { useThemeContext } from "../themes/themes"

interface Prop {
    text: string
}

export const CodeBlock = ({text}: Prop) => {
    let theme = useThemeContext();

  return (
    <pre className={"py-2 pl-3 m-3 " + theme.codeblock}>
        {text}
    </pre>
  )
}
