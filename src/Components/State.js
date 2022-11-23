// usestate hook
// import {useState} from "react";

// function State() {
//     const [age,setAge]= useState(0);

//     const increaseAge = () => {
//         setAge(age+1);
//     };

//     const decreaseAge = () => {
//         setAge(age-1);
//     };

//     return(
//         <div>
//         {age}
//         <br></br>
//         <br></br>
//         <button onClick ={increaseAge}>Increment</button>
//         <br></br>
//         <br></br>
//         <button onClick ={decreaseAge}>Decrement</button>
//         </div>
//     )
//     }

//     export default State;
// **************************

// input text what we will display on text it should show in console
// import {useState} from 'react';

// function State() {
//     const [inputValue, setInputValue] =useState(0)

// // const handleInputChange = (event) => {
// //  // event- event.target.value it will console log the value
// //  console.log(event.target.value);
// // //  it will show each value what we are entering in input type
// // //  it would be useful in react when user enter some input
// // }

// // now instead of displaying value in console, we want to set it
// const handleInputChange = (event) => {
// setInputValue(event.target.value);
// // console.log(inputValue);
// // console.log(setInputValue);
// }
// // initial value is zero we can set default value " "
// // the value we entered in input box it will show in inputvalue
// // we usally use this to grab user inputs what user types

//   return (
//     <div>
//         <h4>State component</h4>
//         {/* every iput has onchange it will trigger when changes to input  */}
//         <input type="text" onChange={handleInputChange}/>
//         {inputValue}
//     </div>
//   )
// }

// export default State;

// ***********************************
// when user clicks on button it will show name or it will hide user name

// import {useState} from "react";

// function State() {
//     const [showText,setShowText]=useState(true);
//     // const [showText,setShowText]=useState(false);

//     // true button will show /false button will hide
//   return (
//     <>
//       <h4>State comp</h4>
//       <button>Show/Hide</button>
//       {showText === true && <h3>HI Guys I am js developer</h3>}
//       {/* {showText && <h3>HI Guys I am js developer</h3>} */}
//     </>
//   );
// }

// //we can declare extenal function on click or we can directly inside
// // using anonymous functio which does nt have name
// // onClick ={() => {
//     // alert("hey"); or console.log (message)
// // }}
// export default State;

// *********** when we click it will show text and we click hide it will hide

// import {useState}  from 'react';

// function State() {
// const [showText,setShowText] =useState(true);

// return (
//     <div>
//         <h4>State component</h4>
//         <button 
//         // we are writing directly writing internal function (anonymous funct)
//         onClick= {()=> {
//         setShowText(!showText);
//         }}
//         >show/hide
//         </button>
//     {showText && <h3> Welcome to React Javascript</h3>}
//     </div>
//   )
// }

// export default State;

// *************************************

// we can write css directly in jsx
// we are altering colors using states

// import {useState} from 'react';

// function State() {
// const [testColor, setTestColor] =useState('');

//   return (
//     <div>
//         <button
//         onClick = {() => {
//             setTestColor( testColor ==="black" ? "red":"black");
//         }}
//         >
//         SHOW/HIDE
//         </button>
//         <h1 style={{color:testColor}}>Welcome to react js</h1>
//     </div>
//   );
// }

// export default State;

// **************** counter app increment decrement setvalue to zero

// import {useState} from 'react'

//  function State() {
//     const[count,setCount] =useState(0);
    
//     // const countInc= function() {
//     //  setCount(count+1);
//     // }
// // we can use arrow functions
//      const countInc = () => {
//      setCount(count+1);
// }
//     const countDec= function() {
//      setCount(count-1);
//     }

//     const countZero = function () {
//         setCount(0);
//     }

//   return (
//     <div>
//         <h3>State comp</h3>
//         <button onClick={countInc}>Increment</button>
//         <button onClick={countDec}>Decrement</button>
//         <button onClick={countZero}>Set to Zero</button>
//         <br></br>
//         {count}
//     </div>
//   )
// }

// export default State;

















