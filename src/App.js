import About from './components/pages/About/About';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';
import Home from './components/pages/Home/Home';
import Post from './components/pages/Post/Post';
import NotFound from './components/pages/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import EditPostForm from './components/features/EditPostForm/EditPostForm';
import Categories from './components/pages/Categories/Categories';
import PostByCategory from './components/features/PostByCategory/PostByCategory';

const App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/post/edit/:id" element={<EditPostForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:postCategory" element={<PostByCategory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;
