import Error from "../Error";
import useYoutubeVidoes from "../hooks/useYoutubeVidoes";
import Spinner from "../Spinner";
import YouTubeVideo from "./YoutubeVideo";

function YoutubeVideoContainer() {
  const { videos, isLoading, error } = useYoutubeVidoes(8);

  console.log(videos, isLoading, error);
  if (isLoading) return <Spinner />;
  if (error) return <Error message={error} />;
  return (
    <section className="py-5 px-5">
      <div className="container">
        <div className="row g-3">
          {videos.map((video) => (
            <YouTubeVideo key={video.id.videoId} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default YoutubeVideoContainer;
