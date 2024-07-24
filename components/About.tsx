/* eslint-disable react/no-unescaped-entities */
import { AboutStyle } from "../styles/AboutStyle.styled";
import { AboutImgStyle } from "../styles/AboutImgStyle.styled";
import Blob from "../assets/svgs/Blob";
import { Row } from "../styles/Row.styled";
import { Button } from "../styles/Button.styled";
import Link from "next/link";
import Image from "next/image";
import { IAboutProps } from "../ts-types/componentTypes";
import { useContext } from "react";
import { Context } from "../assets/utils/Context";
import { Container } from "../styles/Container.styled";

const cvLink = process.env.NEXT_PUBLIC_CV_LINK;

const About: React.FC<IAboutProps> = ({ about }) => {
  const { darkmode } = useContext(Context);

  return (
    <>
      <Blob />
      <AboutStyle darkMode={darkmode}>
        <Container>
          <Row>
            <h3 id="About">About Me</h3>
          </Row>

          <div className="wrapper">
            <AboutImgStyle>
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
              <a target="_blank" rel="noreferrer" href={cvLink}>
                <Button>View CV</Button>
              </a>
            </div>
          </div>
        </Container>
      </AboutStyle>
    </>
  );
};

export default About;
