import React from 'react'

function Translation({search, setInput}) {
  return (
    <div>
        <textarea cols={60} rows={10} onChange={(e)=> setInput(e.target.value)} />
        <button onClick={search}>OK</button>
        <button>Reset</button>
    </div>
  )
}

export default Translation