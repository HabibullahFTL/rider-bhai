import React, { useContext } from 'react';
import { TicketContext } from '../Destination/Destination';

const TicketSearch = () => {
    const [ticketStatus, setTicketStatus] = useContext(TicketContext);
    const handleSearchTicket = (e) => {
        setTicketStatus({
            ...ticketStatus,
            searchResult: true
        })
        e.preventDefault();
    }
    const handleDataChange = (e)=>{
        if (e.target.id === 'pick-from' && e.target.value !== '') {
            setTicketStatus({
                ...ticketStatus,
                pickFrom: e.target.value
            })
        }
        if (e.target.id === 'pick-to' && e.target.value !== '') {
            setTicketStatus({
                ...ticketStatus,
                pickTo: e.target.value
            })
        }
        if (e.target.id === 'date' && e.target.value !== '') {
            setTicketStatus({
                ...ticketStatus,
                date: e.target.value
            })
        }
        if (e.target.id === 'passenger' && e.target.value !== '') {
            setTicketStatus({
                ...ticketStatus,
                passenger: e.target.value
            })
        }
    }
    return (
        <form action="" className="p-3" onSubmit={handleSearchTicket}>
            <h4>Get Your Ticket</h4>
            <div className="custom-input-area">
                <input type="text" id="pick-from" onChange={handleDataChange} required />
                <label htmlFor="pick-from"><span>Pick From</span></label>
            </div>
            <div className="custom-input-area">
                <input type="text" id="pick-to" onChange={handleDataChange} required />
                <label htmlFor="pick-to"><span>Pick To</span></label>
            </div>
            <div className="custom-input-area">
                <input type="date" id="date" onChange={handleDataChange} required />
                <label htmlFor="date" ><span>Date</span></label>
            </div>
            <div className="custom-input-area">
                <select name="person-count" id="passenger"  onChange={handleDataChange} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <label htmlFor="passenger"><span>Passenger(s)</span></label>
            </div>
            <button type="submit" className="btn btn-alt-orange btn-block"> <i className="fas fa-search"></i> Search</button>
        </form>
    );
};

export default TicketSearch;