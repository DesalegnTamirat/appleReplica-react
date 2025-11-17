const truncateText = (text, maxLength) =>
  text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

function YoutubeVideo({ video }) {
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
          <h5 className="card-title">{video.snippet.title}</h5>
          <p className="card-text text-muted">
            {truncateText(video.snippet.description, 100)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideo;
