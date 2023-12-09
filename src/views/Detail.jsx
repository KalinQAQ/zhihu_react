import React from "react";
import "./Detail.less";
import {
  LeftOutline,
  MessageOutline,
  LikeOutline,
  StarOutline,
  MoreOutline,
} from "antd-mobile-icons";
import { Badge } from "antd-mobile";

const Detail = function Detail(props) {
  let { navigate } = props;
  return (
    <div className="detail-box">
      {/* 新闻内容 */}
      <div className="content"></div>

      {/* 底部图片 */}
      <div className="tab-bar">
        <div
          className="back"
          onClick={() => {
            navigate(-1);
          }}
        >
          <LeftOutline />
        </div>
        <div className="icons">
          <Badge content="128">
            <MessageOutline />
          </Badge>
          <Badge content="29">
            <LikeOutline />
          </Badge>
          <span className="stored">
            <StarOutline />
          </span>
          <span>
            <MoreOutline />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
