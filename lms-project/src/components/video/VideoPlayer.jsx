import React from "react";

const VideoPlayer = ({
  video,
  playerRef,
  onProgress,
}) => {

  if (!video) {
    return (
      <div className="card shadow-sm">
        <div className="card-body text-center">
          <h5>No Video Selected</h5>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow-sm">

      <div className="card-body">

        <video
          ref={playerRef}
          width="100%"
          height="500"
          controls
          onTimeUpdate={(e) =>
            onProgress({
              playedSeconds: e.target.currentTime,
            })
          }
        >
          <source
            src={video.video_url}
            type="video/mp4"
          />

          Your browser does not support video playback.

        </video>

      </div>

    </div>
  );
};

export default VideoPlayer;