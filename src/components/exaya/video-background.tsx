export default function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      className=" h-full w-full object-fill  brightness-75"
    >
      <source
        src="https://videos.pexels.com/video-files/1722697/1722697-sd_640_360_25fps.mp4"
        type="video/mp4"
      />
    </video>
  );
}
