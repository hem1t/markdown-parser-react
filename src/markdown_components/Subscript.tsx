import { useThemeContext } from "../themes/themes";

interface Prop {
  text: string;
}

export const Subscript = ({ text }: Prop) => {
  let theme = useThemeContext();
  return <sub className={theme.subscript}>{text}</sub>;
};
