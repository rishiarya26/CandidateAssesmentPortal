import React from "react";

export default function VideoPlayer(props) {
    const {data}=props;
  return (
    <>
      <video
        className="mar-top-small"
        width="90%"
        height="350"
        controls
        src={data.src}
      >
        Your browser does not support the video tag.
      </video>
    </>
  );
}
