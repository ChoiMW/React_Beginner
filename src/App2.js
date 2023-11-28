import {useEffect, useState} from 'react';

function Hello(){
  //useEffect 는 created 될때 실행되는걸 의도, return 값을 줌으로써 destroy 되었을때 실행할 함수를 줄 수 있다.(Cleanup Function)
  useEffect(() => {
    console.log("Created!");
    return () => console.log("Destoryed!");
  }, )

  return <h1>Hello</h1>;
}


function App() {
  const [showing,setShowing] = useState(false);
  const onClick = () =>{
    setShowing((prev)=> !prev);
  }
  return <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
  </div>

  ;
}

export default App;
