import {useEffect, useState} from 'react';

function App() {
  const [keyword,setKeyword] = useState("");
  const [counter, setValue] = useState(0);
  const onClick = () =>{
    setValue ((prev) => prev+1);
  };
  const onChange =(event)=>{ setKeyword(event.target.value);
  }
  
  useEffect(()=>{
    console.log("i run only once");
  },[]);
  useEffect(()=>{
    console.log("search for " +keyword);
  },[keyword])
  //원하는 변수를 써주면 해당변수가 변할때만 해당 코드가 실행된다.

  
  useEffect(()=>{
    console.log("i run when counter chagnes. " +counter);
  },[counter])

  return (
    <div >
      <input value={keyword} onChange={onChange} type="text" placeholder='Search here...'></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
