import { useThemeContext } from "../themes/themes";

interface Prop {
  text: string;
  link: string;
}

export const LinkedText = ({ text, link }: Prop) => {
  let theme = useThemeContext();

  return (
    <a className={theme.link} href={link} target="_blank">
      {text}
    </a>
  );
};
