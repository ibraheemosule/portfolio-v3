import { IPaginationProps } from "../../../ts-types/componentTypes";
import { PaginationStyle } from "./PaginationStyle.styled";
import { useContext } from "react";
import { Context } from "../../../../src/assets/utils/Context";

const Pagination: React.FC<IPaginationProps> = props => {
  const { darkmode } = useContext(Context);

  const { numOfPages, number, setNumber } = props;

  const increment = () => {
    if (number < numOfPages) setNumber(number => number + 1);
  };

  const decrement = () => {
    if (number > 1) setNumber(number => number - 1);
  };

  return (
    <PaginationStyle darkMode={darkmode}>
      {numOfPages > 0 && (
        <>
          <button disabled={number > 1 ? false : true} onClick={decrement}>
            Previous
          </button>
          <div>
            <span>{number}</span> of {numOfPages}
          </div>
          <button
            disabled={number < numOfPages ? false : true}
            onClick={increment}
          >
            Next
          </button>
        </>
      )}
    </PaginationStyle>
  );
};

export default Pagination;
