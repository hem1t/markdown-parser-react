import { useThemeContext } from "../themes/themes"

interface Prop {
    list: string[],
}

export const UnorderedList = ({list}: Prop) => {
    let theme = useThemeContext();
    let newList = list.map((l, i) => <li key={i} className={theme.unordered.li}>&nbsp;- &nbsp;{l}</li>);
  return (
    <ul className={theme.unordered.ul}>
        {
          newList
        }
    </ul>
  )
}
