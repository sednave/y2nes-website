const MusicLinks = () => {
  return (
    <section id="y2nes-music-links" className="homepage-section">
      <img
        className="background-image"
        src="https://y2nes.com/assets/max_power_banner.png"
        alt="Background image for the music links section"
        aria-hidden="true"
      />
      <div className="links-container floating-card-on-wide">
        <h2>MUSIC LINKS</h2>
        <a
          className="link-button"
          href="https://open.spotify.com/artist/0j7ysZlkFVCFCYX59vb0hs"
          target="_blank"
          rel="noopener noreferrer"
        >
          SPOTIFY
        </a>
        <a
          className="link-button"
          href="https://music.apple.com/us/artist/y2nes/1813450877"
          target="_blank"
          rel="noopener noreferrer"
        >
          APPLE MUSIC
        </a>
        <a
          className="link-button"
          href="https://www.youtube.com/@Y2NES"
          target="_blank"
          rel="noopener noreferrer"
        >
          YOUTUBE
        </a>
        <a
          className="link-button"
          href="https://y2nes.bandcamp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          BANDCAMP
        </a>
        <a
          className="link-button"
          href="https://soundcloud.com/y2nes"
          target="_blank"
          rel="noopener noreferrer"
        >
          SOUNDCLOUD
        </a>
      </div>
    </section>
  );
};

export default MusicLinks;
