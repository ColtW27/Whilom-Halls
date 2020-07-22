import React from 'react';

// const ListingShowPage = () => {

//   componentWillReceiveProps(newState){
//     this.setState({ listing: newState.listing });
//   }
//     return(
//     <div>
//         I am listing number {this.props.listing.id}
//     </div>
//     )
// }

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