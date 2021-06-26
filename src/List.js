import React from 'react'
import ListItem from './LIstItem'

const List = ({list, setList,filtered}) => {
    return (
        <section className='container d-flex justify-content-center '>
        <div className='col-12 col-md-7'>
          <center className='mt-5'>
            <h4>To-Do list</h4>
            <hr ></hr>
          </center>
          {filtered.map((item)=>{
            return(
                <ListItem key={item.id} item={item} list={list} setList={setList} />
            )
          })}
      </div>
      </section>
    )
}

export default List
