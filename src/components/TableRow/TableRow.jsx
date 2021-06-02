import "./TableRow.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const TableRow = ({ user, deleteUser }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="row">
      <div className="row__preview">
        <span className="row__preview--id">{user.id}</span>
        <span className="row__preview--username">{user.username}</span>

        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="row__preview--button"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <div className={open ? "row__dropdown" : "hiden"}>
        <span className="row__dropdown-element">
          Name: <span className="bolder">{user.name}</span>
        </span>
        <span className="row__dropdown-element">
          Phone: <span className="bolder">{user.phone}</span>{" "}
        </span>
        <span className="row__dropdown-element">
          Email: <span className="bolder">{user.email}</span>
        </span>
        <span className="row__dropdown-element">
          Website: <span className="bolder">{user.website}</span>
        </span>
        <span className="row__dropdown-element">
          Street: <span className="bolder">{user.address.street}</span>
        </span>
        <span className="row__dropdown-element">
          Suite: <span className="bolder">{user.address.suite}</span>
        </span>
        <span className="row__dropdown-element">
          City: <span className="bolder">{user.address.city}</span>
        </span>
        <span className="row__dropdown-element">
          Zip code: <span className="bolder">{user.address.zipcode}</span>
        </span>

        <div className="flex-row-container">
          <button
            className="row__delete-button"
            onClick={() => {
              deleteUser(user.id);
            }}
          >
            Erase user
          </button>
          <Link
            to={{
              pathname: `/user/${user.id}`,
              state: user,
            }}
            className="row__modify-anchor"
          >
            <FontAwesomeIcon icon={faPencilAlt} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TableRow;
