import { AppBar, Container, MenuItem, Toolbar, Typography, Select, createTheme, ThemeProvider } from "@mui/material"
// import { red } from "@mui/material/colors";
import { useNavigate } from 'react-router-dom';
import { CryptoState } from "../CryptoContext";

const styles = {
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "bold",
        cursor: "pointer"
    }
}


function Header() {
    const navigate = useNavigate();

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        }
    })


    const { currency, setCurrency } = CryptoState();
    //console.log("Current currency is: " + currency);

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <Typography onClick={() => navigate('/')} style={styles.title}>
                            CryptoApp
                        </Typography>
                        <Select variant="outlined" style={{
                            width: 100, height: 40, marginLeft: 15,color: "white"
                        }} value={currency} onChange={(event)=> setCurrency(event.target.value)}>
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"PLN"}>PLN</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>

            </AppBar>
        </ThemeProvider>
    )
}
export default Header;