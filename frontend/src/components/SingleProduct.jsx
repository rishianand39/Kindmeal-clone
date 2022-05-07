import React from "react";
import { Link } from "react-router-dom";
import { HotPicsButton } from "./HotPicsButton";

export const SingleProduct = ({ item, comment, title }) => {
  return (
    <>
      <div className="content-all">
        <div className="title-div">
          <span className="title-content">{title}</span>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="title-right">View Deals </span>
          </Link>
        </div>
        <div className="items-div">
          {item.map((e) => (
            <div className="items-des">
              <div className="items-image">
                <img height={"100%"} width={"100%"} src={e.image} alt="" />
                <div>{e.heading}</div>
              </div>
              <div>{e.subheading}</div>
            </div>
          ))}
        </div>
        <div className="comment-div">
          {comment.map((e) => (
            <div>
              <div className="comment-image">
                <img height={"100%"} width={"100%"} src={e.image} alt="" />
              </div>
              <div className="comment-text">
                <p className="comment-name">{e.name}</p>
                <p>{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
