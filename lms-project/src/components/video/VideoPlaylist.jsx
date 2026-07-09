import React from "react";
import VideoItem from "./VideoItem";

const VideoPlaylist = ({
  videos,
  selectedVideo,
  onSelect,
}) => {

  return (
    <div className="card shadow-sm">

      <div className="card-header">
        <h5 className="mb-0">
          Course Videos
        </h5>
      </div>

      <div
        className="card-body"
        style={{
          maxHeight: "550px",
          overflowY: "auto",
        }}
      >

        {videos.map((video) => (

          <VideoItem
            key={video.id}
            video={video}
            selectedVideo={selectedVideo}
            onSelect={onSelect}
          />

        ))}

      </div>

    </div>
  );

};

export default VideoPlaylist;