import s from "../styles/BgAnimationStyle.module.css";

const BgAnimation: React.FC = () => {
  return (
    <div className={s.snowflakes} aria-hidden="true">
      {new Array(9).fill("").map((_, i) => (
        <div key={i} className={s.snowflake}>
          ❅
        </div>
      ))}
    </div>
  );
};

export default BgAnimation;
