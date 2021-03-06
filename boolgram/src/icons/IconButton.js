import './Icons.css';

import React from 'react';
import IconComment from "./icon-comment.svg";
import IconHeartSvg from "./icon-heart.svg";
import IconHome from "./icon-home.svg";
import IconEmoji from "./icon-emoji.svg";

function IconButton(props) {
  return (
    <div className="IconButton">
      <img src={props.imageSrc} alt={props.imageAlt || ' '}></img>
    </div>
  );
}

export function IconButtonComment() {
  return <IconButton imageSrc={IconComment} imageAlt='Comment'></IconButton>;
}

export function IconButtonHeart() {
  return <IconButton imageSrc={IconHeartSvg} imageAlt='Like'></IconButton>;
}

export function IconButtonHome() {
  return <IconButton imageSrc={IconHome} imageAlt='Home'></IconButton>;
}

export function IconButtonEmoji() {
  return <IconButton imageSrc={IconEmoji} imageAlt='Emoji'></IconButton>;
}