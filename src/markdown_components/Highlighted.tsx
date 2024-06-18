import { useThemeContext } from "../themes/themes";

interface Prop {
  text: string;
}

export const Highlighted = ({ text }: Prop) => {
  let theme = useThemeContext();
  return <mark className={theme.highlight}>{text}</mark>;
};
