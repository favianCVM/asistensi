const eraseUser = () => {
  return {
    type: "ERASE_USER",
  };
};

const saveUsers = () => {
  return {
    type: "SAVE_USERS",
  };
};

const modifyUser = () => {
  return {
    type: "MODIFY_USER",
  };
};

export { eraseUser, modifyUser, saveUsers };
