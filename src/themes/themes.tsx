import { createContext, useContext, useState } from "react";

class Theme {
  h1 = "text-5xl";
  h2 = "text-4xl";
  h3 = "text-3xl";
  h4 = "text-2xl";
  h5 = "text-xl";
  h6 = "text-lg";
  bold = "font-bold";
  italic = "italic";
  blockquote = {
    block: "bg-gray-200",
    bar: "w-2 bg-gray-500",
    text: "ml-3 text-[12px] my-2 text-gray-700",
  };
  ordered = {
    ol: "list-inside list-decimal border w-fit py-3 px-[10.5px]",
    li: "text-[12px]",
  };
  unordered = {
    ul: "list-inside border w-fit py-3 px-[10.5px]",
    li: "text-[12px]",
  };
  code = "bg-gray-300 w-fit px-[4px] py-[1px] text-[10px] rounded-[5px]";
  link = "text-[12px] underline text-blue-500";
  img = "object-cover";
  hr = "bg-gray-300";
  definition = {
    block: "",
    term: "font-[600] text-lg",
    elems: "text-gray-700 text-sm italic pl-10",
  };
  codeblock =
    "font-code border shadow-inner shadow text-[15px] leading-5 rounded-lg";
  table = {
    table: "shadow-md",
    heads: "font-semibold text-md",
    head: "border-gray-400",
    elems: "text-sm",
    elem: "border-gray-400",
  };
  footnote = {
    text: "cursor-pointer text-blue-800 select-none",
    floatbox:
      "shadow-float rounded-xl left-[-10px] h-28 w-40 bg-white text-black",
  };
  strikethrough = "text-black";
  highlight = "";
  subscript = "";
  superscript = "";
  tasklist = {
    text: "text-sm",
    checkbox: {
      outer: {
        style: "rounded-sm border-2 border-gray-500 size-4",
        checked: "bg-black",
        unchecked: "",
      },
      inner: {
        style: "",
        checked: "size-1.5 bg-white rounded-full",
        unchecked: "",
      },
    },
  };
}

class DarkTheme implements Theme {}

let ThemeContext = createContext(new Theme());
let UpdateThemeContext = createContext((_: Theme) => {});

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function useUpdateThemeContext() {
  return useContext(UpdateThemeContext);
}

export function ThemeProvider({ children }: { children: any }) {
  let [theme, setTheme] = useState(new Theme());

  return (
    <ThemeContext.Provider value={theme}>
      <UpdateThemeContext.Provider value={(t) => setTheme(t)}>
        {children}
      </UpdateThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
