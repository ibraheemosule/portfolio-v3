import { WorkflowStyle } from "../styles/WorkflowStyle.styled";
import CommunicationIcon from "../assets/svgs/CommunicationIcon";
import ProblemSolvingIcon from "../assets/svgs/ProblemSolvingIcon";
import CriticalThinkingIcon from "../assets/svgs/CriticalThinkingIcon";
import EmpathyIcon from "../assets/svgs/EmpathyIcon";
import { useContext } from "react";
import { Context } from "../assets/utils/Context";

const Workflow = () => {
  const { darkmode } = useContext(Context);

  return (
    <WorkflowStyle darkMode={darkmode}>
      <h3>Work flow</h3>
      <div>
        <div className="wrapper">
          <div className="first-card">
            <div>
              <ProblemSolvingIcon />
            </div>
            <h4>Problem Solving</h4>
            <p>
              Identify the problem my application is meant to solve and come up
              with a suitable solution to solve this problem.
            </p>
          </div>
          <div className="second-card">
            <div>
              <CriticalThinkingIcon />
            </div>
            <h4>Critical Thinking</h4>
            <p>
              Draft a step by step roadmap to bringing my theoretical solution
              to life
            </p>
          </div>
          <div className="third-card">
            <div>
              <CommunicationIcon />
            </div>
            <h4>Communication</h4>
            <p>
              When I hit a roadblock while coding, I often google the solution
              or escalate to my team members.
            </p>
          </div>
          <div className="fourth-card">
            <div>
              <EmpathyIcon />
            </div>
            <h4>Empathy</h4>
            <p>
              Think through my designs and implementations from the perspectives
              of end users.
            </p>
          </div>
        </div>
      </div>
    </WorkflowStyle>
  );
};

export default Workflow;
