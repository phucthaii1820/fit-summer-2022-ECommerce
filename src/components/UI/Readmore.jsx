import React, { useState } from "react";
import CommentQA from "../comment-card/ReplyComment";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const Readmore = ({ children, ProductId, Fetch }) => {
  const [showMore, setShowMore] = useState(true);
  const [commentsToShow, setCommentsToShow] = useState(3);
  
  const toggleShowMore = () => {
    if (showMore) {
      let flag = commentsToShow < children.length ? commentsToShow + 3 : children.length;
      setCommentsToShow(flag);
      if(flag >= children.length){
        setShowMore(!showMore);
      }
    } else {
      let flag2 = commentsToShow - 3 > 3 ? commentsToShow - 3 : 3 ;
      setCommentsToShow(flag2);
      if(flag2 <= 3){
        setShowMore(!showMore);
      }
    }
  };

  return (
    <div>
      {children ? (
        children.slice(0, commentsToShow).map((comment, index) => (
          <div className="my-3" key={index}>
            <CommentQA
              children={comment}
              isChild={true}
              productId={ProductId}
              fetch={Fetch}
            ></CommentQA>
          </div>
        ))
      ) : (
        <></>
      )}
      {children.length > 3 ? (
        <div className="flex justify-center">
          <div className="flex items-center bg-yellow-light text-white border rounded-lg drop-shadow-lg">
            <button
              type="text"
              onClick={toggleShowMore}
              className="ml-6 my-1 text-lg"
            >
              {showMore ? "Hiển thị thêm" : "Ẩn bình luận"}
            </button>
            <div className="pb-1">
              {showMore ? (
                <DownOutlined className="ml-2 mr-6" />
              ) : (
                <UpOutlined className="ml-2 mr-6" />
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Readmore;
