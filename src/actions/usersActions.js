const eraseUser = (newUsersArray) => {
  return {
    type: "ERASE_USER",
    payload: newUsersArray,
  };
};

const saveUsers = (users) => {
  return {
    type: "SAVE_USERS",
    payload: users,
  };
};

const modifyUser = (newUsersArray) => {
  return {
    type: "MODIFY_USER",
    payload: newUsersArray,
  };
};

export { eraseUser, modifyUser, saveUsers };
