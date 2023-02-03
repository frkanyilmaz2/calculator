import React from 'react'

const Button = ({clean,inputHandler,remove,equation}) => {
    return (
        <>
            <div className="row w-100 no-gutters">
                <div className="col-lg-3">
                    <button id="clear" onClick={clean}>AC</button>
                </div>
                <div className="col-lg-3">
                    <button id="clear" onClick={remove}>C</button>
                </div>
                <div className="col-lg-3 ">
                    <button id="divide" onClick={(e)=>inputHandler(e)}>/</button>
                </div>
                <div className="col-lg-3 ">
                    <button  id="multiply" onClick={(e)=>inputHandler(e)}>*</button>
                </div>
            </div>
            <div className="row w-100 no-gutters">
                <div className="col-lg-3 ">
                    <button  id="seven" onClick={(e)=>inputHandler(e)}>7</button>
                </div><div className="col-lg-3 ">
                    <button  id="eight" onClick={(e)=>inputHandler(e)}>8</button>
                </div><div className="col-lg-3 ">
                    <button  id="nine" onClick={(e)=>inputHandler(e)}>9</button>
                </div><div className="col-lg-3 ">
                    <button id="subtract" onClick={(e)=>inputHandler(e)} >-</button>
                </div>
            </div>
            <div className="row w-100 no-gutters">
                <div className="col-lg-3 ">
                    <button id="four" onClick={(e)=>inputHandler(e)}>4</button>
                </div><div className="col-lg-3 ">
                    <button id="five" onClick={(e)=>inputHandler(e)}>5</button>
                </div><div className="col-lg-3 ">
                    <button id="six" onClick={(e)=>inputHandler(e)}>6</button>
                </div><div className="col-lg-3 ">
                    <button id="add" onClick={(e)=>inputHandler(e)}>+</button>
                </div>
            </div>
            <div className="row w-100 no-gutters">
                <div className="col-lg-9">
                    <div className="row no-gutters">
                    <div className="col-lg-4 ">
                    <button id="three" onClick={(e)=>inputHandler(e)}>3</button>
                </div><div className="col-lg-4 ">
                    <button id="two" onClick={(e)=>inputHandler(e)}>2</button>
                </div><div className="col-lg-4 ">
                    <button id="one" onClick={(e)=>inputHandler(e)}>1</button>
                </div>
                    </div>
                    <div className="row no-gutters">
                    <div className="col-lg-8 ">
                    <button id="zero" onClick={(e)=>inputHandler(e)}>0</button>
                </div><div className="col-lg-4 ">
                    <button id="decimal" onClick={(e)=>inputHandler(e)}>.</button>
                </div>
                    </div>
                </div>
                <div className="col-lg-3"> <button className="h-100" id="equals" onClick={equation}>=</button></div>
            </div>
        </>
    )
}

export default Button   