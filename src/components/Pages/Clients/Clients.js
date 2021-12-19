import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import ReactLoading from 'react-loading'
import { useHistory } from 'react-router-dom';
import { getClients } from './../../../Services/Actions/ClientsActions';
import './Clients.css'



const Clients = ({
    loading,
    clients,
    getClients,
}) => {

    useEffect(() => {
        document.title = "All clients"
    }, [])

    const [phoneNo, setPhoneNo] = useState({
        phone: null
    })

    useEffect(() => {
        getClients()
    }, [getClients])


    const searchHandler = event => {
        setPhoneNo({
          ...phoneNo,
          [event.target.name]: event.target.value
        })
    }

  
    const searchSubmitHandler = event => {
        event.preventDefault()
        getClients(phoneNo)
    }

    const showAll = () => {
        getClients()
        setPhoneNo({
            phone: null
        })
    }

    const history = useHistory()
    const goToAllOrders = (name, id) => {
        history.push(`/orders/${name}/${id}/`)
    }

    const goToDueOrders = (name, id) => {
        history.push(`/due-orders/${name}/${id}/`)
    }



    console.log(Clients)
    return  <>
                <div className="page-header">
                    <h2>All <span>clients / customers</span></h2>
                    <strong>{new Date().toLocaleDateString()}</strong>
                </div>

                {loading ? (
                    <ReactLoading style={{ height: '100px', width: '80px', margin: '80px auto', display: 'block'}} type='spin'/>
                ) : (
                    <>
                    <div className="search__wapper">
                        <div className="search__div">  
                            <form onSubmit={searchSubmitHandler}>  
                                <button className="icon__button"><i className="fas fa-search"></i></button><input type="search" name="phone" value={phoneNo.phone || ''} required={true} onChange={searchHandler} placeholder="Search by phone number"/>   
                            </form> 
                        </div>
                        <button className="show__all" type="button" onClick={() => showAll()}>All</button>
                    </div>

                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clients.length !==0 ? clients.map((client, index) => (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{client.name}</td>
                                        <td>{client.customer_type}</td>
                                        <td >{client.phone ? `+88${client.phone}` : "None"}</td>
                                        <td style={{width: '300px'}}>
                                            <button className="client__btn" type="button" onClick={() => goToAllOrders(client.name, client.id)}>All Order</button>
                                            <button className="client__btn clien__danger" type="button" onClick={() => goToDueOrders(client.name, client.id)}>Due Order</button>
                                        </td>
                                    </tr>
                                    
                                )) : (
                                    <tr>
                                        <td colSpan="5" style={{color: 'red', textAlign: 'center'}}>No data found!</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    </>
                )}
                    
        </>
}

const mapStateToProps = state => ({
    loading: state.clientReducer.loading,
    clients: state.clientReducer.clients
})
export default connect(mapStateToProps, {getClients})(Clients)
