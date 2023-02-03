import React from 'react'

const Display = ({durum,input,expression}) => {
  return (
    <div className='row'>
        {/* <div className="col-lg-12 text-white pt-3 pb-1" id='display-col'>
            <p id="display-top" className=''>{expression}</p>
        </div> */}
        <div className="col-lg-12 text-white pt-1 pb-1" id='display-col'>
            <p id="display">{expression}</p>
        </div>
    </div>
  )
}

export default Display