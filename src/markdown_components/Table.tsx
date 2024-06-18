import { useThemeContext } from "../themes/themes";

interface Prop {
  heads: string[];
  rows: string[][];
}

export const Table = ({ heads, rows }: Prop) => {
  let theme = useThemeContext();

  return (
    <table className={"table-auto border-spacing-5 m-2 " + theme.table.table}>
      <thead>
        <tr className={theme.table.heads}>
          {heads.map((head) => {
            return (
              <th className={"border-2 p-2 " + theme.table.head}>{head}</th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return (
            <tr className={theme.table.elems}>
              {row.map((elem) => {
                return (
                  <td className={"border-2 p-2 " + theme.table.elem}>{elem}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
