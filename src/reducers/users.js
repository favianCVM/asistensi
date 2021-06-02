const users = (state = [], action) => {
  switch (action.type) {
    case "ERASE_USER":
      return state;

    case "MODIFY_USER":
      return state;

    default:
      return state;
  }
};

export default users;
