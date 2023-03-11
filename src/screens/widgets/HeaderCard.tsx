import { css } from "@emotion/css";

type HeaderCardType = { title: string; subtitle: string };
const HeaderCard = ({ title, subtitle }: HeaderCardType) => {
  return (
    <>
      <h6
        className={[
          css`
            position: relative;
            z-index: 1;
            margin-bottom: 8px;
            display: inline-block;
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 3px;
            padding-bottom: 3px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 3px;
            --tw-text-opacity: 1;
            color: rgb(0 0 0 / var(--tw-text-opacity));

            ::after {
              content: "";
              position: absolute;
              top: 0px;
              bottom: 0px;
              left: 0px;
              right: 0px;
              z-index: -1;
              --tw-rotate: 0;
              --tw-skew-x: -20deg;
              --tw-skew-y: 0;
              --tw-scale-x: 1;
              --tw-scale-y: 1;
              --tw-translate-x: 0;
              --tw-translate-y: 0;
              transform: translate(var(--tw-translate-x), var(--tw-translate-y))
                rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
                skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
                scaleY(var(--tw-scale-y));
              --tw-bg-opacity: 1;
              background-color: rgb(238 148 147 / var(--tw-bg-opacity));
            }
          `,
          "font-bold",
        ].join(" ")}
      >
        {subtitle}
      </h6>
      <h2
        className={css`
          position: relative;
          z-index: 1;
          margin: 0px;
          display: inline-block;
          border-bottom-width: 1px;
          --tw-border-opacity: 1;
          border-color: rgb(229 231 235 / var(--tw-border-opacity));
          padding-bottom: 10px;
          font-size: 45px;
          font-weight: 700;
          text-transform: uppercase;
          line-height: 1.1;
          --tw-text-opacity: 1;
          color: rgb(0 0 0 / var(--tw-text-opacity));
          margin-bottom: 40px;

          ::after {
            content: var(--tw-content);
            position: absolute;
            bottom: -4px;
            left: 0px;
            right: 0px;
            z-index: -1;
            height: 8px;
            width: 50px;
            --tw-skew-x: -36deg;
            transform: translate(var(--tw-translate-x), var(--tw-translate-y))
              rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
              skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
              scaleY(var(--tw-scale-y));
            --tw-bg-opacity: 1;
            background-color: rgb(238 148 147 / var(--tw-bg-opacity));
          }
        `}
      >
        {title}
      </h2>
    </>
  );
};

export default HeaderCard;
