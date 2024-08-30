import * as React from "react";
import Profile from "../../Assets/Profile.jpg";
import Profile1 from "../../Assets/Profile2.jpg";
import Profile2 from '../../Assets/Profile2.jpg';
import Profile3 from '../../Assets/Profile3.jpg';

function Component1() {
  const detailsList = [
    { name: "John Doe", employeeID: "E001", role: "Software Engineer", profileImage: Profile },
    { name: "Jane Smith", employeeID: "E002", role: "Product Manager", profileImage: Profile1 },
    { name: "Michael Johnson", employeeID: "E003", role: "UX Designer", profileImage: Profile2 },
    { name: "Emily Davis", employeeID: "E004", role: "Data Analyst", profileImage: Profile3 },
    { name: "Chris Brown", employeeID: "E005", role: "DevOps Engineer", profileImage: Profile  },
    { name: "Jessica Wilson", employeeID: "E006", role: "HR Manager", profileImage: Profile1 },
    { name: "Daniel Martinez", employeeID: "E007", role: "QA Tester", profileImage: Profile2 },
    { name: "Sarah Lee", employeeID: "E008", role: "Marketing Specialist", profileImage: Profile3  },
    { name: "David Anderson", employeeID: "E009", role: "Technical Lead",  profileImage: Profile },
    { name: "Laura Hernandez", employeeID: "E010", role: "Frontend Developer", profileImage: Profile1 },
    { name: "Robert Thompson", employeeID: "E011", role: "Backend Developer", profileImage: Profile2  },
    { name: "Sophia Clark", employeeID: "E012", role: "Project Coordinator", profileImage: Profile3 },
    { name: "James Lewis", employeeID: "E013", role: "System Administrator",  profileImage: Profile  },
    { name: "Olivia Walker", employeeID: "E014", role: "Business Analyst", profileImage: Profile1 },
    { name: "Matthew Hall", employeeID: "E015", role: "Sales Executive", profileImage: Profile2  },
    { name: "Isabella Young", employeeID: "E016", role: "Finance Manager", profileImage: Profile3 },
    { name: "Ethan King", employeeID: "E017", role: "Network Engineer",  profileImage: Profile  },
    { name: "Mia Scott", employeeID: "E018", role: "Content Writer",  profileImage: Profile1  },
    { name: "Lucas Green", employeeID: "E019", role: "Support Specialist", profileImage: Profile2  },
    { name: "Emma Harris", employeeID: "E020", role: "Operations Manager", profileImage: Profile3 },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
      {detailsList.map((item) => {
        return (
          <div
            key={item.employeeID}
            style={{
              padding: "8px",
              backgroundColor: "#263238",
              borderRadius: "15px",
              width: "300px",
              height: "100%",
              display:'flex',
              flexDirection:'row'
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                width:'40%',
                height:'100%'
              }}
            >
              <img
                src={item.profileImage}
                alt="profile"
                width={100}
                height={100}
                style={{ borderRadius: "50px" }}
              />
            </div>
            <h5 style={{ color: "#FFFFFF",width:'60%', height:'100%', paddingLeft:'4px'}}>
              Employee ID : {item.employeeID} <br />
              Name : {item.name} <br />
              Role : {item.role} <br />
            </h5>
          </div>
        );
      })}
    </div>
  );
}

export default Component1;
