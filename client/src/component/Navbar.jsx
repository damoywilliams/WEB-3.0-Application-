import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai'
import logo from '../../images/blockchain.png';
import React from 'react';
import {  Link } from 'react-router-dom';
const Navbar =()=>{

    return (
        <div>
        <nav className=" w-full  text-white " >
           
            
            <div className="justify-center flex">
                
                <img src={logo} alt="not found" className='w-80 rounded-full  ' />

             
            
            </div>
             <div className="flex justify-center text-sm font-bold p-3 ">
            <ul className="justify-between flex" >
<        li className="mx-5 cursor-pointer" >    
            
      <Link to="/Whatis"> What is the blockchain ?  </Link>  


       </li>

       <li className="mx-20 cursor-pointer">
       <Link to="/Ben">  Benifits of using  the blockchain  </Link>  
        


       </li>

       <li className="mx-20 cursor-pointer">
       <Link to="/Learn">  Learn more about our app </Link> 
       </li>
       <li className="mx-5 cursor-pointer">
        
       <Link to="/Help">  Meet the team </Link> 


       </li>

       <li className="mx-10 cursor-pointer">
       <Link to="/Contact">  Contact us </Link> 
        

       </li>

                </ul>

                
                </div>
                <div className='flex justify-center'> 
                <Link to="/Welcome"> Home  </Link> 

                </div>

                <div className="flex justify-left">


                </div>

            
           


            
                


           
            
       
      
        </nav>
        </div>
    );
}
export default Navbar;