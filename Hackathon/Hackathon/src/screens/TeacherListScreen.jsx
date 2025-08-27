import React, { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Checkbox, Paper, Button,
  Box
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

import ResponsiveAppBar from '../components/Navbar/Navbar.jsx';
import NavigationBar from '../components/NavigationBar/NavigationBar.jsx';
import axios from 'axios';


const TeacherListScreen = ({ handleSignOut }) => {

  const [users, setUsers] = useState([]);

 useEffect(() => {
      axios
        .get("http://localhost:3000/branches")
        .then(((response) => {
          setUsers(response.data);
        }))
        .catch(err => console.error(err));
    }, []);

  const navigate = useNavigate()
  const deleteUser = (userId) => {
    axios
      .delete(`http://localhost:3000/branches/${userId}`)
      .then(() => {
        alert("user delete successfully..");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const deleteallUser = () => {
  //   axios.delete(`http://localhost:3000/users`)
  //     .then(() => {
  //       alert("user delete successfully..");
  //       window.location.reload();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  return (
    <>
    <Box sx={{ width: '100%' }}>
        <ResponsiveAppBar logoutButton={handleSignOut} />
          <Box sx={{ display: 'flex', flexDirection: 'row', padding: 2 , paddingLeft: 6 }}>
          <div style={{ width: '400px', height: '100vh' }}>
            <NavigationBar />
          </div>
          <Box sx={{ marginLeft: 2, width: '100%' }}>
            <Paper elevation={3} sx={{ paddingX: 2, paddingTop: 2, width: '95%', height: '100vh' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#6060ad', color: 'white' }}>
        <div style={{ margin: '10px', fontSize: '30px' }}>Manage Products</div>
        <div>
          {/* <Button
          //  onClick={() => deleteallUser()} 
           style={{ margin: '10px' }} color="error" variant="contained">Delete</Button> */}
          {/* <Button
           onClick={() => navigate("/branches-list")} 
          style={{ margin: '10px' }} color="success" variant="contained">Add New Employees</Button> */}
        </div>
      </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>

                </TableCell>
                <TableCell>Id</TableCell>

                <TableCell>Name</TableCell>
                <TableCell>location</TableCell>
                <TableCell>Manager ID</TableCell>
                {/* <TableCell>Phone</TableCell> */}
                <TableCell>Action</TableCell>

              </TableRow>
            </TableHead>

            <TableBody>
              {users && users.map(user => (
                <TableRow key={user.id} hover>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>{user.inventory.map((e,i)=>{
                    return <div key={i}>{e.id}</div>
                  })} </TableCell>

                  <TableCell>{user.name} </TableCell>
                  <TableCell>{user.location} </TableCell>

                  <TableCell>{user.managerId}</TableCell>

                  {/* <TableCell>{user.phone}</TableCell> */}
                  <TableCell>
                    {/* <CreateIcon onClick={() => navigate(`/editUser/${user.id}`)} color='yellow'></CreateIcon> */}
                    <DeleteIcon onClick={() => deleteUser(user.id)} color='error'></DeleteIcon></TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
            </Paper>
          </Box>
        </Box>
      </Box>
       
     
    </>
  )
}

export default TeacherListScreen
