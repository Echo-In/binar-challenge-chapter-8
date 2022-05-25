import "./Table.css";

const Table = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>UserId</td>
          <td>UserName</td>
          <td>Email</td>
          <td>Experience</td>
          <td>Level</td>
          <td>Action</td>
        </tr>
      </thead>

      <tbody>
        {props.players.map((item) => {
          return (
            <tr key={item.userid}>
              <td>{item.userid}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.experience}</td>
              <td>{item.level}</td>
              <td>
                <button onClick={() => props.onEditPlayer(item)}>Edit</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
