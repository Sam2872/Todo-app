import React from 'react'

const LIstItem = ({item,list,setList}) => {
const deleteHandler=()=>{ 
    setList(list.filter(e =>e.id!==item.id))
}
const checkHandler =() =>{
    setList(list.map((listitem)=>{
        if(listitem.id===item.id){
            return(
                {...listitem,completed: !listitem.completed}
            )
        }
        return listitem;
    }))
}
    return (
        <div className='list p-2 mt-2 d-flex align-items-center justify-content-between'>
            <div className={`text ${item.completed? "checked":""} ` } >
            <p>{item.text}</p>
            </div>
            <div className='d-flex 
            bton'>
                <button className="check" onClick={checkHandler}><i className="fa fa-check"></i></button>
                <button className='trash' onClick={deleteHandler}><i className="fa fa-trash "></i></button>
            </div>
        </div>
    )
}

export default LIstItem
