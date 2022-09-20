import PropTypes from "prop-types";

function User({name, surname, isLoggedIn, friends, address}){
    
    // if (!isLoggedIn){
    //     return <div> Cannot logged in.</div>;
    // }

    return (
        <>
            <h1>{`${name} ${surname}`}</h1>
            {address.title} {address.zip}
            <br />
            <br />
            {
                friends && 
                friends.map((friend) => <div key={friend.id}>{friend.name}</div>
                
            )}
        </>
    );
}       

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    })
};

// User.defaultProps = {
//     isLoggedIn: false
// }

export default User;