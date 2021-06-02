import "./UsersSection.scss";
import UserTable from "../UserTable/UserTable";

const UsersSection = ({ users, setUsers, tableSearch, setTableSearch }) => {
  return (
    <div className="users-section">
      <UserTable
        users={users}
        setUsers={setUsers}
        tableSearch={tableSearch}
        setTableSearch={setTableSearch}
      />
    </div>
  );
};

export default UsersSection;
