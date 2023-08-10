import './avatar.css'

const Avatar = (props) => {
    return (
        <img className="avatar" src={props.image} alt="avatar"/>
    );
};
export default Avatar;