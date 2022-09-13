import { BgAnimationStyle } from "../styles/BgAnimationStyle.styled";
import s from "../styles/BgAnimationStyle.module.css";

const BgAnimation: React.FC = () => {
  return (
    // <BgAnimationStyle>

    <div className={s.snowflakes} aria-hidden="true">
      <div className={s.snowflake}>❅</div>
      <div className={s.snowflake}>❅</div>
      <div className={s.snowflake}>❆</div>
      <div className={s.snowflake}>❄</div>
      <div className={s.snowflake}>❅</div>
      <div className={s.snowflake}>❆</div>
      <div className={s.snowflake}>❄</div>
      <div className={s.snowflake}>❅</div>
      <div className={s.snowflake}>❆</div>
      <div className={s.snowflake}>❄</div>
    </div>
    // </BgAnimationStyle>
  );
};

export default BgAnimation;
