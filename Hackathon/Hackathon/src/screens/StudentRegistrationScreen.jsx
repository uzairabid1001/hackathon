// import React from 'react'
import ResponsiveAppBar from '../components/Navbar/Navbar.jsx';
import NavigationBar from '../components/NavigationBar/NavigationBar.jsx';
// import { Box, Paper } from '@mui/material';
// import InputField from '../components/InputField/InputField.jsx';
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const StudentRegistrationScreen = ({ handleSignOut }) => {
   let [Adduser, setAdduser] = useState({
        name: "",
        location: "",
        managerId: "",
      
    });
    console.log(Adduser);
    const navigate = useNavigate()

    const Adduserontable = () => {
        axios
            .post("http://localhost:3000/branches",Adduser)
            .then(() => {
                alert("create USER Successfully");
                navigate("/branches-registration");
            })
            .catch((err) => {
                console.log(err);
            });
    };
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <ResponsiveAppBar logoutButton={handleSignOut} />
        <Box sx={{ display: 'flex', flexDirection: 'row', padding: 2, paddingLeft: 6 }}>
          <div style={{ width: '400px', height: '100vh' }}>
            <NavigationBar />
          </div>
          <Box sx={{ marginLeft: 2, width: '100%' }}>
            <Paper elevation={3} sx={{ paddingX: 2, paddingTop: 2, width: '95%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <form>
            <Paper elevation={24} sx={{ margin: 10, padding: 3 }}>
                <Typography sx={{ marginBottom: 3 }} variant="h5">
                    Create Branches
                </Typography>

                <TextField
                    onChange={(e) => setAdduser({ ...Adduser, name: e.target.value })}
                    sx={{ marginBottom: 3 }}
                    label="Enter name"
                    fullWidth
                />
                <TextField
                    onChange={(e) => setAdduser({ ...Adduser, location: e.target.value })}
                    sx={{ marginBottom: 3 }}

                    label="Enter Location"
                    fullWidth
                />

                <TextField
                    onChange={(e) => setAdduser({ ...Adduser, managerId: e.target.value })}
                    sx={{ marginBottom: 3 }}

                    label="Enter Manager Id"
                    fullWidth
                />

              

                <Button onClick={Adduserontable} variant="contained">
                    Create User
                </Button>
            </Paper>
        </form>
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default StudentRegistrationScreen