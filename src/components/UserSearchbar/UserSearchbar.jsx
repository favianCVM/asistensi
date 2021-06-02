import "./UserSearchbar.scss";
import TableRow from "../TableRow/TableRow";

const UserSearchbar = ({ users, setTableSearch, deleteUser }) => {
  const getUser = ({ target }) => {
    let query = target.value.toLowerCase().trim();

    if (target.value !== "") {
      setTableSearch(
        users.reduce((accumulator, item) => {
          if (item.username.toLowerCase().includes(query)) {
            accumulator.push(
              <TableRow key={item.id} user={item} deleteUser={deleteUser} />
            );
          }

          return accumulator;
        }, [])
      );
    }
  };

  return (
    <div className="user-searchbar">
      <input
        onChange={getUser}
        type="text"
        className="search-input"
        placeholder="Who do you want to find"
      />
    </div>
  );
};

export default UserSearchbar;
