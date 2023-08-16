import React from 'react'

export const Message=(props)=>{
  const classname=`btn btn-${props.classname}`
  const myClass = `alert alert-${classname} text-center`;
  return (
    <div className='container'>
      <h1 className ={myClass} >{props.value} {props.countValue}</h1>
    </div>
  )
}
