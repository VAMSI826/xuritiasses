import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/user/getusers");
        const fetchedData = response.data.map((user) => ({
          name: user.username,
          email: user.email,
          date: user.date,
          time: user.time,
        }));
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const columns = [
    { name: "name", label: "Name" },
    { name: "email", label: "Email" },
    { name: "date", label: "Date Joined" },
    { name: "time", label: "Time Joined" },
  ];

  const options = {
    filterType: "checkbox",
    responsive: "standard",
  };

  return (
    <div className="mt-4 m-5">
      <MUIDataTable
        title="Users"
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}

export default Users;
