import SkillsStyle from "./SkillsStyle.styled";
import { Row } from "../../../others/Row.styled";
import { ISkillsProps } from "../../../../ts-types/componentTypes";
import { useContext } from "react";
import { Context } from "../../../../../src/assets/utils/Context";
import BlobReverse from "../../../../../src/assets/svgs/BlobReverse";
import skillsList from "../../../../../src/assets/utils/skillsList";

const Skills: React.FC<ISkillsProps> = () => {
  const { darkmode } = useContext(Context);

  return (
    <>
      <SkillsStyle darkMode={darkmode}>
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
      </SkillsStyle>
      <BlobReverse />
    </>
  );
};

export default Skills;
