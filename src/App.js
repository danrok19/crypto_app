import { BrowserRouter, Routes, Route}  from 'react-router-dom';
import './App.css';
import Header from './Components/header';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';


function App() {


  const styles = {
    App: {
      backgroundColor:"#14161a",
      color: "white",
      minHeight: "100vh"
    }
  }

  return (
    <BrowserRouter>
    <div style={styles.App}>
      <Header />
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path="/coin/:id" element={<CoinPage />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
