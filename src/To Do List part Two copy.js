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
    <hr />
    {//map 함수는 모든 array 요소에 대해서 각각 함수를 실행한다.
      //['1','2','3'].map(() => '4');
      //return 값은 ['4','4','4']
      //item변수를 이용하여 각 요소를 직접 조작할수도 있다.
      // li는 key를 unique한 필수로함
    }
    <ul>
      {toDos.map((item, index)=> <li key={index}>{item}</li>)}
    </ul>
  </div>
}

export default App;
