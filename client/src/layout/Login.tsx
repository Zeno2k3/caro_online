import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import LogoComponet from "../components/LogoComponent";
import theme from "../constants/theme";
import { useState } from "react";
import { Link } from "react-router";

const Login = () => {

  const [username,Setusername] = useState<string>('')
  const [password,Setpassword] = useState<string>('')


  const handleSubmit = () => {}
     


  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        background: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
        padding: 10,
      }}
    >
      <Paper
        component={"form"}
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: 500,
          height: 500,
          gap: 2,
        }}
      >
        <LogoComponet size={100} />
        <Typography
          variant="inherit"
          sx={{
            fontSize: 20,
            color: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
            fontWeight: theme.typography.fontWeightMedium,
            marginTop: 2,
          }}
        >
          ĐĂNG NHẬP ĐỂ TIẾP TỤC
        </Typography>

        <TextField
          label='Tên đăng nhập'
          variant="outlined"
          type="username"
          onChange={(e) => Setusername(e.target.value)}
          value={username}
          required
        />
        <TextField
          label='Mât khẩu'
          variant="outlined"
          type="password"
          onChange={(e) => Setpassword(e.target.value)}
          value={password}
          required
        />
        <Button variant='contained' type='submit'>Đăng Nhập</Button>
        <Button variant='text'>
            <Link to="/register" style={{ textDecoration: 'none', color: 'inherit'}}> Đăng Ký Tài Khoản </Link>
        </Button>
      </Paper>
    </Stack>
  );
};

export default Login;
