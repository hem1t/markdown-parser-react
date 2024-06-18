import { useThemeContext } from "../themes/themes";

interface Prop {
  text: string;
}

export const Code = ({ text }: Prop) => {
  let theme = useThemeContext();
  return <div className={"inline " + theme.code}>{text}</div>;
};
