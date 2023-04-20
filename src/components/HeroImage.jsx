import smallImage from "/images/hero-mobile.jpg";
import largeImage from "/images/hero-desktop.jpg";

const HeroImage = () => {
  return (
    <div>
      <picture>
        <source media="(min-width: 600px)" srcSet={largeImage} />
        <img className="w-full" src={smallImage} alt="" aria-hidden="true" />
      </picture>
    </div>
  );
};

export default HeroImage;
