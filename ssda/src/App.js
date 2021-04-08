import logo from "./logo.svg";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar position="fixed">
          <Toolbar className="Top-Bar">
            <Typography
              style={{ fontFamily: "Futura", fontSize: 30 }}
              className="SDA-T"
            >
              St. Steven Deacon Academy
            </Typography>
          </Toolbar>
        </AppBar>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
