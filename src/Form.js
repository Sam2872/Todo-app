 import React from 'react'
 import { Button } from '@material-ui/core'
 const Form = ({input, setInput,list, setList,setRank}) => {
     const handleChange=(e) =>{
         setInput(e.target.value)
     }
     const handleSubmit = (e) =>{
         e.preventDefault();
         setList([...list ,{text: input, completed:false, id: Math.random()*1000 }]);
         setInput("")
     }
     const fitlerhandler= (e) =>{
        setRank(e.target.value);
     }
     return (
         <section className=' d-flex justify-content-center mt-4'>
            <form > 
                <div className='d-flex'>
                    <input id="my-input" placeholder="Enter a task"  type="input" value={input} onChange={handleChange} />
                    <Button className='bton' variant="contained"  type='submit' onClick={handleSubmit} color="secondary">
                    Add
                    </Button>
               <div>
                <select onChange={fitlerhandler} name="todos" class="filter-todo">
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="incomplete">Incomplete</option>
                </select>
               </div>
                   
                </div>

            </form>
         </section>
     )
 }
 
 export default Form
 