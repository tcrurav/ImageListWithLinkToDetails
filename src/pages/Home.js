import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Home.css";

const places = [
  {
    id: 1,
    name: "Las Canteras Beach",
  },{
    id: 2,
    name: "Santa Catalina Square",
  },{
    id: 3,
    name: "Cathedral",
  },
]

function Home() {
  const navigate = useNavigate();
  console.log("Home");

  const goToOtherPage = (detailId) => {
    console.log("goToOtherPage");
    console.log(detailId);
    navigate(`/detail/${detailId}`);
  }

  return (
    <>
      <p>Home</p>
      {
        places.map(p =>
          <div key={p.id} className="my-image-div"
            style={{ backgroundImage: `url("home/bicycle-${p.id}.jpg")` }}
            onClick={() => {
              console.log(p)
              goToOtherPage(p.id)
            }}></div>
        )
      }
    </>
  );
}

export default Home;