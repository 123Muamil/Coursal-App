import { useState } from 'react';
import Images from './APIs/CarousalApi';
import './App.css';
function App() {
   const [carousal,setCarousal]=useState(0)
   const {title}=Images[carousal]
   console.log(Images.length-1)

   function checkNumber(number)
   {
     if(number>Images.length-1)
     {
        return 0
     }
     if(number<0)
     {
        return Images.length-1
     }
     return number
   }
   function Increment()
   {
      setCarousal(checkNumber(carousal+1))
   }
   function Decrement()
   {
      setCarousal(checkNumber(carousal-1))
   }
   return(
    <>
  <div className='image'>
    <button className='increment' onClick={Increment}>Pre</button>
    <img src={title} alt='this'/>
    
   <button className='decrement' onClick={Decrement}>Next</button>
  </div>
    </>
   );
}
export default App;