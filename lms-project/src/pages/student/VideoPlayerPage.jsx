import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";

import VideoPlayer from "../../components/video/VideoPlayer";
import VideoPlaylist from "../../components/video/VideoPlaylist";

import videoService from "../../services/videoService";

const VideoPlayerPage = () => {

  const { courseId } = useParams();

  const playerRef = useRef(null);

  const [videos, setVideos] = useState([]);

  const [selectedVideo, setSelectedVideo] =
    useState(null);

  const [currentTime, setCurrentTime] =
    useState(0);

  useEffect(() => {

    loadVideos();

  }, [courseId]);

  const loadVideos = async () => {

    try {

      const response =
        await videoService.getVideosByCourse(courseId);

      setVideos(response.data);

      if (response.data.length > 0) {

        setSelectedVideo(response.data[0]);

      }

    } catch (error) {

      console.log(error);

    }

  };

  const handleProgress = (state) => {

    setCurrentTime(
      Math.floor(state.playedSeconds)
    );

  };

  return (

    <DashboardLayout>

      <h2 className="mb-4">
        Video Learning
      </h2>

      <div className="row">

        <div className="col-lg-8">

          <VideoPlayer
            video={selectedVideo}
            playerRef={playerRef}
            onProgress={handleProgress}
          />

          <div className="mt-3">

            <strong>
              Current Time :
            </strong>

            {" "}

            {currentTime} sec

          </div>

        </div>

        <div className="col-lg-4">

          <VideoPlaylist
            videos={videos}
            selectedVideo={selectedVideo}
            onSelect={setSelectedVideo}
          />

        </div>

      </div>

    </DashboardLayout>

  );

};

export default VideoPlayerPage;