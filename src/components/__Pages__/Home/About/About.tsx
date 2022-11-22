/* eslint-disable react/no-unescaped-entities */
import { AboutStyle } from "./AboutStyle.styled";
import { AboutImgStyle } from "./AboutImgStyle.styled";
import Blob from "../../../../../src/assets/svgs/Blob";
import { Row } from "../../../others/Row.styled";
import { Button } from "../../../others/Button.styled";
import Link from "next/link";
import Image from "next/image";
import { IAboutProps } from "../../../../ts-types/componentTypes";
import { useContext } from "react";
import { Context } from "../../../../../src/assets/utils/Context";

const cvLink =
  "https://drive.google.com/file/d/1ZAw-5fqQTuKxcDGMWDk9pgYzPD56th-1/view?usp=sharing";

const About: React.FC<IAboutProps> = ({ about }) => {
  const { darkmode } = useContext(Context);

  return (
    <>
      <Blob />
      <AboutStyle darkMode={darkmode}>
        <Row className="about-title">
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
            <Link href={cvLink}>
              <a>
                <Button>View CV</Button>
              </a>
            </Link>
          </div>
        </div>
      </AboutStyle>
    </>
  );
};

export default About;
