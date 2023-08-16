import React from 'react'
import  {Message}  from '../components/Message'
import Button from '../components/Button'
import { useState } from 'react'

const CounterPage = () => {
  const [count, setCount] = useState(0);
  const logic = (buttonValue)=>{
    if(buttonValue === '+'){
      setCount(count + 1);
      console.log(count);
    }
    else {
      setCount(count-1);
    }
    
    console.log('Count is ', count);
  }  


  return (
    <div className='container text-center'>
      <Message classname="info" value="Counter App"/>
      <Message classname="success" value="Counter Value is:" countValue={count}/>
      <Button fn={logic} classname="success" value="+"/>&nbsp;&nbsp;
      <Button fn={logic} classname="danger" value="-"/>
    </div>
  )
}

export default CounterPage



