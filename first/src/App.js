import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faHouseFlag,faLaptop,faFacebook} from '@fortawesome/free-solid-svg-icons'
import { Route,Routes ,Router,useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import Sign from './Pages/Sign'
import SignUp from './Pages/SignUp'
import Blog from './Pages/Blog';
import Footer from './Components/Footer';
import Books from './Pages/Books'
import NotFound from './Pages/NotFound';
import BookDetail from './Pages/BookDetail';
import Category from './Components/Category';
import RequireAuth from './Components/RequireAuth';
import { AuthProvider } from './context/AuthContext';
import AddBook from './Components/AddBook';

function App() {

  return (
    <AuthProvider>
       
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Blog' element ={<Blog/>}/>
        <Route path='/Sign' element={<Sign/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='AddBook' element={<AddBook/>}/>
        <Route path='/Books' element={<Books/>}/>
        <Route path='/Category' element={
        <RequireAuth>
        <Category/>
        </RequireAuth>
  }/>

        <Route path='/Books/:id' element={<BookDetail/>}/>


        <Route path='*' element ={<NotFound/>}/>
        <Route path='BookDetail' element ={<BookDetail/>}/>




       </Routes>
       <Footer/>
       </AuthProvider> 
      );
}
 
export default App;
