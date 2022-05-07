import React from "react";
import { Link } from "react-router-dom";

export const AllCategory = ({ item, comment, title }) => {
  return (
    <>
      <div className="content-all">
        <div className="title-div">
          <span className="title-content">{title}</span>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="title-right">View Deals • View All Hot Picks</span>
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
        <hr className="line" />
        <div className="comment-div">
          {comment.map((e) =>
            e.id > 4 ? null : (
              <div>
                <div className="comment-image">
                  <img height={"100%"} width={"100%"} src={e.image} alt="" />
                </div>
                <div className="comment-text">
                  <p className="comment-name">{e.name}</p>
                  <p>{e.description}</p>
                </div>
              </div>
            )
          )}
        </div>
        {/* footer */}
        <div className="footer-content">View All {title} Hot Picks »</div>
      </div>
    </>
  );
};
