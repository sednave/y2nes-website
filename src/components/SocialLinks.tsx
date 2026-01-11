const SocialLinks = () => {
  return (
    <section id="y2nes-social-links" className="homepage-section">
      <img
        className="background-image"
        src="https://y2nes.com/assets/y2nes_banner.png"
        alt="Background image for the social media links section"
        aria-hidden="true"
      />
      <div className="links-container floating-card-on-wide">
        <h2>SOCIAL MEDIA</h2>
        <a
          className="link-button"
          href="https://www.instagram.com/its.y2nes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          INSTAGRAM
        </a>
        <a
          className="link-button"
          href="https://x.com/wivyrn"
          target="_blank"
          rel="noopener noreferrer"
        >
          TWITTER / X
        </a>
        <a
          className="link-button"
          href="https://bsky.app/profile/wivyrn.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
        >
          BLUESKY
        </a>
        <a
          className="link-button"
          href="https://www.tiktok.com/@y.2nes"
          target="_blank"
          rel="noopener noreferrer"
        >
          TIKTOK
        </a>
        <a
          className="link-button"
          href="https://discord.com/invite/28ZypjypMq"
          target="_blank"
          rel="noopener noreferrer"
        >
          DISCORD SERVER
        </a>
        <a className="link-button" href="mailto:contact@y2nes.com">
          EMAIL / INQUIRIES
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;
