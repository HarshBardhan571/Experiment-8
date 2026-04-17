import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Button, Box, AppBar, Toolbar, Card, CardContent } from "@mui/material";

function Dashboard() {
  const [data, setData] = useState("");
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/";
    }
  }, [token]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/protected", {
        headers: {
          Authorization: "Bearer " + token
        }
      });
      setData(res.data.message || JSON.stringify(res.data));
    } catch (err) {
      alert("Failed to fetch protected data!");
      if (err.response && (err.response.status === 401 || err.response.status === 403)) {
         logout();
      }
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', paddingBottom: 5 }}>
      <AppBar position="static" sx={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(15px)', boxShadow: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: '900', color: 'white', letterSpacing: 1 }}>
            NEXUS DASHBOARD
          </Typography>
          <Button 
            variant="contained" 
            onClick={logout} 
            sx={{ 
              ml: 2, 
              borderRadius: 5, 
              textTransform: 'none',
              background: 'rgba(255, 255, 255, 0.2)',
              '&:hover': { background: 'rgba(255, 255, 255, 0.3)' }
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5, flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="h3" fontWeight="800" sx={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
            Welcome Back!
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            onClick={getData}
            sx={{ 
              borderRadius: 8, 
              px: 4, 
              py: 1.5,
              fontSize: '1.1rem',
              textTransform: 'none',
              backgroundColor: '#fff', 
              color: '#764ba2',
              boxShadow: '0 8px 15px rgba(0,0,0,0.1)',
              '&:hover': { backgroundColor: '#f0f0f0' }
            }}
          >
            Fetch Secure Data
          </Button>
        </Box>
        
        <Card elevation={12} sx={{ borderRadius: 4, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', overflow: 'hidden' }}>
          <Box sx={{ p: 2, background: 'linear-gradient(90deg, #f5f7fa 0%, #e4e8f0 100%)', borderBottom: '1px solid #e0e0e0' }}>
            <Typography variant="subtitle1" fontWeight="bold" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', backgroundColor: '#4caf50', marginRight: 8 }}></span>
              Secure Connection Authorized
            </Typography>
          </Box>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h6" color="#4a148c" gutterBottom fontWeight="bold">
              API Response Payload:
            </Typography>
            <Box sx={{ 
              p: 3, 
              mt: 2, 
              bgcolor: '#1e1e1e', 
              borderRadius: 3, 
              minHeight: '150px', 
              display: 'flex', 
              alignItems: data ? 'flex-start' : 'center',
              boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.3)'
            }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontFamily: 'Consolas, Monaco, monospace', 
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                  color: data ? '#4caf50' : '#888'
                }}
              >
                {data ? `> ${data}` : "> Waiting for user action... \n> Click 'Fetch Secure Data' to initiate request"}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default Dashboard;
