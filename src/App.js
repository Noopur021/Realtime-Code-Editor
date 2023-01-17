
import './App.css';
import{BrowserRouter,Routes,Route}from 'react-router-dom'
import Home from './pages/home'
import Editorp from './pages/editorpage'

function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
<Route path="/" element={<Home/>}></Route>

<Route 
path="/editor/:roomId"
element={<Editorp/>}></Route>
      </Routes></BrowserRouter>
    </>
  );
}

export default App;
