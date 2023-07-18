import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByActivities, getAllActivities } from "../../redux/actions";
import './filter.styles.css'

export default function FilterByActivities() {
    const dispatch = useDispatch()
    const allActivities = useSelector(state => state.allActivities)
    const [activities, setActivities] = useState([])

    useEffect(() => {
        dispatch(getAllActivities())
        dispatch(filterByActivities(activities))
    }, [dispatch, activities])


    function handleActivities(e) {
        if(e.target.value !== 'Seleccionar' && !activities.includes(e.target.value)){
            setActivities([...activities, e.target.value])
        }
    }
    function handleDeleteActivities(e) {
        setActivities(activities.filter(activity => activity !== e.target.value))
    }

    return(
        <div className="activities">
            <div>
                <div>
                    <select onChange={e => handleActivities(e)}>
                        <option>Seleccionar</option>
                        {allActivities.map(acti => {
                            return(
                                <option key={acti.name} value={acti.name}>{acti.name}</option>
                                )
                            })}
                    </select>
                </div>
                <div className="displayActivities">
                    {activities.map((activity) => {
                        return(
                            <div className="eachActivity" key={activity}>
                                <p className="activityName">{activity}</p>
                                <button className="closeButton" onClick={e => handleDeleteActivities(e)} value={activity}>X</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}