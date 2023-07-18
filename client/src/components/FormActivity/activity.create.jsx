import React, {useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';
import { postActivities, getCountries } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function ActivityCreate(){
    const dispatch = useDispatch()
    const history = useHistory()
    const countries = useSelector((state) => state.countries)

    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: []
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input);
    }

    // function handleCheck(e){
    //     if(e.target.checked){
    //         setInput({
    //             ...input,
    //             status: e.target.value
    //         })
    //     }
    // }

    function handleSelect(e){
        setInput({
            ...input,
            countries: [...input.countries, e.target.value]
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postActivities(input))
        alert("Activiy Created!!!")
        setInput({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: []
        })
        history.push('/home')
    }

    useEffect(() => {
        dispatch(getCountries())
    }, [])

    return(
        <div>
            <Link to= '/home'><button>Back</button></Link>
            <h1>Create activity</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text"
                        value={input.name}
                        name= "name" 
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Difficulty:</label>
                    <input 
                        type="text"
                        value={input.difficulty}
                        name= "difficulty" 
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Duration:</label>
                    <input 
                        type="time"
                        value={input.duration}
                        name= "duration" 
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Season:</label>
                    <input 
                        type="text"
                        value={input.season}
                        name= "season" 
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <select onChange={(e) => handleSelect(e)}>
                    {countries.map((co) => (
                        <opcion value={co.name}>{co.name}</opcion>
                    ))}
                </select>
                <ul><li>{input.countries.map(el => el + " ,")}</li></ul> para que agregue los paises
                <button type="submit">Create activity</button>
            </form>
        </div>
    )
}