import "./personal.css";

function PersonalBio(props){
    return(
        <div className ="bio">
            <h2>{props.name}</h2>
            <p>Age:{props.age}</p>
            <p className="bio-text">{props.bio}</p>
        </div>
    );
}
export default PersonalBio;