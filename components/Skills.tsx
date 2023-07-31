import SkillsStyle from "../styles/SkillsStyle.styled";
import { Row } from "../styles/Row.styled";
import { ISkillsProps } from "../ts-types/componentTypes";
import { useContext } from "react";
import { Context } from "../assets/utils/Context";
import BlobReverse from "../assets/svgs/BlobReverse";
import skillsList from "../assets/utils/skillsList";
import { Container } from "../styles/Container.styled";

const Skills: React.FC<ISkillsProps> = () => {
  const { darkmode } = useContext(Context);

  return (
    <>
      <SkillsStyle darkMode={darkmode}>
        <Container>
          <section>
            <h3 id="Skills">My Skills</h3>

            <Row>
              <div className="skills">
                {skillsList.map(({ Icon, name }) => (
                  <div className="icon" key={name}>
                    <Icon />
                    <h5>{name}</h5>
                  </div>
                ))}
              </div>
            </Row>
          </section>
        </Container>
      </SkillsStyle>
      <BlobReverse />
    </>
  );
};

export default Skills;
