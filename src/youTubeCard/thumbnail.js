import React from 'react';
import Details from './details';

class Thumbnail extends React.Component {
    constructor()
    {
        super()
    }
    componentDidMount(){

    }

    render() {
        return(
            <div>
                <Details text="best songs to boost your mind" />
            </div>
        )
    }

}
export default Thumbnail;