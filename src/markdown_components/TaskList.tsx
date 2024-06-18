import { useThemeContext } from "../themes/themes";

export class Task {
  text: string = "";
  done: boolean = false;

  constructor(text: string, done: boolean) {
    this.text = text;
    this.done = done;
  }
}

interface Prop {
  list: Task[];
}

export const TaskList = ({ list }: Prop) => {
  let theme = useThemeContext();

  return (
    <ul>
      {list.map((task) => {
        return (
          <div className="flex gap-2 items-center">
            <Checkbox checked={task.done} />
            <p className={theme.tasklist.text}>{task.text}</p>
          </div>
        );
      })}
    </ul>
  );
};

const Checkbox = ({ checked }: { checked: boolean }) => {
  let theme = useThemeContext();

  return (
    <div
      className={
        "flex justify-center items-center " +
        theme.tasklist.checkbox.outer.style +
        " " +
        (checked
          ? theme.tasklist.checkbox.outer.checked
          : theme.tasklist.checkbox.outer.unchecked)
      }
    >
      <div
        className={
          theme.tasklist.checkbox.inner.style +
          " " +
          (checked
            ? theme.tasklist.checkbox.inner.checked
            : theme.tasklist.checkbox.inner.unchecked)
        }
      ></div>
    </div>
  );
};
