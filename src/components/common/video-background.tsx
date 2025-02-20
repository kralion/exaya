export default function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      className="  h-full  w-2/5  object-cover brightness-75"
    >
      <source
        src="https://cdn.pixabay.com/video/2023/04/30/161071-822582138_large.mp4"
        type="video/mp4"
      />
    </video>
  );
}
