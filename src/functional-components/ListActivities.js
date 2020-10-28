import React, { Fragment, useState, useEffect } from 'react';

const ListActivites = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('https://fakerestapi.azurewebsites.net/api/Activities')
        .then(response => response.json())
        .then(activities => { setActivities(activities) });
    });

    return (
        <Fragment>
            {
                (Array.isArray(activities) && activities.length)
                    ? <ul class='list'>
                        {getActivitiesList(activities)}
                    </ul>
                    : <span>Loading...</span>
            }
        </Fragment>
    )
};

const getActivitiesList = (activities) => {
    return activities.map(activity => {
        return <li key={activity.id}>
            {activity.Title}
        </li>
    })
}

export default ListActivites;