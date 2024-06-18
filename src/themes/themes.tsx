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
        "block": "bg-gray-600",
        "bar": "w-2 bg-gray-300",
        "text": "text-white ml-3 text-[12px] my-2",
    };
    ordered = {
        "ol": "list-inside list-decimal border w-fit py-3 px-10",
        "li": "text-[12px]"
    };
    unordered = {
        "ul": "list-inside border w-fit py-3 px-10",
        "li": "text-[12px]"
    };
    code =  "bg-gray-300 w-fit px-[4px] py-[1px] text-[10px] rounded-[5px]";
    link = "text-[12px] underline text-blue-500";
    img = "object-cover";
}

class DarkTheme implements Theme {

}


let ThemeContext = createContext(new Theme());
let UpdateThemeContext = createContext((_: Theme) => {})

export function useThemeContext() {
    return useContext(ThemeContext);
}

export function useUpdateThemeContext() {
    return useContext(UpdateThemeContext);
}

export function ThemeProvider({children}: { children: any }) {
    let [theme, setTheme] = useState(new Theme());

    return (
        <ThemeContext.Provider value={theme}>
            <UpdateThemeContext.Provider value={(t) => setTheme(t)}>
                    { children }
            </UpdateThemeContext.Provider>
        </ThemeContext.Provider>
    );
}
