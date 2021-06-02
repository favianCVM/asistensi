import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ModifyUserForm from "../components/ModifyUserForm/ModifyUserForm";

const ModifyUserContainer = () => {
  const [user, setUser] = useState(null);
  const { state } = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (!state) history.push("/");
    else {
      setUser(state);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="container">
      <Navbar />
      {user ? <ModifyUserForm user={user} /> : null}
      <Footer />
    </div>
  );
};

export default ModifyUserContainer;
