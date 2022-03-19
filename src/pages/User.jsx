import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((resParsed) => setUserData(resParsed))
      .catch((e) => alert(e.message));
  }, []);

  return (
    <div>
      <h1 className="text-center">User List Page</h1>
      <ul>
        {userData.map((val) => {
          return (
            <li
              key={val.id}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                <div>{val.name}</div>
              </div>
              <div>
                <Link to={`${val.id}`} className={"btn btn-outline-primary"}>
                  {val.name} Info
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default User;
