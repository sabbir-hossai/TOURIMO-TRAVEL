
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './componets/Home/Home/Home';
import NotFound from './componets/NotFound/NotFound';
import Header from './componets/Home/Header/Header';
import MyOrder from './componets/MyOrder/MyOrder';
import ManageOrder from './componets/ManageOrder/ManageOrder';
import Login from './componets/Login/Login/Login';
import Booking from './componets/booking/Booking';
import Footer from './componets/Footer/Footer';
import PrivateRoute from './componets/privateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import AddPackage from './componets/addPackage/AddPackage';
import Reviews from './componets/Home/Reviews/ReviewAdd/Reviews';


function App() {
  return (
    <div className="App">
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
            <PrivateRoute path="/mybooking">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/managebooking">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path="/addpackage">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path="/reviews">
              <Reviews></Reviews>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:packageID">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
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
