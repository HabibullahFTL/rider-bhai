import React from 'react';
import './TicketSearchResult.css';
import bike from '../../img/bike.svg';

const TicketSearchResult = () => {
    return (
        <div>
            <div className="destination-bg">
                <h5><span>From: </span> Dhaka</h5>
                <h5><span>To: </span> Mymensing</h5>
                <h6>Date: 20-05-2001</h6>
            </div>
            <h6 className="text-center my-2">Select Ticket To Buy</h6>
            <a href="#" className="text-dark text-decoration-none">
            <div className="ticket">
                <img src={bike} alt=""/>
                <div className="ticket-details">
                    <h6>Car</h6>
                    <h6><i className="fas fa-users"></i> 4</h6> 
                    <h6>$67</h6> 
                </div>
            </div>
            </a>
            <a href="#" className="text-dark text-decoration-none">
            <div className="ticket">
                <img src={bike} alt=""/>
                <div className="ticket-details">
                    <h6>Car</h6>
                    <h6><i className="fas fa-users"></i> 4</h6> 
                    <h6>$67</h6> 
                </div>
            </div>
            </a>
            <a href="#" className="text-dark text-decoration-none">
            <div className="ticket">
                <img src={bike} alt=""/>
                <div className="ticket-details">
                    <h6>Car</h6>
                    <h6><i className="fas fa-users"></i> 4</h6> 
                    <h6>$67</h6> 
                </div>
            </div>
            </a>
        </div>
    );
};

export default TicketSearchResult;