import React from 'react'
import './DashboardPageStyle.css'
import NavBar from '../../Components/navBar/NavBar'
import { Card, CardTwo } from '../../Components/cards/Card'
import Footer from '../../Components/footer/Footer'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import addValue from '../../reducers/Reducer'



function DashboardPage(props) {

   const selector =  useSelector((v) => v.addValue)

   console.log(selector)

    return (
        <div>
            <div className='main_box'>
                <NavBar />
                <div className="container box">
                    <div className="row mt-5">
                        <div className="col">
                            <Card
                                heading={'Accounts'}
                                btnAddAccount={'Add New Account'}
                                btnAddView={<Link className="nav-link p-0 text-white" to={'/account'}>View All</Link>}
                                showValue={'Accounts'}
                            />
                        </div>
                        <div className="col">
                            <CardTwo
                                heading={'Transactions'}
                                btnAddView={<Link className="nav-link p-0 text-white" to={'/account'}>View All</Link>}
                                showValue={'Transaction'}
                            />
                        </div>
                    </div>
                </div>
                <div className='text-center footer'>
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default DashboardPage