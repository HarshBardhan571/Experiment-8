import React, { useState } from "react";
import axios from "axios";
import { Container, Box, Typography, TextField, Button, Paper } from "@mui/material";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        username,
        password
      });

      if (res.data.token || res.data.jwt) {
        sessionStorage.setItem("token", res.data.token || res.data.jwt);
        window.location.href = "/dashboard";
      }
    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="xs">
        <Paper 
          elevation={10} 
          sx={{ 
            p: 5, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            borderRadius: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom fontWeight="800" sx={{ color: '#4a148c' }}>
            Welcome
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom sx={{ mb: 3 }}>
            Sign in to access your dashboard
          </Typography>
          
          <Box component="form" sx={{ width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
            />
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={login}
              sx={{ 
                mt: 4, 
                mb: 2, 
                py: 1.5, 
                borderRadius: 2,
                fontSize: '1.1rem',
                textTransform: 'none',
                background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                boxShadow: '0 3px 5px 2px rgba(118, 75, 162, .3)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #5a6fd6 30%, #683b96 90%)',
                }
              }}
            >
              Sign In
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;
