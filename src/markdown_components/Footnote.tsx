import { useState } from "react";
import { useThemeContext } from "../themes/themes";

interface Prop {
  text: string;
  desc: string;
}

export const Footnote = ({ text, desc }: Prop) => {
  let [open, setOpen] = useState(false);
  let theme = useThemeContext();

  return (
    <div className={"relative inline " + theme.footnote.text}>
      <sup
        onMouseEnter={() => {
          setOpen(true);
        }}
        onMouseLeave={() => {
          setOpen(false);
        }}
      >
        {text}
      </sup>
      <div
        className={
          "absolute flex items-center text-center overflow-y-scroll " +
          theme.footnote.floatbox +
          (open ? " block" : " hidden")
        }
      >
        {desc}
      </div>
    </div>
  );
};
