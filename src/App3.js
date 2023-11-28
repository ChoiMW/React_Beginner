import {useEffect, useState} from 'react';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo,setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) =>{ 
    event.preventDefault();
    if(toDo ===""){
      return;
    }
    /*
    function (currentArray){

    }
    */
    setToDos( (current) => [ ...current,toDo])
    setToDo("");
  };
  useEffect(()=>{
    if(toDos.length !== 0)    console.log(toDos)},[toDos]
    );
  return <div>
    <h1>My Todos.. ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input value={toDo} onChange={onChange} type="text" placeholder='write your to do...'></input>
      <button>Add To do</button>
    </form>

  </div>
}

export default App;
