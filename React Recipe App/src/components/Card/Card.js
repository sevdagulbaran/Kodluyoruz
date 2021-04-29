import React from "react";
import "./Card.css";
 // Tell webpack this JS file uses this image
import heartOutline from "../../assets/heart-outline.png"; // Tell webpack this JS file uses this image
import heartFill from "../../assets/heart-fill.png"; // Tell webpack this JS file uses this image


 function Card({author,recipeItem,likeCount,isLiked}) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{author}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{recipeItem.title}</h5>
          <div className="card-date">{recipeItem.date}</div>
        </div>
      </div>
      <img className="card-image" src={recipeItem.image} alt="Logo" />
      <div className="card-text">{recipeItem.description}</div>
      <div className="card-like-bar">
        {isLiked ? (
          <img className="card-like-icon" src={heartFill} alt="Logo" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
        )}
        <div className="like-text">
          <b>{likeCount}</b> kişi bu tarifi beğendi.
        </div>
      </div>
    </div>
  );
}
export default Card;
