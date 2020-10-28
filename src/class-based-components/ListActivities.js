import React, { Component, Fragment } from 'react';

class ListActivites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: []
        }
    }
    componentDidMount() {
        fetch('https://fakerestapi.azurewebsites.net/api/Activities')
        .then(response => response.json())
        .then(activities => { this.setState({ activities }) });
    }
    render() {
        const { activities } = this.state;
        return (
            <Fragment>
                {
                    (Array.isArray(activities) && activities.length)
                        ? <ul class='list'>
                            {this.getActivitiesList(activities)}
                        </ul>
                        : <span>Loading...</span>
                }
            </Fragment>
        )
    }
    getActivitiesList(activities) {
        return activities.map(activity => {
            return <li key={activity.id}>
                <span>{activity.Title}</span>
            </li>
        })
    }
}

export default ListActivites;