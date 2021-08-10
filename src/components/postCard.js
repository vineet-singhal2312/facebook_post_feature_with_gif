import React from "react";

const PostCard = ({ post }) => {
  return (
    <>
      <div className="col">
        <div className="card">
          {!!post.selectedGif ? (
            <img
              src={post.selectedGif}
              className="card-img-top post-img"
              alt="..."
            />
          ) : (
            <></>
          )}
          <div className="card-body post-card-body text-start">
            <h5 className="card-title">
              {" "}
              <img
                className="post-img-user"
                alt="post-img"
                src="https://tse2.mm.bing.net/th?id=OIP.e1KNYwnuhNwNj7_-98yTRwHaF7&pid=Api&P=0&w=194&h=156"
              />{" "}
              User Name
            </h5>
            <p className="card-text">{post.postText}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
