import { css } from "@emotion/css";
import ChildrenType from "_commons/types/ChildrenType";

type LAndLongRType = {left:ChildrenType,right:ChildrenType};
const LAndLongR = ({left,right}:LAndLongRType)=>{
    return (
        <div className={"grid grid-cols-12 w-full h-full"}>
      <div className={"relative col-span-4 bg-white"}>
        {left}
      </div>
      <div
        className={
          "flex overflow-y-scroll flex-col col-span-8 items-start bg-white p-[50px] scrollbar-hide"
        }
      >
        {right}
      </div>
    </div>
    );
};

export default LAndLongR;

