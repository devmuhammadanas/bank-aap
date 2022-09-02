import React, { createContext, useState} from 'react'
import './CardStyle.css'


// react Icons link
import { BiPlusMedical } from "react-icons/bi";
import { FaUserAlt, FaMoneyBillAlt } from "react-icons/fa";

import { useSelector } from 'react-redux';
import {addValue, addnew} from '../../reducers/Reducer';
// const MyContext = createContext()

// export const NotState = (props) => {
//      const st = 'mairz'
//     return(
//        <MyContext.Provider value={st}>
//           {props.child}
//        </MyContext.Provider> 
//     )
// }





export function Card(props) {

    const selector = useSelector( (v) => v.addValue )


    const [name, setName] = useState('')
    const [aType, setAType] = useState('')
    const [amount, setAmount] = useState('')

    const [users, setUsers] = useState([])

    let user = {
        name,
        aType,
        amount
    }

    const subHandler = (event) => {
        event.preventDefault()

        const newUser = { ...user, id: new Date().getTime().toString() }
        setUsers([...users, newUser])
        setName('')
        setAType('')
        setAmount('')
        // console.log(users)
    

    }

    return (
        <div>
            <div className="col border border-2 cards">
                <div className='card_heading'>
                    <div className='card_text'>
                        <h4>  <FaUserAlt /> {props.heading}</h4>
                    </div>
                    <div>
                        <button type="button" className="mx-2 btn-success rounded break-word" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <BiPlusMedical />  {props.btnAddAccount}
                        </button>
                        <button className='btn-info rounded break-word'>{props.btnAddView}</button>
                    </div>
                </div>
                <div className='card_value'>
                    <h2>{selector.length}</h2>
                </div>
                <div className='card_value'>
                    <h3>{props.showValue}</h3>
                </div>
            </div>

            {/* Modal code */}
            <div>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className='text-center'>
                                    <h5 className="modal-title" id="staticBackdropLabel">Enter Account Details Below</h5>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <label htmlFor="">
                                    <b>Full Name</b><span className='text-danger'>*</span>
                                    <br />
                                    <input value={user.name} onChange={(e) => setName(e.target.value)} type="text" className='input_w' name="" id="" placeholder='Enter your Full Name Here' />
                                </label>

                                <br />
                                <br />
                                <label htmlFor="">
                                    <b>Account Type</b><span className='text-danger'>*</span>
                                    <br />
                                    <select onChange={(e) => setAType(e.target.value)}>
                                        <option value="">Select your Account type</option>
                                        <option value="currant">Currant</option>
                                        <option value="saving">Saving</option>
                                    </select>
                                </label>

                                <br />
                                <br />
                                <label htmlFor="">
                                    <b>Initial Deposit in Rs.</b><span className='text-danger'>*</span>
                                    <br />
                                    <input value={user.amount} onChange={(e) => setAmount(e.target.value)} type="number" className='input_w' placeholder='0' name="" id="" />
                                </label>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={subHandler} className="btn btn-primary">Create Your Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function CardTwo(props) {
    const selector = useSelector( (v) => v.addValue )
    const addme = useSelector( (v) => v.addnew )
    
   

    return (
        <div>
            <div className="col border border-2 cards">
                <div className='card_heading'>

                    <div className='card_text'>
                        <h4><FaMoneyBillAlt /> {props.heading}</h4>
                    </div>
                    <div>
                        <button className='btn-info rounded'>{props.btnAddView}</button>
                    </div>
                </div>
                <div className="card_value">
                    <h2>{selector.length}</h2>
                </div>
                <div className='card_value'>
                    <h3>{props.showValue}</h3>
                </div>
                <div className='card_footer'>
                    <p className='m-3 rounded text-white p-1 bg-secondary'>Credits: Rs.{addme}</p>
                    <p className='m-3 rounded text-white p-1 bg-secondary '>Debits: Rs.</p>
                </div>
            </div>
        </div>
    )
}

