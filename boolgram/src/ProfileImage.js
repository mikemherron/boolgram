export const SIZE_SMALL = "small"
export const SIZE_MEDIUM = "medium"
export const SIZE_LARGE = "large"

function ProfileImage(props) {
    const size = props.size || SIZE_MEDIUM;
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
  
  export default ProfileImage;
  