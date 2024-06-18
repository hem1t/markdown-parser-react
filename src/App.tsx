import { Blockquote } from "./markdown_components/Blockquote";
import { Bold } from "./markdown_components/Bold";
import { Code } from "./markdown_components/Code";
import { Heading } from "./markdown_components/Heading";
import { ImageTag } from "./markdown_components/ImageTag";
import { Italic } from "./markdown_components/Italic";
import { LinkedText } from "./markdown_components/LinkedText";
import { NewLine } from "./markdown_components/NewLine";
import { OrderedList } from "./markdown_components/OrderedList";
import { UnorderedList } from "./markdown_components/UnorderedList";

const App = () => {
  return (
    <>
      <Heading level={4} text="Heading 4" />
      <Blockquote text="quotes can be shown here" />
      <NewLine />
      Hello, typing <Bold text="Bold Text" /> and <Code text="code text" /> and{" "}
      <Italic text="Some Italic" />{" "}
      <LinkedText
        text="This is my github profile."
        link="https://github.com/hem1t"
      />
      .
      <NewLine />
      <OrderedList list={["Item 1", "Item 2"]} />
      <NewLine />
      <UnorderedList list={["Item 1", "Item 2"]} />
      <ImageTag
        src="https://w.wallhaven.cc/full/2y/wallhaven-2yxp16.jpg"
        alt="A cat pfp"
      />
    </>
  );
};

export default App;
