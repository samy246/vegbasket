import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const Users = () => {
  const column = [
    { id: "id", name: "Id" },
    { id: "name", name: "Name" },
    { id: "email", name: "Email" },
    { id: "phone", name: "Phone" },
    { id: "Address", name: "Address" },
    { id: "created-date", name: "CreatedDate" },
  ];
  const [loading, setLoading] = useState(false);
  const [allusers, setallusers] = useState([]);
  const getAllUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/auth/allusers`);
      setLoading(false);
      console.log(data);
      setallusers(data.users);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, [setallusers]);
  return (
    <Layout title={"Dashboard -All users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
            {/* {
allusers.map((data,index)=>{
  return(
<ul>
  <li key={index}>
    <div>
      <span>Name:{data.name}</span>
    </div>
  </li>
</ul>
  )
})
            } */}
            <div style={{ margin: "1%" }}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow style={{ backgroundColor: "blue" }}>
                      {column.map((column, index) => {
                        return (
                          <TableCell key={column.id} style={{ color: "white" }}>
                            {column.name}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allusers.length > 0 &&
                      allusers.map((data, index) => {
                        return (
                          <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.email}</TableCell>
                            <TableCell>{data.phone}</TableCell>
                            <TableCell>{data.address}</TableCell>
                            <TableCell>{data.createdAt}</TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
