import * as React from "react";
import Profile from "../../Assets/Profile.jpg";
import Profile1 from "../../Assets/Profile2.jpg";

function Component1() {
  const detailsList = [
    {
      profileImage: Profile,
      name: "Pavitra",
      id: 98665,
      designation: "developer",
    },
    {
      profileImage: Profile1,
      name: "Pavitra234",
      id: 9866565,
      designation: "developer325",
    },
  ];

  return (
    <div>
      {detailsList.map((item) => {
        return (
          <div key={item.id}
            style={{
              padding: "3px",
              display: "flex",
              flexDirection: "row",
              flexWrap:'wrap',
              backgroundColor:'#FFFFFF',
              borderRadius:'15px',
              width:'15%'
            }}
          >
            <img src={item.profileImage} alt="profile1" width={100} height={100} />
            <h2 style={{color:'#000000'}}>{item.name}</h2>
            <h5 style={{color:'#000000'}}>{item.id}</h5>
            <h3 style={{color:'#000000'}}>{item.designation}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Component1;
