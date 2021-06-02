import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import UsersSection from "../components/UsersSection/UsersSection";
import { useSelector, useDispatch } from "react-redux";
import { saveUsers } from "../actions/usersActions";
import axios from "axios";

const UsersContainer = () => {
  const usersStore = useSelector((state) => state);
  const dispath = useDispatch();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <Navbar />
      <UsersSection users={users} setUsers={setUsers} />
      <Footer />
    </div>
  );
};

export default UsersContainer;
