const users = (state = [], action) => {
  switch (action.type) {
    case "ERASE_USER":
      state = action.payload;
      return state;

    case "MODIFY_USER":
      state = action.payload;
      return state;

    case "SAVE_USERS":
      state = action.payload;
      return state;

    default:
      return state;
  }
};

export default users;
