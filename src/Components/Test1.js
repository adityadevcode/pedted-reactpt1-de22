// import React from 'react'

//  function Test1() {
//   return (
//     <>
//     <h3>Test component</h3>
//     </>
//   )
// }

// export default Test1

// Lists
//  we have so many methtods with array
// forEach
// Filter
// map 
// reducer
// map is imp it will return a new array  from calling a function for every array element
// map calls a function once for each element in an array
// map does not change original array
// we can grap array and change some portion of the elements 
// {names.map((value, key) =>{
// })}



// import React from 'react'

//  function Test1() {
//     const names = ["name","welcome","sam","krishna"];
//   return (
//     <>
//     {/* <h3>Test component</h3>
//     <h3>{names[1]}</h3>
//     <h4>{names}</h4> */}
//     {names.map((name,key) =>  {
//         return <h1 key={key}>{name}</h1>;
//     })}
//     </>
//   );
// }

// export default Test1

// when working with data we work with objects
// objects can exists inside arrays, list of users from db so it is a list objects in array
//objects inside of arrays
// import React from 'react'

// function Test1() {
//     const users = [
//         {name:"roy", age:21},
//         {name:"poy", age:31},
//         {name:"kim", age:41},
//         {name:"rick", age:51}, 
//     ];

//   return (
//     <>
//     <h3>TesT1 Component</h3>
//     {users.map((user,key) => {
//         return 
//         <div>
//             console.log(users);
//              {user.name} {user.age}
//          </div>
//     })}
//     </>
//   );
// }

// export default Test1;

import React from 'react'

function Test1() {
  return (
    <div>Test1</div>
  )
}

export default Test1;