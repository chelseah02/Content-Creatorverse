// import { useState } from 'react'
import { useRoutes} from 'react-router-dom'
import AddCreator from './components/pages/AddCreator.jsx';
import EditCreator from './components/pages/EditCreator.jsx';
import ShowCreators from './components/pages/ShowCreators.jsx';
import { Link } from 'react-router-dom'
import './App.css'
// import {supabase} from './client.js';

function App() {
  const creators = [];
  // Set up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ShowCreators data={creators} />
    },
    {
      path: "edit/:id",
      element: <EditCreator data={creators} />
    },
    {
      path: "/new",
      element: <AddCreator />
    }
  ]);
  return (
    <div className="App">
      <div className='header'>
        <nav className="topnav">
          <Link className="active" to="/">Home</Link>
          <Link to="/new">Add New Creator</Link>
        </nav>
        <h1 className='title'>Content Creatorverse</h1>
        <Link to="/"><button className="headerBtn" style={{backgroundColor: "plum"}}> View Creators  </button></Link>
      </div>
      <br />
      <br />
      {element}
    </div>
    
  )
}

export default App
