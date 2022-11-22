import { useContext } from "react";
import { Context } from "../utils/Context";
import theme from "../utils/theme";
import { BlobStyle } from "../../components/others/BlobStyle.styled";

const Blob2: React.FC = () => {
  const { darkmode } = useContext(Context);
  return (
    <BlobStyle>
      <path
        fill={darkmode ? theme.theme2.aboutBgCol : theme.theme1.aboutBgCol}
        fillOpacity="1"
        d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,106.7C672,96,768,160,864,176C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </BlobStyle>
  );
};

export default Blob2;
