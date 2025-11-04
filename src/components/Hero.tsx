import '../styles/hero.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
                SFU Scavenger Mobile App
            </h1>
            <p className="hero-description">
              Create and manage scavenger hunts for SFU events. Players join with a code, complete challenges, and compete on a live leaderboard.
            </p>
            <div className="hero-buttons">
              <a
                href="#apk"
                className="btn-secondary"
              >
                Download APK
              </a>
              <a
                href="#video"
                className="btn-primary"
              >
                Watch Pitch
              </a>
            </div>
          </div>
          <div className="hero-phone-container">
            <Image
              src="/phone_demo.png"
              alt="App Screenshot"
              width={400}
              height={800}
              className="hero-phone-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

