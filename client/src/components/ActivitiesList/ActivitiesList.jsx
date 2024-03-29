import React, {useEffect} from "react"; // useState
import {useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../redux/actions";
import Activity  from "../Activity/Activity";
import NavBar from "../NavBar/NavBar";
import "./ActivitiesList.css"

export default function ActivitiesList(){

    const activities= useSelector((state)=> state.activities);
    const dispatch= useDispatch();
    /// configure el use effect con GET ACTIVITIES POR EL ERROR DE QUE NO SE ACTUALIZABA CORRECTAMENTE AL MMOMENTO
    useEffect(() => {
      dispatch(getActivities());
    }, [dispatch]);
    
    return (
        <div className="activityListContainer">
            <div>
                <NavBar/>
             </div>
              <h2 className="ActivityTitle">Actividades Creadas</h2>
            
            <div className="activityCardListContainer">{
                activities?.map((acc) =>{
                    return(
                        <div className="activityCardList">
                            <Activity
                                name={acc.name}
                                duration={acc.duration}
                                season={acc.season}
                                difficulty={acc.difficulty}
                                
                                />
                        </div>
                    )
                })}
            
            </div>
        </div>
    );
}