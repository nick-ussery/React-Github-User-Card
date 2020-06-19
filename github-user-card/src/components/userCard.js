import React from 'react';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
    };
    
    render() { 
        console.log('props given to UserCard',this.props);
        return (<div>
            <h2>{this.props.user.name}</h2>
            <img src={this.props.user.avatar_url} alt={this.props.user.name} />
            <h3>Bio</h3>
            <p>{this.props.user.bio}</p>
            <h3>Followers:</h3>
            <p>{this.props.user.followers_url}</p>
        </div>  );
    }
}
 
export default UserCard;