import React,{useEffect,useState} from "react";
import {ethers}from 'ethers';
import { contractABI,contractAddress } from "../utils/constants";


export const DatabaseContext = React.createContext();

const {ethereum}= window;

const getEthereumContract= ()=>{
const provider = new ethers.providers.Web3Provider(ethereum);
const signer = provider.getSigner();
const databaseContract=new ethers.Contract(contractAddress,contractABI,signer);


console.log({
provider,signer, databaseContract

});

}

export const DatabaseProvider = ({children}) => {

    const[connectedAccount,setconnectedAccount]=useState("")
    const[test,settest]=useState("")
    const[test1,settest1]=useState("")
    const[test2,settest2]=useState("")
    const[test3,settest3]=useState("")
    const [Fullname, setFullname]=useState("")
    const [FullnameR, setFullnameR]=useState("")
    const [studentID, setStudentID]=useState("")
    const [major,setmajor ]=useState("")
    const [GPA,setGPA ]=useState("")
    const [DOB,setDOB ]=useState("")
    const [count,setcount]=useState(1)
    const [n,setn]=useState()
    const [m,setm]=useState("")
    const [d,setd]=useState("")
    const [i,seti]=useState("")
    const [g,setg]=useState("")
    

    // const handleChange=(e,name) =>{
    //     setformData((prevState)=>({ ...prevState,[name]:e.target.value}));


    // };

    const handleChange1 =(e) => {
       
       // console.log(e.target.value)
        setFullname(e.target.value);
        console.log(Fullname);
        
            }; 

            const handleChange2 =(e) => {
       
                // console.log(e.target.value)
                 setStudentID(e.target.value);
                 console.log(studentID);
                 
                     }; 

                     const handleChange3 =(e) => {
       
                        // console.log(e.target.value)
                         setmajor(e.target.value);
                         console.log(major);
                         
                             }; 

                             const handleChange4 =(e) => {
       
                                // console.log(e.target.value)
                                 setGPA(e.target.value);
                                 console.log(GPA);
                                 
                                     }; 

                                     const handleChange5 =(e) => {
       
                                        // console.log(e.target.value)
                                         setDOB(e.target.value);
                                         console.log(DOB);
                                         
                                             }; 

                                             const handleChange7 =(e) => {
       
                                                // console.log(e.target.value)
                                                 setFullnameR(e.target.value);
                                                 console.log(FullnameR);
                                                 
                                                     }; 

                                             

   


    const checkIfWalletIsConnect = async () => {

        
        if (!ethereum) return alert("Please install MetaMask.");

        const accounts=await ethereum.request({method:'eth_accounts'});
        
        if(accounts[0].length){
            setconnectedAccount(accounts[0]);
          
        }
        console.log (accounts);
    
    
    
    }

    const connectWallet=async ()=>{
try {
    if (!ethereum) return alert("Please install MetaMask.");
    const accounts=await ethereum.request({method:'eth_requestAccounts'});
    setconnectedAccount(accounts[0]);
    if(connectedAccount[0].length){
        return alert("Already connected lil bii")
    }
    reload();
} catch (error) {
    console.log(error);

    throw new Error("no wallet");
}

    }

    const getCount1= async ()=>{

        const dc= createEthereumContract();

  const c=await dc.getCount();
  const cc=c.toNumber();
    
setcount(cc);
    
    
    
    console.log(cc);
   
    }


    const addstudent= async ()=>{

        const dc= createEthereumContract();

     await dc.addNewStudent(Fullname,major,studentID,GPA, DOB);
   
    }


    const getstudent= async ()=>{

        const dc= createEthereumContract();

     const b =await dc.getStudent(FullnameR);
     
    //  const bb=b.map((a)=>({
    //   name1:a.fulname,
    //   major1:a.Major,
    //   DOB1:a.DOB,
    //   id:a.id_number,
    //   GPA1:a.GPA


    //  }));
   

     setn(b[0]);
 setm(b[1]);
      setd(b[2]);
     const l= (b[3]); 
      const ll=l.toNumber();
      seti(ll);

      const ee= (b[4]); 
      const eee=ee.toNumber();
  setg(eee);
   
    }







    const createEthereumContract = () => {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const databaseContract = new ethers.Contract(contractAddress, contractABI, signer);
      
        return databaseContract;
      };
      

    useEffect(()=>{             //will run at the start of our program  

    checkIfWalletIsConnect();
    getCount1();
   
    },[])


    

return (
<DatabaseContext.Provider value={{n,m,d,i,g,connectWallet,connectedAccount,test,settest,test1,settest1,test2,test3,settest2,getCount1,handleChange1,Fullname,studentID,major,GPA,DOB,handleChange2,handleChange3,handleChange4,handleChange5,addstudent,count,settest3,FullnameR,getstudent,handleChange7}}>

{children}
</DatabaseContext.Provider>



);
}