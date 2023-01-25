import './App.css';
import MainContainer from './containers/MainContainer';
import Sidebar from "./components/Sidebar";
import './components/Sidebar.css'


function App() {
  return (
    <div className="App" id="outer-container">
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <MainContainer/>
      </div>
    </div>
  );
}

export default App;
