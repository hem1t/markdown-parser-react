import { useThemeContext } from "../themes/themes";

interface Prop {
  text: string;
}

export const Bold = ({ text }: Prop) => {
  let theme = useThemeContext();
  return <strong className={"inline " + theme}>{text}</strong>;
};
