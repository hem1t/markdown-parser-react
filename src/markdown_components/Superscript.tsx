import { useThemeContext } from "../themes/themes";

interface Prop {
  text: string;
}

export const Superscript = ({ text }: Prop) => {
  let theme = useThemeContext();
  return <sup className={theme.superscript}>{text}</sup>;
};
