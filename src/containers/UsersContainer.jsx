import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import UsersSection from "../components/UsersSection/UsersSection";
import { useSelector } from "react-redux";

const UsersContainer = () => {
  const [users, setUsers] = useState([]);
  const usersStore = useSelector((state) => state);
  const [tableSearch, setTableSearch] = useState([]);

  useEffect(() => {
    setUsers(usersStore);
  }, [tableSearch]);

  return (
    <div className="container">
      <Navbar />
      <UsersSection
        users={users}
        setUsers={setUsers}
        tableSearch={tableSearch}
        setTableSearch={setTableSearch}
      />
      <Footer />
    </div>
  );
};

export default UsersContainer;
