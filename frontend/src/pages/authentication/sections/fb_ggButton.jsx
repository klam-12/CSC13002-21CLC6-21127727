import '../authentication.css'

const FacebookGoogleButton = (props) => {
    return (
        <button className="fb-gg-button">
            {props.content}
        </button>
    );
};
export default FacebookGoogleButton;