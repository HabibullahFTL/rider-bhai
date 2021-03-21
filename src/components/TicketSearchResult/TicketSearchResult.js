import React, { useContext, useEffect } from 'react';
import { TicketContext } from '../Destination/Destination';
import './TicketSearchResult.css';
import bike from '../../img/bike.svg';
import ticketData from '../../fakeData/ticketData.json';

const TicketSearchResult = (props) => {
    const [ticketStatus, setTicketStatus] = useContext(TicketContext);
    const searchAgaain = () => {
        setTicketStatus({
            ...ticketStatus,
            searchResult: false
        })
    }
    const dateFormatting = (str) => {
        let monthList = ["January", "February", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"];
        let strDate = new Date(str);
        let date = strDate.getDate();
        let month = strDate.getMonth();
        let year = strDate.getFullYear();
        return `${date} ${monthList[month]} ${year}`;
    }
    const ticketList = ticketData.filter(ticket => ticket.methodName === props.methodName);
    return (
        <div>
            <div className="destination-bg">
                <h5><span>From: </span> {ticketStatus.pickFrom}</h5>
                <h5><span>To: </span> {ticketStatus.pickTo}</h5>
                <h6>Date: {dateFormatting(ticketStatus.date)}</h6>
            </div>
            <h6 className="text-center my-2">Select Ticket To Buy</h6>
            {ticketList.map(ticket => {
                return (
                <a href="#" className="text-dark text-decoration-none">
                    <div className="ticket">
                        <img src={ticket.icon} alt="" />
                        <div className="ticket-details">
                            <h6>{ticket.methodName}</h6>
                            <h6><i className="fas fa-users"></i> {ticketStatus.passenger}</h6>
                            <h6>${ticketStatus.passenger * ticket.cost}</h6>
                        </div>
                    </div>
                </a>)
            })}
            <button className="btn btn-alt-orange btn-block" onClick={searchAgaain}> <i className="fas fa-search"></i> Search</button>
        </div>
    );
};

export default TicketSearchResult;