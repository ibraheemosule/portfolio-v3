import s from "../styles/BgAnimationStyle.module.css";

const BgAnimation: React.FC = () => {
  return (
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
  );
};

export default BgAnimation;
