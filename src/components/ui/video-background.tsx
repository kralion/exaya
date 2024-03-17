export default function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    >
      <source
        src="https://cdn.pixabay.com/vimeo/887039127/road-189805.mp4?width=360&hash=0a9fb9b3a09bc21c617d2508d4eab36bc3744bdf"
        type="video/mp4"
      />
    </video>
  );
}
