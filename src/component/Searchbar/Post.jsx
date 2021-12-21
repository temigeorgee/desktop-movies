import React, { useEffect, useState } from "react";
import Video from "./Video";
import {
  deleteEntryData,
  deleteUnlikedPosts,
  getComments,
  getEntries,
  createPostAction,
  deletePostAction,
} from "../utils/ApiRequests";
import { format } from "timeago.js";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

const Post = () => {
  const [loading, setLoading] = useState(false);
  const [Userposts, setPosts] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const [entryId, setEntryId] = useState("");

  useEffect(() => {
    const getEntry = async () => {
      try {
        setLoading(true);
        const { data } = await getEntries();

        setPosts(data.data);
        // setStories(data.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getEntry();
  }, []);

  // const handleLike = (id) => {
  //   setIsLike(!isLike);
  //   setEntryId(id);
  // };
  // console.log(isLike, "like data")
  // useEffect(() => {
  //   const postLike = async (isLike) => {
  //     try {
  //       setLoading(true);
  //       // const extractliked= isLike;
  //       const likeData = {
  //         entryId,
  //         isLike: true,
  //       };
  //       const { data } = (await isLike)
  //         ? deleteUnlikedPosts(likeData)
  //         : getLikedPosts(likeData);
  //       console.log(data);
  //       setLoading(false);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  // const postUnlike = async () => {
  //   try {
  //     setLoading(true);
  //     const extractliked= isLike;
  //     const unlikeData = {
  //       entryId,
  //       isLike: extractliked,
  //     };
  //     console.log('entrydata', unlikeData)
  //     const { data } = await deleteUnlikedPosts(unlikeData);
  //     console.log(data, "unlike");
  //     setLoading(false);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // isLike ? postLike() : postUnlike();
  //   postLike();
  // }, [isLike]);

  return (
    <>
      {Userposts?.map((el) => {
        const entryData = {
          entryId: el._id || el.userEntryData,
          isLike: false,
          isView: false,
          isVote: false,
          isBookmark: false,
          totalComments: el.totalComments || 0,
          totalLikes: el.totalLikes || 0,
        };

        return (
          <div className="post tw-mb-3">
            <Header
              userpic={el.userImageURL}
              username={el.userDisplayName}
              className="tw-bg-white"
            />
            <div className="video-container">
              {el.type == "video" ? (
                <Video src={el.mediaURL} />
              ) : (
                <img
                  src={el.mediaURL}
                  alt=""
                  className="tw-w-full tw-h-4/5 tw-object-contain"
                  style={{
                    height: "25rem",
                    backgroundPosition: "center center",
                  }}
                />
              )}
            </div>
            <ActionBar
              totalLikes={el.totalLikes}
              totalComments={el.totalComments}
              // handleLike={handleLike}
              id={el._id}
              data={entryData}
              className="tw-bg-white"
            />
            <Comment
              userDisplayName={el.userDisplayName}
              description={el.description}
              createdAt={el.createdAt}
              postId={entryData.entryId}
            />
          </div>
        );
      })}
    </>
  );
};

// Header
const Header = (props) => {
  return (
    <div className="bar tw-bg-white">
      <div className="bar-left">
        {props.userpic === null ? (
          <img
            src="/assets/images/useravatar.svg"
            alt="profile"
            className="profile-image clickable"
          />
        ) : (
          <img
            src={props.userpic}
            alt="profile"
            className="profile-image clickable"
          />
        )}

        <div className="profile-name clickable">{props.username}</div>
      </div>
      <div className="bar-right">
        <img
          src="/assets/images/menu.png"
          alt="menu"
          className="menu-icon clickable"
        />
      </div>
    </div>
  );
};

// action
const ActionBar = (props) => {
  const [data, setData] = useState({
    totalLikes: 0,
    totalComments: 0,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setData(props.data);
  }, []);

  const handleReaction = async (key = "isLike") => {
    try {
      setLoading(true);
      const _data = {
        entryId: data.entryId,
        [key]: true,
      };
      console.log("data-log", data);
      const action = data[key] ? deletePostAction : createPostAction;
      const res = await action(_data);
      setLoading(false);
      setData((prevState) => {
        return {
          ...prevState,
          [key]: !data[key],
          totalComments: res.data.meta.totalComments,
          totalLikes: res.data.meta.totalLikes,
        };
      });
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   isBookmark ? postBookmark() : deleteBookMark();
  // }, [isBookmark]);
  return (
    <div className="bar tw-bg-white">
      <div className="bar-left">
        <div className="tw-flex tw-items-center tw-space-x-1 tw-mr-3">
          <img
            src={
              data.isLike
                ? "/assets/images/heart.png"
                : "/assets/images/like.png"
            }
            alt="like"
            className="action-icon"
            onClick={() => handleReaction("isLike")}
          />
          <p>{data.totalLikes}</p>
        </div>
        <div className="tw-flex tw-items-center tw-space-x-2 tw-mr-3">
          <img
            src="/assets/images/comment.png"
            alt="comment"
            className="action-icon"
          />
          <p>{data.totalComments}</p>
        </div>
        <img src="/assets/images/send.png" alt="send" className="action-icon" />
      </div>
      <div className="bar-right">
        <img
          src={
            data.isBookmark
              ? "/assets/images/bookmark 2.png"
              : "/assets/images/bookmark.png"
          }
          alt="bookmark"
          className="action-icon-right"
          onClick={() => handleReaction("isBookmark")}
        />
      </div>
    </div>
  );
};

const Comment = (props) => {
  const [comment, setComment] = useState("");
  // get my id
  const addComment = async (comment) => {
    const userData = localStorage.getItem("user");
    console.log("userData", userData);
    console.log(comment);
    // commentMap.push({
    //   comment: comment,
    //   // username: user.displayName,
    // });

    await db
      .collection("entryComments")
      .doc(props.postId.trim())
      .collection("comments")
      .doc();
    setComment({
      senderId: userData._id,
      text: comment,
      userFirstName: userData.data.user.fName,
      userLastName: userData.data.user.sName,
      userName: `@iam${userData.data.user.fName.toLowerCase()}${userData.data.user.sName.toLowerCase()}`,
      imgUrl: userData.data.user.sName.imgUrl,
      sentAt: Date(),
      delivered: false,
      sent: true,
    });
  };
  return (
    <>
      <div className="tw-flex-col tw-pb-3 tw-bg-white">
        <div className="tw-flex tw-items-center tw-space-x-1 tw-px-3">
          <p className="tw-text-xs">
            <span className="tw-font-bold tw-mr-5">
              {props.userDisplayName}
            </span>
            {props.description}
          </p>
          {/* <p className="tw-text-sm"></p> */}
        </div>
        <p
          className="tw-text-gray-400 tw-font-bold  tw-space-x-1 tw-px-3"
          style={{ fontSize: "12px" }}
        >
          {format(props.createdAt)}
        </p>
      </div>
      <hr />
      {/* <form>
      <div className="addComment tw-flex tw-items-center tw-justify-between">
        <input
          type="text"
          className="commentText"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="postText tw-cursor-pointer"  onClick={addComment} style={{
          color: comment ? "gray" : "lightgrey",
          fontWeight: comment ? "600" : "500",
        }}>Post</div>
      </div>
        </form> */}
    </>
  );
};

export default Post;
