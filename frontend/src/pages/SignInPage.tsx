import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./SignIn.css";
import AuthContext from "../context/AuthContext1";
import { useContext } from "react";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme({
  palette: {
    background: {
      default: "#cccc",
    },
  },
});
const logo = require("./images/Logo.png");

export default function SignIn() {
  const authContext = useContext(AuthContext)
  if(!authContext) {
    console.log("not context");
    return null
  };
  const { loginUser } = authContext

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            display="flex"
            flexDirection={"column"}
            maxWidth={400}
            maxHeight={500}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            marginTop={10}
            padding={4}
            borderRadius={5}
            boxShadow={"5px 5px 10px #ccc"}
            bgcolor="#ffff"
          >
            <Link href="/">
              <img src={logo} alt="..." className="logo-img" />
            </Link>
            <div className="text">
              <Typography component="h1">
                Sign In with your User Name
              </Typography>
            </div>
            <Box
              component="form"
              onSubmit={loginUser}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 3 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>

            <Copyright sx={{ mt: 3, mb: 3 }} />
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}