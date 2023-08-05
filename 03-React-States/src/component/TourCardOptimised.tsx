import React, {useState} from 'react'
import {TourCard} from "./TourCard";
import {TourService} from "../services/TourService";
import {ITour} from "./tour/models/ITour";

const TourCardOptimised: React.FC = () => {
    const [tours, setTours] = useState<ITour[]>(TourService.getAllTours);
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    {
                        tours.length > 0 && tours.map((tour, index) => {
                            return (

                                <TourCard key={index} imageUrl={tour.imageUrl} name={tour.name}/>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TourCardOptimised
