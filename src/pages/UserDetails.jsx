import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userid } = useParams();

  const [detailsData, setDeatilsData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
      .then((res) => res.json())
      .then((resParsed) => setDeatilsData(resParsed))
      .catch((e) => alert(e.message));
  }, [userid]);

  if (!detailsData) {
     return (<h1>Loading ...</h1>);
  }

  return (
    <div>
      <h1 className="text-center">{userid} Details page</h1>
      <div className="card">
            <div className="card-body">
              <h2 className="card-header">{detailsData.name}</h2>
              <p className="card-text">AKA: {detailsData.username}</p>
            </div>
      </div>
    </div>
  );
};

export default UserDetails;
