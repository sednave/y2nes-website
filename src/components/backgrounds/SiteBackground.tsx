import DotGrid from "./DotGrid";

const SiteBackground = () => {
  return (
    <div className="site-background">
      <DotGrid baseColor="#7fffd4" dotSize={4} gap={32} returnDuration={2} />
    </div>
  );
};

export default SiteBackground;
