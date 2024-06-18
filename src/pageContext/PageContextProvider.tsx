import { createContext, useContext, useReducer } from "react";

export enum Action {
  AddElement = "add",
  RemoveElement = "remove",
  UpdateElement = "update",
}

export enum Elem {
  Heading,
  Bold,
  Italic,
  Code,
  ImageTag,
  LinkedText,
  NewLine,
  HorizontalRoot,
  OrderedList,
  UnorderedList,
}

export interface Command {
  action: Action;
  position: number;
}

let initialPageContent: Element[] = [];

let pageContext = createContext(initialPageContent);
let updatePageContext = createContext((_: Command) => {});

export function usePageContext() {
  return useContext(pageContext);
}

export function useUpdatePageContext() {
  return useContext(updatePageContext);
}

function updatePage(content: Element[], cmd: Command) {
  return content;
}

export const PageContextProvider = ({ children }: { children: any }) => {
  let [pageContent, dispatch] = useReducer(updatePage, initialPageContent);

  return (
    <updatePageContext.Provider value={(cmd: Command) => dispatch(cmd)}>
      <pageContext.Provider value={pageContent}>
        {children}
      </pageContext.Provider>
    </updatePageContext.Provider>
  );
};
