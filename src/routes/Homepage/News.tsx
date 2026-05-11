const News = () => {
    const youtubeEmbedUrl = "https://www.youtube.com/embed/0aYVJ-fONBY?si=qY4hCcaDXxn1pXkL"

    return(
    <section id="news-section" className="homepage-section">
      <img
        className="background-image"
        src="https://f4.bcbits.com/img/a2242049588_10.jpg"
        alt="Background image for the news section"
        aria-hidden="true"
      />
      <div id="news-panel" className="floating-card-on-wide">
        <h2>News</h2>
        <div id="news-grid">
            <iframe
            width="560"
            height="315"
            src={youtubeEmbedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            ></iframe>
            <div>
                <div>
                    <h3>Latest Single: "BACK TO BASICS"</h3>
                    <p>The cutest breakcore track you'll ever listen to.</p>

                    <p>Download: https://y2nes.bandcamp.com/album/back-to-basics</p>
                    <p>Streaming: https://too.fm/grxm3mr</p>

                    <p>"Modern life, with all of its conveniences and technology, is overwhelming. Sometimes, you just need to take a step back and enjoy the little things in life to realize how lucky you have it.</p>

                    <p>Unfortunately for Alisa, Serina, Erica, and Leta, they literally can't afford to do that, as rent is due last day of the month and they've burned through all of their savings. So, off to the dungeon for them."</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default News;