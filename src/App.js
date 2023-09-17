import Routes from './Routing/Routes';
import logo from './logo.svg';
import './App.css';
// import Header from "./component/Header/Header";
// import Footer from './component/Footer/Footer';
// import Banner from './component/Banner/Banner';
// import Category from "./component/Category/Category";
// import Deal from "./component/Deal/Deal";
// import Exclusive from "./component/Exclusive/Exclusive";
// import Section from "./component/section/Section";
// import Trending from './component/Trending/Trending';
// import Reason from "./component/Reason/Reason";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Badding from './pages/Badding';
import Men from './pages/Men';
import Women from './pages/Women';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Banner/>
      <Category/>
      <Deal/>
      <Exclusive/>
      <Section/>
      <Trending/>
      <Reason/>
      <Footer/> */}
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/Men' element={<Men/>}/>
          <Route path='/Women' element={<Women/>}/>
          <Route path='/Badding' element={<Badding/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
