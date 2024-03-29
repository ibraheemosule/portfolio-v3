import { useContext } from "react";
import { Context } from "../utils/Context";
import theme from "../../styles/theme";
import { BlobReverseStyle } from "../../styles/BlobReverseStyle.styled";

const BlobReverse: React.FC = () => {
  const { darkmode } = useContext(Context);
  return (
    <BlobReverseStyle>
      <path
        fill={darkmode ? theme.theme2.aboutBgCol : theme.theme1.aboutBgCol}
        fillOpacity="1"
        d="M0,128L48,160C96,192,192,256,288,234.7C384,213,480,107,576,96C672,85,768,171,864,192C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </BlobReverseStyle>
  );
};

export default BlobReverse;
