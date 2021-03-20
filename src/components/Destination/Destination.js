import React from 'react';
import { useParams } from 'react-router';
import mapImg from '../../img/map.svg';
import TicketSearch from '../TicketSearch/TicketSearch';
import TicketSearchResult from '../TicketSearchResult/TicketSearchResult';

const Destination = () => {
    let { methodName } = useParams();
    console.log(methodName);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-5">
                    <div className="card">
                        <div className="card-body">
                            {/* <TicketSearch></TicketSearch> */}
                            <TicketSearchResult></TicketSearchResult>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-7">
                    <img src={mapImg} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Destination;