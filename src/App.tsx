import { Blockquote } from "./markdown_components/Blockquote";
import { Bold } from "./markdown_components/Bold";
import { Code } from "./markdown_components/Code";
import { CodeBlock } from "./markdown_components/CodeBlock";
import { DefinitionList } from "./markdown_components/DefinitionList";
import { Footnote } from "./markdown_components/Footnote";
import { Heading } from "./markdown_components/Heading";
import { Highlighted } from "./markdown_components/Highlighted";
import { HorizontalLine } from "./markdown_components/HorizontalLine";
import { ImageTag } from "./markdown_components/ImageTag";
import { Italic } from "./markdown_components/Italic";
import { LinkedText } from "./markdown_components/LinkedText";
import { NewLine } from "./markdown_components/NewLine";
import { OrderedList } from "./markdown_components/OrderedList";
import { Strikethrough } from "./markdown_components/Strikethrough";
import { Subscript } from "./markdown_components/Subscript";
import { Superscript } from "./markdown_components/Superscript";
import { Table } from "./markdown_components/Table";
import { Task, TaskList } from "./markdown_components/TaskList";
import { UnorderedList } from "./markdown_components/UnorderedList";

const App = () => {
  return (
    <>
      <Heading level={4} text="Heading 4" />
      <Blockquote text="quotes can be shown here" />
      <NewLine />
      Hello, typing <Bold text="Bold Text" /> and <Code text="code text" /> and{" "}
      <Italic text="Some Italic" /> <Strikethrough text="A striked text" /> Some
      other texts 2<Superscript text="2" /> 2<Subscript text="2" /> and{" "}
      <Highlighted text="highlight" />{" "}
      <LinkedText
        text="This is my github profile."
        link="https://github.com/hem1t"
      />
      .
      <HorizontalLine />
      <DefinitionList
        term="hem1t"
        list={[
          "my name",
          "my handle",
          "A name to represent a person",
          "Stands for hermit.",
        ]}
      />
      <CodeBlock
        text={`import os;\n\nos.system('echo ita');\nos.system('echo ita');`}
      />
      keen
      <Footnote text="1" desc="keen has some meaning in this article!" />
      <Table
        heads={["Syntax", "Description"]}
        rows={[
          ["Header", "Title"],
          ["Paragraph", "Text"],
        ]}
      />
      <OrderedList list={["Item 1", "Item 2"]} />
      <NewLine />
      <UnorderedList list={["Item 1", "Item 2"]} />
      <NewLine />
      <ImageTag
        src="https://w.wallhaven.cc/full/2y/wallhaven-2yxp16.jpg"
        alt="A cat pfp"
      />
      <TaskList list={[new Task("Task 1", true), new Task("Task 2", false)]} />
    </>
  );
};

export default App;
