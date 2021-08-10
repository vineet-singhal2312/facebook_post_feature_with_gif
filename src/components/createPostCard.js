import { useContext, useState } from "react";
import axios from "axios";
import { PostContext } from "../provider/postProvider";

export const CreatePostCard = () => {
  const [postText, setPostText] = useState("");
  const [selectedGif, setSelectedGif] = useState("");
  const [results, setResults] = useState([]);

  const { post, setPost } = useContext(PostContext);

  const gifFetch = async (e) => {
    try {
      const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "dwEy2XzTDfw9qr8M4By3cggsHQOFwPgT",
          q: e.target.value,
          limit: 25,
        },
      });
      setResults(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row ">
      <div className="col-sm-3"></div>
      <div className="col-sm-6 mt-4 ">
        <div className="card">
          <div className="mb-3">
            <label>Create Post</label>
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            ></textarea>
            <div>
              {selectedGif ? (
                <img
                  src={selectedGif}
                  className="search-gif"
                  alt="search-gif"
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="card-body d-flex justify-content-around">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gif
              </button>
              <ul className="dropdown-menu" id="dropdown-menu">
                <li>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Gif"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e) => {
                      gifFetch(e);
                    }}
                  />
                </li>

                {results?.map((gif) => {
                  return (
                    <div key={gif.id}>
                      {!!gif.images.fixed_height.url ? (
                        <img
                          onClick={() => {
                            setSelectedGif(gif.images.fixed_height.url);
                          }}
                          src={gif.images.fixed_height.url}
                          className="search-gif"
                          alt="search-gif"
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                  );
                })}
              </ul>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => {
                setPost([
                  ...post,
                  {
                    postText,
                    selectedGif,
                  },
                ]);
                setPostText("");
                setSelectedGif("");
              }}
              disabled={!(postText || selectedGif)}
            >
              Post
            </button>
          </div>
        </div>
      </div>
      <div className="col-sm-3"></div>
    </div>
  );
};
