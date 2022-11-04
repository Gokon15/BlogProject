import logo from './logo.svg';
import './App.css';
/*import {Route, Routes} from "react-router-dom";*/
import {Layout} from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {PostsPage} from "./pages/PostsPage";
import {PostPage} from "./pages/PostPage";
import {EditPostPage} from "./pages/EditPostPage";
import {AddPostPage} from "./pages/AddPostPage";
import {RegisterPage} from "./pages/RegisterPage";
import {LoginPage} from "./pages/LoginPage";


function App() {
  /*const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])*/

  return (
      <Layout>
          <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='posts' element={<PostsPage />} />
              <Route path=':id' element={<PostPage />} />
              <Route path=':id/edit' element={<EditPostPage />} />
              <Route path='new' element={<AddPostPage />} />
              <Route path='register' element={<RegisterPage />} />
              <Route path='login' element={<LoginPage />} />
          </Routes>
      </Layout>

  )
}

export default App