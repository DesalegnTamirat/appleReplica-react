import { formatDate, truncateText } from "../../utils/formatter";

function YoutubeVideo({ video }) {
  const publishedDate = formatDate(video.snippet.publishedAt);

  return (
    <div className="mx-auto col-10 col-md-6 mt-3">
      <div className="card h-100 shadow-sm">
        <a
          href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={video.snippet.thumbnails.medium.url}
            className="card-img-top"
            alt={video.snippet.title}
          />
        </a>
        <div className="card-body d-flex flex-column">
          <h4 className="card-title">{video.snippet.title}</h4>
          <p className="card-text text-muted mb-2">
            {truncateText(video.snippet.description, 100)}
          </p>

          <p className="card-text small mt-auto">
            Published: {publishedDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideo;
