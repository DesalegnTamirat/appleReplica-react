import useYoutubeVidoes from "../../hooks/useYoutubeVideos";
import Error from "../Error";
import Spinner from "../Spinner";
import YoutubeVideo from "./YoutubeVideo";

function YoutubeVideoContainer() {
  const { videos, isLoading, error } = useYoutubeVidoes(8);

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error} />;
  return (
    <section className="py-5 px-5">
      <div className="container">
        <h1 className="text-center mb-3">Latest Apple Vidoes</h1>
        <div className="row">
          {videos.map((video) => (
            <YoutubeVideo key={video.id.videoId} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default YoutubeVideoContainer;
