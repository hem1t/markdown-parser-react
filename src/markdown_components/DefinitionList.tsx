import { useThemeContext } from "../themes/themes";

interface Prop {
  term: string;
  list: string[];
}

export const DefinitionList = ({ term, list }: Prop) => {
  let theme = useThemeContext();

  return (
    <div className={"my-4 " + theme.definition.block}>
      <div className={theme.definition.term}>{term}</div>
      <ul className={"flex flex-col " + theme.definition.elems}>
        {list.map((def) => {
          return <li>{def}</li>;
        })}
      </ul>
    </div>
  );
};
