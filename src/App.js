import './App.css';
import NavigationBar from './components/NavigationBar'
import Intro from './components/Intro';
import Trending from "./components/Trending"
import Disney from "./components/Disney"
import './style/landingPage.css'
function App() {
  return (
    <div>
      {/*  intro section */}
     <div className="myBG">
     <NavigationBar />
     <Intro/>    
     </div>

     <div className="trending">
      <Trending/>
     </div>

     <div className="Disney">
      <Disney/>
     </div>
    </div>
  )
}

export default App;
