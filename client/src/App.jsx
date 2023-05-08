import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import PageAbout from './Pages/PageAbout/PageAbout';
import PageNews from './Pages/PageNews/PageNews';
import Contact from './Pages/Contact/Contact';
import PageServices from './Pages/PageServices/PageServices';
import Marketing from './Pages/Marketing/Marketing';
import Comunications from './Pages/Comunications/Comunications';
import Digital from './Pages/Digital/Digital';
import Media from './Pages/Media/Media';
import Events from './Pages/Events/Events';
import Investments from './Pages/Investments/Investments';
import DetailPage from './Pages/DetailPage/DetailPage';
import CreateNotice from './Components/Admin/CreateNew/CreateNew';
import LoginPage from './Pages/LoginPage/LoginPage';
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import EditNew from './Components/Admin/EditNew/EditNew';
import Edit from './Pages/Edit/Edit';
axios.defaults.baseURL = "https://backend-energymaters.onrender.com"
// axios.defaults.baseURL = "http://localhost:3001"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path= '/' component={Home}/>
        <Route exact path= '/aboutUs' component={PageAbout}/>
        <Route exact path= '/news' component={PageNews}/>
        <Route exact path= '/contactUs' component={Contact}/>
        <Route exact path= '/services' component={PageServices}/>
        <Route exact path= '/marketing' component={Marketing}/>
        <Route exact path= '/comunications' component={Comunications}/>
        <Route exact path= '/digital' component={Digital}/>
        <Route exact path= '/media' component={Media}/>
        <Route exact path= '/events' component={Events}/>
        <Route exact path= '/investments' component={Investments}/>
        <Route exact path= '/details/:id' component={DetailPage}/>
        <Route exact path= '/create' component={CreateNotice}/>
        <Route exact path= '/admin/em' component={LoginPage}/>
        <Route exact path= '/dashboard' component={DashboardPage}/>
        <Route exact path= '/edit/:id' component={Edit}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;