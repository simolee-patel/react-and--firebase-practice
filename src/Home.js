import React, { useEffect, useState } from 'react'
import db from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';


function Home() {
    const [{ user }, dispatch] = useStateValue();
    const [name, setName] = new useState();
    const [age, setAge] = new useState();
    const [people, setPeople] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('peoples').add({
            name: name,
            age: age,
        });
        setName("");
        setAge("");
    }

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_LOGOUT,
            user: null,
        })
    }

    useEffect(() => {
        db.collection("peoples").onSnapshot((snapshot) =>
            setPeople(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );

    })
    return (
        <>
            <div className="home">
                <h1>Welcome to home!!!!!!</h1>
                <h3>{user.displayName}</h3>
                <img src={user.photoURL} alt="" />

            </div>
            <div>
                <form>
                    <input value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="name"
                        placeholder={'Enter your Name'} />
                    <input value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="name"
                        placeholder={'Enter your Name'} />
                    <button onClick={handleSubmit} type="submit">
                        Submit
                    </button>
                </form>
                {people.map((people) => (
                    <h1>{people.data.name}   {people.data.age}</h1>

                ))}


                <button onClick={handleLogout}>logout</button>
            </div>
        </>
    )
}

export default Home 
