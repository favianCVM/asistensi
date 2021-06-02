const Form = ({
  handleChange,
  handleSubmit,
  formData,
  user,
  handleChangeInnerObj,
}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="form__title">Modify user: {user.id}</h3>
      <div className="form__input-container">
        <label htmlFor="name" className="form__label">
          Name
        </label>
        <input
          className="form__input"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form__input-container">
        <label htmlFor="username" className="form__label">
          Username
        </label>
        <input
          className="form__input"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div className="form__input-container">
        <label htmlFor="email" className="form__label">
          Email
        </label>
        <input
          className="form__input"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form__input-container">
        <label htmlFor="phone" className="form__label">
          Phone
        </label>
        <input
          value={formData.phone}
          onChange={handleChange}
          type="text"
          className="form__input"
          id="phone"
          name="phone"
        />
      </div>

      <div className="form__input-container">
        <label htmlFor="website" className="form__label">
          WebSite
        </label>
        <input
          type="text"
          className="form__input"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      <div className="form__input-group">
        <h3 className="group__title">Address</h3>
        <div className="form__input-container">
          <label htmlFor="street" className="form__label">
            Street
          </label>
          <input
            type="text"
            className="form__input"
            id="street"
            name="street"
            value={formData.address.street}
            onChange={handleChangeInnerObj}
          />
        </div>

        <div className="form__input-container">
          <label htmlFor="suite" className="form__label">
            Suite
          </label>
          <input
            value={formData.address.suite}
            type="text"
            className="form__input"
            id="suite"
            name="suite"
            onChange={handleChangeInnerObj}
          />
        </div>

        <div className="form__input-container">
          <label htmlFor="city" className="form__label">
            City
          </label>
          <input
            value={formData.address.city}
            type="text"
            className="form__input"
            id="city"
            name="city"
            onChange={handleChangeInnerObj}
          />
        </div>

        <div className="form__input-container">
          <label htmlFor="zipcode" className="form__label">
            Zip code
          </label>
          <input
            value={formData.address.zipcode}
            type="text"
            className="form__input"
            id="zipcode"
            name="zipcode"
            onChange={handleChangeInnerObj}
          />
        </div>
      </div>

      <button className="form__submit-button" type="submit">
        Modify
      </button>
    </form>
  );
};

export default Form;
