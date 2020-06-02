import React from 'react';

class Followers extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        if(this.props.followers === undefined){return <div>No Followers</div>}else if(this.props.followers.length===0){
           return <div>No followers</div>
        }
        console.log('props given to Followers Component',this.props.followers)

        return (<div>
            {this.props.followers.map(follower =>{
                return(
                    <div key={follower.name}>
                        <p>{follower.name}</p>
                <p>Login:{follower.login}</p>
                <img src={follower.avatar_url} alt={follower.login}/>
                    </div>
                )
            })}
        </div>  
        );
        
}
}
export default Followers