import React from 'react';

class User extends React.Component {
    constructor()
    {
        super()
    }
    componentDidMount(){

    }

    render() {
        return(
            <div>
                <h1 >
                   { this.props.button } 
                  
                </h1>
                <h1> { this.props.data.name}</h1>
            </div>
        )
    }

}
export default User;