import NavBar from "./components/NavBar"
import BoxStart from './components/BoxStart';
import BoxCenter from './components/BoxCenter';
import BoxEnd from './components/BoxEnd';
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  

  return (
    <div className="body">
      <NavBar />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <BoxStart />
          <BoxCenter  name="Congreso De Hidalgo" />
          <BoxEnd />
        </div>
      </div>
    </div>
  )
}

export default App
