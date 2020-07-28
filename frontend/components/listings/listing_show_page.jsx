import React from 'react';


class ListingShowPage extends React.Component {

    componentWillReceiveProps(newState) {
        this.setState({ listing: newState.listing });
    }

    render(){
        return(
        <div>
         I am listing number {this.props.listing.id}
        </div>
        )
    }
}
export default ListingShowPage;