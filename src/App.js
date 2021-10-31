
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import NotFound from './Components/Pages/NotFound/NotFound';
import Shop from './Components/Pages/Home/Shop/Shop';
import About from './Components/Pages/Home/About/About';
import Contact from './Components/Pages/Home/Contact/Contact';
import Header from './Components/Pages/Shared/Header';
import Footer from './Components/Pages/Shared/Footer';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import PlaceOrder from './Components/Pages/PlaceOrder/PlaceOrder';
import AuthProvider from './Components/Contexts/AuthProvider';
import PrivateRoute from './Components/Pages/PrivateRoute/PrivateRoute';
import MyOrders from './Components/Pages/MyOrders/MyOrders';
import ManageAllOrdes from './Components/Pages/ManageAllOrdes/ManageAllOrdes';
import AddNewService from './Components/Pages/AddNewService/AddNewService';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageallordes">
              <ManageAllOrdes></ManageAllOrdes>
            </PrivateRoute>
            <PrivateRoute path="/addnewservice">
              <AddNewService></AddNewService>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
