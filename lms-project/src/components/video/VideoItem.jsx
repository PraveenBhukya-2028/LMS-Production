import React from "react";

const VideoItem = ({
  video,
  selectedVideo,
  onSelect,
}) => {
  return (
    <div
      className={`card mb-2 ${
        selectedVideo?.id === video.id
          ? "border-primary"
          : ""
      }`}
      style={{
        cursor: "pointer",
      }}
      onClick={() => onSelect(video)}
    >
      <div className="card-body p-2">

        <img
          src={video.thumbnail}
          alt={video.title}
          className="img-fluid rounded mb-2"
        />

        <h6 className="mb-1">
          {video.title}
        </h6>

        <small className="text-muted">
          {video.duration}
        </small>

      </div>
    </div>
  );
};

export default VideoItem;