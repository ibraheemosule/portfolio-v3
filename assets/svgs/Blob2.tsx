import { useContext } from "react";
import { Context } from "../Context";
import theme from "../../styles/theme";

const Blob2: React.FC = () => {
  const { darkmode } = useContext(Context);
  return (
    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    //   <path
    //     fill={darkmode ? theme.theme2.aboutBgCol : theme.theme1.aboutBgCol}
    //     fillOpacity="1"
    //     d="M0,96L48,112C96,128,192,160,288,192C384,224,480,256,576,256C672,256,768,224,864,192C960,160,1056,128,1152,144C1248,160,1344,224,1392,256L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    //   ></path>
    // </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill={darkmode ? theme.theme2.aboutBgCol : theme.theme1.aboutBgCol}
        fillOpacity="1"
        d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,106.7C672,96,768,160,864,176C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
};

export default Blob2;
