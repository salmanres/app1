import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, mycustomfunction } from './actions';

function Myreduxpage() {

    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    return (
        <Fragment>
            <div className='container-fluid p-5 '>
                <div className='row'>
                    <div className='col-sm-12 col-12 navlogo'>
                        <h3>REDUX PAGE</h3>
                        <br />
                        <h1>value : {count} </h1>
                        <input type='button' className='btn btn-secondary' value='INCREASE' onClick={() => dispatch(increment())} />
                        <input type='button' className='btn btn-secondary ms-2' value='DECREASE' onClick={() => dispatch(decrement())} />
                        <input type='button' className='btn btn-secondary ms-2' value='INCREASE (50)' onClick={() => dispatch(mycustomfunction())} />
                    </div>
                </div>
            </div>
        </Fragment>


    )
}

export default Myreduxpage