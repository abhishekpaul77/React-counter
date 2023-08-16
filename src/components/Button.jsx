import React from 'react'

const Button = (props) => {
  const classname=`text-center btn btn-${props.classname}`
  const clicked=()=>{
    props.fn(props.value);
    console.log("clicked...",props.value)
  }
  return (
    <div>
      <button onClick={clicked} className={classname} >{props.value}</button>
    </div>
  )
}

export default Button
