import { useState } from 'react';
import {Navbar,Welcome} from './component'
import { Routes,Route,Link } from 'react-router-dom';
import Whatis from "./Whatis"
import Home from "./Home"
import Ben from "./Ben"
import Contact from "./Contact"
import Help from "./Help"
import Learn from "./Learn"
import  Student from "./Student"

const App =()=> {
 

  return (
    // the space it is taking up       
   
                          
      <div className= "min-w-screen min-h-screen  gradient-bg-welcome ">

<Navbar/>
<Routes>


<Route  path="/Welcome" element={<Welcome/>}/>

 <Route  path="/Whatis" element={<Whatis/>}/>
 <Route  path="/Home" element={<Home/>}/>
 <Route  path="/Ben" element={<Ben/>}/>
 <Route  path="/Contact" element={<Contact/>}/>
 <Route  path="/Help" element={<Help/>}/>
 <Route  path="/Learn" element={<Learn/>}/>
 <Route  path="/Student" element={<Student/>}/>
 
 
 </Routes>

      </div>
 




  )
}

export default App
