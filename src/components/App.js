import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {
    doThing = () => {
        this.props.addRecipe({})
    }
    render() {
        console.log(this.props);
        return (
            <div>
                hello world
            </div>
        );
    }
}

function mapStateToProps ({ calendar, food }) {
    const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    return {
        calendar: dayOrder.map(day => ({
            day: day,
            meals: Object.keys(calendar[day]).reduce((meals, meal) => {
                meals[meal] = calendar[day][meal]
                    ? food[calendar[meals][meal]] : null
                return meals;
            }, {})
        }))
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectRecipe: (data) => dispatch(addRecipe(data)),
        remove: (data) => dispatch(removeFromCalendar(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
