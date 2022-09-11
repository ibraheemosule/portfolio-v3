/* eslint-disable react/no-unescaped-entities */
import { AboutStyle } from "../styles/AboutStyle.styled";
import { HeroStyle } from "../styles/Hero.styled";
import { AboutImgStyle } from "../styles/AboutImgStyle.styled";
import Blob from "../assets/svgs/Blob2";
import { Row } from "../styles/Row.styled";
import { Button } from "../styles/Button.styled";
import Link from "next/link";
import Image from "next/image";
import { IAboutProps } from "../ts-types/componentTypes";
import { useContext } from "react";
import { Context } from "../assets/Context";

const cvLink =
  "https://drive.google.com/file/d/1ZAw-5fqQTuKxcDGMWDk9pgYzPD56th-1/view?usp=sharing";

const About: React.FC<IAboutProps> = ({ about }) => {
  const { darkmode } = useContext(Context);

  return (
    <AboutStyle darkMode={darkmode}>
      <Blob />
      <Row>
        <h3>About Me</h3>
      </Row>
      <div>
        <HeroStyle>
          <AboutImgStyle className="about">
            <div>
              <Image
                src={about[0].fields.photo}
                alt="ibrahim picture"
                layout="fill"
                priority={true}
              />
            </div>
          </AboutImgStyle>
          <div className="title">
            <p>{about[0].fields.about}</p>
            <Link href={cvLink}>
              <a>
                <Button>View CV</Button>
              </a>
            </Link>
          </div>
        </HeroStyle>
      </div>
    </AboutStyle>
  );
};

export default About;
