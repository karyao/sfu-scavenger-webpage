import '../styles/video.css';

export default function Video() {
  return (
    <section id="video" className="video">
      <div className="video-container">
        <h2 className="video-title">Presentation Video</h2>
        <div className="video-wrapper">
          <iframe
            width="800"
            height="600"
            src="https://www.youtube.com/embed/QRcudiW_gC4?si=-sKa6SN_9TYjtiNk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="video-embed"
          ></iframe>
        </div>
        <p className="video-placeholder">TODO: replace with the actual video</p>
      </div>
    </section>
  );
}

