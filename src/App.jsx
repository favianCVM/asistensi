import { useEffect } from "react";
import Router from "./services/Router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveUsers } from "./actions/usersActions.js";

const App = () => {
  const dispath = useDispatch();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        dispath(saveUsers(data));
      })
      .catch((error) => console.log(error));
  }, []);

  return <Router></Router>;
};

export default App;
