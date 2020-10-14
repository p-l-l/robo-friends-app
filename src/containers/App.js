import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

function App() {
    
    const [robots, setRobots] = useState([]); //Return piece of state and function that affects this state
    const [searchfield, setSearchfield] = useState('');

    //By default React use the useEffect everytime it renders
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            setRobots(users);
        });
    }, []); //In the array we pass value that says "Hey, only run useEffect when this value change", but empty array turns in into componentDidMount (called once)

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ?
    <h1 className="tc f1">Loading...</h1> :
    (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots} />
                </ErrorBoundry>
            </Scroll>
        </div>
    );
}

export default App;