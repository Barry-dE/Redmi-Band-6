import "./imageSlide.scss";
import video from "../../assets/vid.mp4";
function ImageSlider() {
  return (
    <section className="display">
      <div className="display_video">
        <video src={video} loop muted autoPlay width={400} />
      </div>
      <div className="display_header-text">
        <h1 data-animation="header">
          More information <br /> at glance
        </h1>
      </div>
      <div className="display_paragraph" data-animation="paragraph">
        <p>
          The 1.56&quot; AMOLED display has undergone overall enhancements,
          providing +50% more display area for effortless checking of text
          messages, calls, and notifications at a quick glance.
        </p>
      </div>
    </section>
  );
}
export default ImageSlider;
