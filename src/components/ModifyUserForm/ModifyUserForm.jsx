import { useState } from "react";
import Form from "./Form";
import "./ModifyUserForm.scss";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { modifyUser } from "../../actions/usersActions";

const ModifyUserForm = ({ user }) => {
  const [formData, setFormData] = useState({ ...user });
  const history = useHistory();
  const usersStorage = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newUsersArray = usersStorage.reduce((accumulator, item) => {
      if (item.id === formData.id) accumulator.push(formData);
      else accumulator.push(item);

      return accumulator;
    }, []);

    dispatch(modifyUser(newUsersArray));
    history.push("/users");
  };

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleChangeInnerObj = ({ target }) => {
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [target.name]: target.value,
      },
    });
  };

  return (
    <>
      <Form
        user={user}
        handleChangeInnerObj={handleChangeInnerObj}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      ></Form>
    </>
  );
};

export default ModifyUserForm;
