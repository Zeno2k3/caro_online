import { Button, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import theme from '../../constants/theme'
import { Link } from 'react-router'


const Register = () => {
  
    const [username,Setusername] = useState<string>('')
    const [password,Setpassword] = useState<string>('')
    const [email,Setemail] = useState<string>('')
    const [passwordConfirm,SetpasswordConfirm] = useState<string>('')
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
          <Typography
            variant="inherit"
            sx={{
              fontSize: 20,
              color: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
              fontWeight: theme.typography.fontWeightMedium,
              marginTop: 2,
            }}
          >
            ĐĂNG KÝ TÀI KHOẢN
          </Typography>
          <TextField
                label='Email'
                variant="outlined"
                type="email"
                onChange={(e) => Setemail(e.target.value)}
                value={email}
                required
            />
          <TextField
            label='Tên đăng nhập'
            variant="outlined"
            type="text"
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
          <TextField
            label='Nhập lại Mật khẩu'
            variant="outlined"
            type="password"
            onChange={(e) => SetpasswordConfirm(e.target.value)}
            value={passwordConfirm}
            required
          />
          <Button variant='contained' type='submit'>Đăng ký</Button>
          <Button variant='text'>
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}> Đăng Nhập </Link>
          </Button>
        </Paper>
      </Stack>
    );
}

export default Register