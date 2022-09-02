import {React} from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../Components/navBar/NavBar'
import Footer from '../../Components/footer/Footer'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
import addValue from '../../reducers/Reducer';


function TransactionPage() {

  const selector = useSelector( (v) => v.addValue)
  console.log(selector)

  return (
    <div>
      <div className='main_box'>
        <NavBar />
        <div className="container mt-5 bg-light">
          <div className='d-flex'>
            <Link className="nav-link bg-success rounded text-white m-3" to={'/'}><FaLongArrowAltLeft /> Back to Dashboard</Link>
          </div>
          <div className='text-center'>
            <h1><FaMoneyBillAlt /> Transaction</h1>
          </div>
          <hr />
          <table className="table">
            <thead>

              <tr>
                <th scope="col">Transaction ID</th>
                <th scope="col">Time</th>
                <th scope="col">Accounts #</th>
                <th scope="col">Type</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
             {
                selector?.map( (element,index) => {
                  return(
                    <tr>
                    <th scope="row">#{element.t_id}</th>
                    <td>{element.time}</td>
                    <td>{element.id}</td>
                    <td>{element.type_c}</td>
                    <td>Rs:{element.amount}</td>
                  </tr>
                  )
                })
              } 
            </tbody>
          </table>
        </div>
        <div className='text-center footer'>
          <Footer />
        </div>

      </div>
    </div>
  )
}

export default TransactionPage