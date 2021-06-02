import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { eraseUser } from "../../actions/usersActions";
import TableRow from "../TableRow/TableRow";
import UserSearchbar from "../UserSearchbar/UserSearchbar";

import "./UserTable.scss";

const UserTable = ({ users, setUsers, tableSearch, setTableSearch }) => {
  const [tableRows, setTableRows] = useState([]);
  const dispatch = useDispatch();

  const deleteUser = (userId) => {
    let newUsersArray = users.reduce((accumulator, item) => {
      if (item.id === userId) return accumulator;
      else accumulator.push(item);

      return accumulator;
    }, []);

    setUsers(newUsersArray);
    setTableSearch([]);

    dispatch(eraseUser(newUsersArray));
  };

  useEffect(() => {
    setTableRows(
      users.map((user) => (
        <TableRow key={user.id} deleteUser={deleteUser} user={user} />
      ))
    );
  }, [users]);

  return (
    <>
      <UserSearchbar
        users={users}
        setTableSearch={setTableSearch}
        deleteUser={deleteUser}
      />
      <div className="user-table">
        <div className="user-table__header">
          <h3>Users</h3>
        </div>
        {tableSearch.length !== 0 ? tableSearch : tableRows}
      </div>
    </>
  );
};

export default UserTable;
