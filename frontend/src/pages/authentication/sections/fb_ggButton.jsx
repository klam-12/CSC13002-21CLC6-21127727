import '../authentication.css'

const FacebookGoogleButton = (props) => {
    return (
        <button className="fb-gg-button">
            <img src={props.src}></img> <> </> {props.content}
        </button>
    );
};
export default FacebookGoogleButton;