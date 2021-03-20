import React from 'react';

const TicketSearch = () => {
    return (
        <form action="" className="p-3">
            <h4>Get Your Ticket</h4>
            <div className="custom-input-area">
                <input type="text" id="pick-from" required />
                <label htmlFor="pick-from"><span>Pick From</span></label>
            </div>
            <div className="custom-input-area">
                <input type="text" id="pick-to" required />
                <label htmlFor="pick-to"><span>Pick To</span></label>
            </div>
            <div className="custom-input-area">
                <input type="date" id="date" required />
                <label htmlFor="date" ><span>Date</span></label>
            </div>
            <div className="custom-input-area">
                <select name="person-count" id="passenger">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                </select>
                <label htmlFor="passenger"><span>Passenger(s)</span></label>
            </div>
            <button type="submit" className="btn btn-alt-orange btn-block"> <i className="fas fa-search"></i> Search</button>
        </form>
    );
};

export default TicketSearch;