import Navbar from '../NavBar/Navbar';
import '../Components.css';
import {Routes, Route} from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import Contacts from '../../Containers/Contacts/Contacts';
import About from '../../Containers/About/About';

const App = () => {

  return (
    <>
      <header className="header">
        <Navbar/>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={(
            <Spinner/>
          )}/>
          <Route path="/contacts" element={(
            <Contacts/>
            )}/>
          <Route path="/about-us" element={(
            <About/>
          )}/>
          <Route path="*" element={(
            <div className="result-info">
              <h1>Result Not Found!</h1>
            </div>
          )}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
