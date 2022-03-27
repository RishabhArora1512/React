import './App.css'; 
/*import navbar from components*/
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container my-3">
        <TextForm heading="Enter a text to analyze"/>
        <About/>
      </div>
    </>
  );
}

export default App;
