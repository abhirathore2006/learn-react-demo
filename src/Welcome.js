import React from 'react'

export function Welcome(props) {
    return <div>welcome {props.name}</div>
}

export class WelcomeClass extends React.Component {
    render() {
        return <div>welcome {this.props.name}</div>
    }
}
