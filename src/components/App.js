import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                hello world
            </div>
        );
    }
}

function mapStateToProps (calendar) {
    const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    return {
        calendar: dayOrder.map(day => ({
            day: day,
            meals: Object.keys(calendar[day]).reduce((meals, meal) => {
                meals[meal] = calendar[day][meal]
                    ? calendar[meals][meal] : null
                return meals;
            }, {})
        }))
    }
}

export default connect(mapStateToProps)(App);
