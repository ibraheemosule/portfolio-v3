import { HeroStyle } from "../styles/Hero.styled";
import { HeroImgStyle } from "../styles/HeroImgStyle.styled";
import Image from "next/image";
import images from "../assets/img/image";
import { IHeroProps } from "../ts-types/componentTypes";
import { Container } from "../styles/Container.styled";

const Hero: React.FC<IHeroProps> = ({ darkMode }) => {
  return (
    <Container>
      <HeroStyle>
        <div className="title">
          <h1 className="hero_title">Hi, My name is ibrahim</h1>
          <p className="description">
            I am a Front-end Developer from Lagos, Nigeria.
          </p>
        </div>
        <HeroImgStyle darkMode={darkMode}>
          <div className="img_wrapper img-wrapper-animate">
            <Image src={images.avi} alt="avi" priority={true} layout="fill" />
          </div>
        </HeroImgStyle>
      </HeroStyle>
    </Container>
  );
};

export default Hero;
