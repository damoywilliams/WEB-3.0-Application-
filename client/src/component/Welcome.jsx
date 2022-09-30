
import { DatabaseContext } from "../context/DatabaseContext";
import React, { useContext} from "react";





const Welcome =()=>{
    const {n,m,d,i,g,connectWallet,connectedAccount,test,settest,test1,settest1,test2,settest2,getCount1,handleChange1,Fullname,addstudent,handleChange2,handleChange3,handleChange4,handleChange5,studentID,DOB,GPA,major,count,test3,settest3,FullnameR,getstudent,handleChange7} = useContext(DatabaseContext);
    
const a=1;



    const handleSubmit = (e)=>{
alert(studentID,);


    e.preventDefault();

    if(!Fullname||!studentID||!major||!GPA||!DOB){ alert("please fill out all field"); return;}

    addstudent();

    alert("success");

}

const handleSubmit1 = (e)=>{
 

  
     
  
      if(!FullnameR){ alert("please fill out all field"); return;}
        
    
        
  
        getstudent();

       
        
     
  
  }

    
    const addinput=()=>{
       
        if(test=="yes"){
        settest(null);   }

        else{

            settest("yes")
            settest1(null)
            settest2(null);
            settest3(null);
        }

       
    }

    const addinput1=()=>{
     
        if(test1=="yes"){
        settest1(null);   }

        else{

            settest(null)
            settest3(null);
            settest2(null)
            settest1("yes")
        }

       
    }
    
    const addinput2=()=>{
       
        if(test2=="yes"){
        settest2(null);   }

        else{

            settest1(null)
            settest3(null);
            settest(null)
            settest2("yes")
        }

       
    }

    const addinput3=()=>{
      getCount1();
       
      if(test3=="yes"){
      settest3(null);   }

      else{

          settest1(null)
          settest(null)
          settest2(null)
          settest3("yes")
      }

     
  }
    
    


    return (
      
        <div className="w-full h-full" >

            <div className=" flex justify-center">


           
       {! connectedAccount &&(
       <button type="button" onClick={connectWallet} className="  bg-[#2952e3]   rounded-full curser-pointer hover:bg-[#2546bd] p-4 mt-8" >

<p className="text-white"> connect wallet</p>

</button>)}

</div>

<div className="text-white flex justify-between"> 
{connectedAccount &&(
             <button ype="button" onClick={addinput}  className="  bg-[#2952e3]    rounded-full curser-pointer hover:bg-[#2546bd] p-4 mt-8">
           Add student   
           
             </button>
)}
{connectedAccount &&(
             <button ype="button" onClick={addinput1} className="  bg-[#2952e3]   rounded-full curser-pointer hover:bg-[#2546bd] p-4 mt-8">
           Retrieve student 

             </button>)}

       {connectedAccount &&(
             <button ype="button"  className="  bg-[#2952e3]   rounded-full curser-pointer hover:bg-[#2546bd] p-4 mt-8">
           Retrieve All student        

             </button>)}

{connectedAccount &&(
             <button ype="button" onClick={addinput3}  className="  bg-[#2952e3]   rounded-full curser-pointer hover:bg-[#2546bd] p-4 mt-8">
           Get the number of student in database 



             </button>
)}




{connectedAccount &&(
             <button ype="button" onClick={addinput2} className="  bg-[#2952e3]   rounded-full curser-pointer hover:bg-[#2546bd] p-4 mt-8">
           Edit student info

             </button>
)}

             

             
             </div>

             <div>
  {test3 &&(
<p id="count" className="text-white  flex text-bold justify-center mt-20" >Number of student in database {count}</p>
  )}
</div>


<div className=" text-white justify-center mt-20 flex">
  {test1 &&(
    <h1>
    <p >
   name:{n}                                        

   </p>


   <p c>
   Major:{m}                                        

   </p>

   <p >
  Date of Birth:{d}                                        

   </p>

   <p >
  Student ID:{i}                                        

   </p>

   <p >
  GPA:{g}                                        

   </p>

   </h1>











  )}
</div>





             

             <div className="flex justify-center mt-8  ml-5"  >
                  {test &&   (
                <input type="text" name="fullna" placeholder="Fullname"  onChange={handleChange1}/>
                  )}
             </div>

             <div className="flex justify-center mt-8  ml-5" >
             {test && (
                <input type="text" name="DOB" placeholder="DOB"  onChange={handleChange5}  />
             )}
             </div>
             <div className="flex justify-center mt-8   ml-5" >
             {test && (
                <input type="text" name="studentID"  placeholder="student id" onChange={handleChange2}/>
             )}
             </div>
             <div className="flex justify-center mt-8   ml-5" >
             {test && (
                <input type="text" name="major" placeholder="major" onChange={handleChange3} />
             )}
             </div>
             <div className="flex justify-center mt-8  ml-5" >
             {test && (
                <input type="number" name="GPA" placeholder="GPA" onChange={handleChange4}  />
             )}
              


</div>

<div className="flex justify-center text-white">
             {test && (
              
              <button type="button" onClick={handleSubmit}  className="  bg-[#2952e3]   rounded-full curser-pointer hover:bg-[#2546bd] p-4 mt-8 flex justify-end">
submit add
              </button>
              

             )}
             </div>


             <div className="flex justify-center  mb-8" >
             {test1 && (
                <input type="text" name="nameR" placeholder="student's name " onChange={handleChange7} />
             )}
             </div>

             <div className="flex justify-center text-white">
             {test1 && (
              
              <button ype="button" onClick={handleSubmit1}  className="  bg-[#2952e3]   rounded-full curser-pointer hover:bg-[#2546bd] p-4 mt-8 flex justify-end">
submit
              </button>
              

             )}
             </div>








             <div className="flex justify-center  mb-8" >
             {test2 && (
                <input type="text" name="nameE" placeholder="student's name " />
             )}
             </div>








             <div className="flex justify-center text-white">
             {test2 && (
              
              <button ype="button" onClick={getCount1}  className="  bg-[#2952e3]   rounded-full curser-pointer hover:bg-[#2546bd] p-4 mt-8 flex justify-end">
submit
              </button>
              

             )}
             </div>

             
            



        
        </div>
          
    );
}

export default Welcome;