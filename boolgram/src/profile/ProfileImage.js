import './Profile.css';

const SIZE_SMALL = "small";
const SIZE_MEDIUM = "medium";
const SIZE_LARGE = "large";

function ProfileImage(props, size) {
    const showHighlight = props.showHighlight!==false;
    return (
      <div className="Profile">
          { showHighlight && 
            <div className={`ProfileHighlight ProfileHighlight--${size}`}></div>
          }
          <img className={`ProfileImage ProfileImage--${size}`} src={props.imageUrl}></img>
      </div>
    );
}
  
export function ProfileImageSmall(props) {
  return ProfileImage(props, SIZE_SMALL);
}

export function ProfileImageMedium(props) {
  return ProfileImage(props, SIZE_MEDIUM);
}

export function ProfileImageLarge(props) {
  return ProfileImage(props, SIZE_LARGE);
}