import s from "./BgAnimationStyle.module.css";

const BgAnimation: React.FC = () => {
  return (
    <div className={s.snowflakes} aria-hidden="true">
      {new Array(9).fill("❅").map((star, i) => (
        <div key={i} className={s.snowflake}>
          {star}
        </div>
      ))}
    </div>
  );
};

export default BgAnimation;
