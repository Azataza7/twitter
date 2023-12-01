import Navbar from '../NavBar/Navbar';
import '../Components.css';
import {Routes, Route} from 'react-router-dom';
import Contacts from '../../Containers/Contacts/Contacts';
import About from '../../Containers/About/About';
import AddPost from '../../Containers/AddPost/AddPost';
import PostList from '../../Containers/PostList/PostList';
import PostDetails from '../../Containers/PostList/PostDetails';

const App = () => {

  return (
    <>
      <header className="header">
        <Navbar/>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={(
            <PostList/>
          )}/>
          <Route path='/posts/:articleId' element={(
            <PostDetails/>
          )}/>
          <Route path="/new-post" element={(
            <AddPost/>
          )}/>
          <Route path="/posts/:articleId/edit" element={(
            <AddPost/>
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
