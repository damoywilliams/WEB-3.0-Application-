

import { DatabaseContext } from "/Users/damoywilliams/Desktop/BlockchainApp/client/src/context/DatabaseContext.jsx";
import React, { useContext} from "react";

function Student(){
    const {keys} = useContext(DatabaseContext);

    
        return(
            <div>
<p className="text-white mt-7 ml-5" >

Our app uses the Etheriumn blockchain, you must connect your wallet to use our app. please download metamask to set up your wallet 
{keys} 
    
</p>


</div>


        );


        }
    

export default Student;