import {useState} from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import './App.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  const openSidebar = () => {
    setSidebarOpen(true)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className="container">
      <Navbar sidebarOpen={openSidebar} openSidebar={openSidebar}/>
      {/* <h1>React dashboard</h1> */}
      <Main />
      <Sidebar sidebarOpen={openSidebar} openSidebar={openSidebar}/>      
    </div>
  );
}

export default App;
