import './App.css';
import Navbar from './components/Navbar';
import './index.css';
// import Dialogue from './components/Dialogue';
// import Form from './components/Form';
// import Header from './components/Header';
// import Test from './components/Test';
// import Gridlayout from './components/Gridlayout';
const linksArray = ['Products', 'Labels', 'Classes', 'Contact us'];
function App() {
  return (
    <>
      <Navbar links={linksArray} />
    </>
  );
}

export default App;
