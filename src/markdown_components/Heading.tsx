import { useThemeContext } from "../themes/themes";

interface Prop {
  level: number;
  text: string;
  id?: string;
}

export const Heading = ({ level, text, id }: Prop) => {
  let theme = useThemeContext();
  id = id ? id : text.replace(" ", "-").toLocaleLowerCase();

  level = Math.min(6, Math.max(level, 0));
  switch (level) {
    case 1:
      return (
        <h1 id={id} className={theme.h1 + " leading-10"}>
          {text}
        </h1>
      );
    case 2:
      return (
        <h2 id={id} className={theme.h2 + " leading-10"}>
          {text}
        </h2>
      );
    case 3:
      return (
        <h3 id={id} className={theme.h3 + " leading-10"}>
          {text}
        </h3>
      );
    case 4:
      return (
        <h4 id={id} className={theme.h4 + " leading-10"}>
          {text}
        </h4>
      );
    case 5:
      return (
        <h5 id={id} className={theme.h5 + " leading-10"}>
          {text}
        </h5>
      );
    case 6:
      return (
        <h6 id={id} className={theme.h6 + " leading-10"}>
          {text}
        </h6>
      );
    default:
      throw Error("heading level not right, somehow!");
  }
};
