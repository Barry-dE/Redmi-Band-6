import idea from "../../assets/education-school-study-sticker-6-svgrepo-com.svg";
import "./hero.scss";

function Hero() {
  return (
    <div className="container">
      <p data-animation="paragraph">
        Experience the future of fitness and wellness with <br /> the Mi Smart
        Band 6, the world&apos;s leading <br />
        wearable band brand that keeps you one step <br /> ahead of your health
        and lifestyle goals
      </p>
      <div className="marquee">
        <span>
          Mi Smart Band 6. Mi Smart Band 6. Mi Smart Band 6. Mi Smart Band 6. Mi
          Smart Band 6. Mi Smart Band 6. Mi Smart Band 6. Mi Smart Band 6. Mi
          Smart Band 6. Mi Smart Band 6. Mi Smart Band 6. Mi Smart Band 6. Mi
          Smart Band 6. Mi Smart Band 6. Mi Smart Band 6. Mi Smart Band 6. Mi
          Smart Band 6. Mi Smart Band 6. Mi Smart Band 6. Mi Smart Band 6. Mi
          Smart Band 6. Mi Smart Band 6. Mi Smart Band 6. Mi Smart Band 6. Mi
        </span>
      </div>
      <section>
        {/* <img
          src={watch}
          alt="smart watch"
          data-speed="-10"
          className="layer img-1"
        /> */}
        <img
          src={idea}
          alt="smart watch"
          data-speed="8"
          className="layer img-2"
        />
      </section>
    </div>
  );
}

export default Hero;
