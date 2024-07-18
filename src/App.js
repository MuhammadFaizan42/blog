
import './App.css';
import Layout from './layouts';
import Create from './pages/CreatePost';
import HomePage from './pages/features';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Layout>
        <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/page" exact element={<Create />} />
          </Routes> 
        </Layout>
      </div>
    </BrowserRouter>  
  );
}

export default App;
