import { css } from "@emotion/css";
import { Children } from "react";

type BigSubjectAboveImageType = {children:JSX.Element|string|undefined};
const BigSubjectAboveImage = ({children}:BigSubjectAboveImageType) => {
    return (
      <div
        className={[
          "absolute h-[calc(100%-(50px*2))] w-[calc(100%-(50px*2))] flex flex-col justify-end",
          "bottom-0 left-0 m-[50px] p-[25px] border-l border-b",
          "text-4xl text-white font-bold",
          css``,
        ].join(" ")}
      >
        {children}
      </div>
    );
  };
  
  export default BigSubjectAboveImage;
  