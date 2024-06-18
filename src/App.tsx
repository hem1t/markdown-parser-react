import { Blockquote } from "./markdown_components/Blockquote";
import { Bold } from "./markdown_components/Bold";
import { Code } from "./markdown_components/Code";
import { Heading } from "./markdown_components/Heading";

const App = () => {
  return (
    <>
      <Heading level={4} text="Heading 4" />
      <Blockquote text="quotes can be shown here" />
      <p className="my-1 ">
        Hello, typing <Bold text="Bold Text" />and 
        <Code text="code text" />.
      </p>
    </>
  );

}

export default App