import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import PageAbout from './Pages/PageAbout/PageAbout';
import PageNews from './Pages/PageNews/PageNews';
import Contact from './Pages/Contact/COntact';
import PageServices from './Pages/PageServices/PageServices';
import Marketing from './Pages/Marketing/Marketing';
import Comunications from './Pages/Comunications/Comunications';
import Digital from './Pages/Digital/Digital';
import Media from './Pages/Media/Media';
import Events from './Pages/Events/Events';
import Investments from './Pages/Investments/Investments';






function App() {
  return (
    <BrowserRouter>
    <div className='App'>
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
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;