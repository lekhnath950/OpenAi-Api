import React from 'react'

function OptionSelector({arrayItems, selectOption}) {
  return (

    <>
    <div>Open AI</div>

    <div>
        {arrayItems.map((item)=> {
            return <>
            <div onClick={()=> selectOption(item.option)}>
            <h3>{item.name}</h3>
            <h3>{item.description}</h3>
            </div>
            </>
        })}
    </div>

    </>
  )
}

export default OptionSelector