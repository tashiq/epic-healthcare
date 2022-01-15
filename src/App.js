import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer'
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Login.js/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import Details from './Components/Details/Details';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import Book from './Components/Book/Book';
import Doctors from './Components/Doctors/Doctors'
import Map from './Components/Map/Map';
import Faq from './Components/faq/Faq';
function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path="/map">
            <Map></Map>
          </Route>
          <Route exact path="/faq">
            <Faq />
          </Route>
          <PrivateRoute exact path='/doctors'>
            <Doctors></Doctors>
          </PrivateRoute>
          <PrivateRoute exact path='/book'>
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path='/services/:serviceId'>
            <Details></Details>
          </PrivateRoute>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
