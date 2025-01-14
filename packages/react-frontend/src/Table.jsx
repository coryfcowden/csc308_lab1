// src/Table.jsx
function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  const rows = props.characterData.map((rows, index) => {
    return (
      <tr key={index}>
        <td>{rows.name}</td>
        <td>{rows.job}</td>
      </tr>
    );
   }
  );
  return (
    <tr key={index}>
    <td>{rows.name}</td>
    <td>{rows.job}</td>
    <td>
      <button onClick={() => props.removeCharacter(index)}>
        Delete
      </button>
    </td>
  </tr>
   );
}

function Table(props) {
  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={props.characterData}
        removeCharacter={props.removeCharacter}
      />
    </table>
  );
}
export default Table;