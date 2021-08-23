import './Icons.css';

import IconComment from "./icon-comment.svg"
import IconHeartSvg from "./icon-heart.svg"
import IconHome from "./icon-home.svg"

function IconButton(props) {
  return (
    <div className="IconButton">
        <img src={props.imageSrc}></img>
    </div>
  );
}

export function IconButtonComment() {
  return <IconButton imageSrc={IconComment}></IconButton>
}

export function IconButtonHeart() {
  return <IconButton imageSrc={IconHeartSvg}></IconButton>
}

export function IconButtonHome() {
  return <IconButton imageSrc={IconHome}></IconButton>
}