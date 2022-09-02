import { Modal } from 'bootstrap'
import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/footer/Footer.js'
import NavBar from '../../Components/navBar/NavBar'
import './AccountPageStyle.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { addme, deleteA, getUser, upDateMe} from '../../actions/Action.js'
import addValue from '../../reducers/Reducer.js'

// react Icons links
import { FaLongArrowAltLeft } from "react-icons/fa";
import { BiPlusMedical } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";



function AccountPage() {


  const dispatch = useDispatch();




  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [amount, setAmount] = useState('')
  const [flag, setFlag] = useState(true)
  const [upDateId, setUpDateId] = useState(0)

  const mirza = Number(amount)

  const [add ,setAdd] = useState(0)
  

  const inputValue = {
    name,
    type,
    amount,
    t_id : Math.random(),
    time: new Date().getUTCDate().toString(),
    type_c : 'credit',
    type_d : 'Debits'

  }
  const onSUbmit = () => {
    let newUser = { ...inputValue, id: new Date().getTime().toString() }
    dispatch(getUser(newUser))
    setAdd(mirza)
    dispatch(addme(mirza))

    setName('')
    setAmount('')
    setType('')

  }

  const onDelete = (id) => {
    dispatch(deleteA(id))
  }

  const onUpdate = (v) => {

    setName(v.name)
    setAmount(v.amount)
    setType(v.type)
    setUpDateId(v.id)
    setFlag(false)


  }

  const onUpdateMe = () => {

    let updateUser = selector.map( (stu) => {
      if(upDateId === stu.id){
        return inputValue
      }else{
        return stu
      }
   })
    
    dispatch(upDateMe(updateUser))

    setFlag(true)

  } 

  const  viewAll = (v) => {
    setName(v.name)
    setAmount(v.amount)
    setType(v.type)
    setUpDateId(v.id)
  }


  const selector = useSelector((value) => value.addValue)






  return (
    <div>
      <div className='main_box'>
        <NavBar />
        <div className="container mt-5 bg-light">
          <div className='btns'>
            <Link className="nav-link bg-success rounded text-white m-3" to={'/'}><FaLongArrowAltLeft /> Back To Dashboard</Link>
            {/* <button  */}
            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='btn-info rounded m-3'><BiPlusMedical /> Create New Account </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Actions</th>

              </tr>
            </thead>
            <tbody>
            {
              selector.map( (v , i) => {
                return(
                  <tr>
                <th scope="row">{i + 1}</th>
                <td>{v.name}</td>
                <td>{v.type}</td>
                <td>{v.time}</td>
                <td>{v.amount}</td>
                <button onClick={ () => viewAll(v)} data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='text-dark btn btn-info m-1'>View</button>
                <button onClick={ () => onUpdate(v)} data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='text-dark btn btn-success m-1'>Update</button>
                <button className="text-dark btn btn-danger m-1 " onClick={() => onDelete(v.id)}>Delete</button>
              </tr>
              )
              })
              }
            </tbody>
          </table>

          <div className='text-center m-5'>

            <button type="button" className="btn btn-primary m-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              <BiPlusMedical /> Create Your Account
            </button>
          </div>
        </div>
        <div className='text-center footer'>
          <Footer />
        </div>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-center" id="staticBackdropLabel">Enter account details below</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">


                <label htmlFor="">
                  <b>Full Name</b><span className='text-danger'>*</span>
                  <br />
                  <input value={inputValue.name} onChange={(e) => setName(e.target.value)} type="text" className='input_w' name="" id="" placeholder='Enter your Full Name Here' />
                </label>


                <br />
                <br />
                <label htmlFor="">
                  <b>Account Type</b><span className='text-danger'>*</span>
                  <br />
                  <select value={inputValue.type} onChange={(e) => setType(e.target.value)}>
                    <option value="">Select your Account type</option>
                    <option value="Currant">Currant</option>
                    <option value="Saving">Saving</option>
                  </select>
                </label>


                <br />
                <br />
                <label htmlFor="">
                  <b>Initial Deposit in Rs.</b><span className='text-danger'>*</span>
                  <br />
                  <input value={inputValue.amount} onChange={(e) => setAmount(e.target.value)} type="number" className='input_w' placeholder='0' name="" id="" />
                </label>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                {
                  flag ? 
                  <button onClick={onSUbmit} type="button" className="btn btn-primary">Create My Account</button>
                  : <button onClick={onUpdateMe} className="text-dark btn btn-success">Update</button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountPage