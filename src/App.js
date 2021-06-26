import React,{useState,useEffect} from 'react'
import moment from 'moment';
import Form from './Form';
import List from './List';

const App = () => {
  var date = moment().format('Do MMMM YYYY');
  const [Input, setInput] = useState("")
  const [list, setList] = useState([])
  const [rank,setRank] = useState("All")
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
     getList();   
     // eslint-disable-next-line
  }, [])

  useEffect(() => {
    changefiltered();
    saveList();
    // eslint-disable-next-line
  }, [list,rank])
  
  const changefiltered = () =>{
    switch(rank){
      case "Completed":
        setFiltered(list.filter(item=> item.completed=== true));
        break;
        case "Uncompleted":
          setFiltered(list.filter(item=> item.completed===  false));
          break;  
        default:
          setFiltered(list)  
    }
  }
   const saveList =()=>{
     localStorage.setItem('list', JSON.stringify(list));
   }
   const getList = () =>{
     if (localStorage.getItem('list')==null){
       localStorage.setItem('list', JSON.stringify([]));
     }
     else {
      let savedList=  JSON.parse(localStorage.getItem('list'));
      setList(savedList)
     }
   }

   return (
    <div className='container-fluid'>
      <center className='col mt-5'>
         <h2>{date}</h2>
      </center>
      <center className='mt-2'>
        <h1>what's on your to-do checklist <span> today?</span></h1>
      </center>
      <Form input={Input} setInput={setInput} list={list} setList={setList} setRank={setRank} />
      <List Input={Input} list={list} filtered={filtered}  setList={setList}/>
      
    </div>
  )
}

export default App
