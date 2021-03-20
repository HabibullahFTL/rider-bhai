import React from 'react';
import motorBike from '../../img/bike.svg';
import bus from '../../img/bus.svg';
import car from '../../img/sports-car.svg';
import rail from '../../img/rail.svg';

const Home = () => {
    return (
        <div className="container text-center py-md-5 py-3">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div className="col">
                    <a href="#" className="text-decoration-none">
                        <div className="card h-100">
                            <div className="card-body">
                                <img src={motorBike} className="w-50" alt="..." />
                            </div>
                            <div className="card-footer bg-white border-0">
                                <button className="btn btn-orange px-5 mb-3">Book Now</button>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col">
                    <a href="#" className="text-decoration-none">
                        <div className="card h-100">
                            <div className="card-body">
                                <img src={car} className="w-50" alt="..." />
                            </div>
                            <div className="card-footer bg-white border-0">
                                <button className="btn btn-orange px-5 mb-3">Book Now</button>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col">
                    <a href="#" className="text-decoration-none">
                        <div className="card h-100">
                            <div className="card-body">
                                <img src={bus} className="w-50" alt="..." />
                            </div>
                            <div className="card-footer bg-white border-0">
                                <button className="btn btn-orange px-5 mb-3">Book Now</button>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col">
                    <a href="#" className="text-decoration-none">
                        <div className="card h-100">
                            <div className="card-body">
                                <img src={rail} className="w-50" alt="..." />
                            </div>
                            <div className="card-footer bg-white border-0">
                                <button className="btn btn-orange px-5 mb-3">Book Now</button>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;