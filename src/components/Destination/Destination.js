import React, { createContext, useState } from 'react';
import { useParams } from 'react-router';
import mapImg from '../../img/map.svg';
import TicketSearch from '../TicketSearch/TicketSearch';
import TicketSearchResult from '../TicketSearchResult/TicketSearchResult';

export const TicketContext = createContext();
const Destination = () => {
    let { methodName } = useParams();
    const [ticketStatus, setTicketStatus] = useState({
        searchResult: false,
        pickTo: '',
        pickFrom: 'NG',
        date: '',
        passenger: 1
    })
    return (
        <TicketContext.Provider value={[ticketStatus, setTicketStatus]}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-5">
                        <div className="card">
                            <div className="card-body">
                                {
                                    ticketStatus.searchResult ? 
                                    <TicketSearchResult methodName={methodName}></TicketSearchResult> :
                                    <TicketSearch></TicketSearch>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-7">
                        <img src={mapImg} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </TicketContext.Provider>
    );
};

export default Destination;