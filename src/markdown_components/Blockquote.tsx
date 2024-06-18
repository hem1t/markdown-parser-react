import { useThemeContext } from "../themes/themes";

interface Prop {
  text: string;
}

export const Blockquote = ({ text }: Prop) => {
  let theme = useThemeContext();

  return (
    <div className={"flex my-1 " + theme.blockquote.block}>
      <div className={theme.blockquote.bar}></div>
      <p className={theme.blockquote.text}> {text} </p>
    </div>
  );
};
