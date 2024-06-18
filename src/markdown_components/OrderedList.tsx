import { useThemeContext } from "../themes/themes"

interface Prop {
    list: string[],
}

export const OrderedList = ({list}: Prop) => {
    let theme = useThemeContext();
    let newList = list.map((l, i) => <li key={i} className={theme.ordered.li}>{l}</li>);
  return (
    <ol className={theme.ordered.ol}>
        {
          newList
        }
    </ol>
  )
}
