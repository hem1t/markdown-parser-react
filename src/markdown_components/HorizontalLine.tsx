import { useThemeContext } from "../themes/themes";

export const HorizontalLine = () => {
  let theme = useThemeContext();
  return (
    <div className={theme.hr + " w-full h-[1.5px] mt-1 mb-5"}>
    </div>
  );
};
