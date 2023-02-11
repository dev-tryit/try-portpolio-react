import { Row } from "_commons/widgets/Row";
import { Column } from "_commons/widgets/Column";
import logoSource from "_commons/assets/logo-dark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Divider } from "_commons/widgets/Divider";
import { useMemo } from "react";
import ImageUtil from "_commons/utils/ImageUtil";
import styled from "@emotion/styled";
import {  css, keyframes } from "@emotion/css";
import React from "react";

function PortpolioPage() {
  const imageList: string[] = useMemo(
    () => [
      ImageUtil.random(382, 382),
      ImageUtil.random(382, 382),

      ImageUtil.random(784, 382),

      ImageUtil.random(784, 382),

      ImageUtil.random(784, 784),

      ImageUtil.random(382, 382),
      ImageUtil.random(382, 382),

      ImageUtil.random(784, 784),

      ImageUtil.random(382, 382),
      ImageUtil.random(382, 382),

      ImageUtil.random(784, 382),
    ],
    []
  );

  const header = useMemo(() => {
    return (
      <>
        <Row
          fullWidth={true}
          justifyContent="space-between"
          padding="45px 65px"
        >
          <LogoImage height={"30px"} />
          <FontAwesomeIcon icon={faBars} size={"lg"} />
        </Row>
      </>
    );
  }, []);

  const body = useMemo(() => {
    return (
      <>
        <BodyText fullWidth={true} padding="31px 65px">
          you can have a beautiful metro portfolio just like me.
          {/*https://ukiyo.qodeinteractive.com/metro-portfolio/ 클론코딩*/}
        </BodyText>
        <BodyImageGrid fullWidth={true} padding="84px 65px">
          {imageList.map((image) => {
            const isSpan =
              image.endsWith("/784/382") || image.endsWith("/784/784");
            return (
              <img
                alt={image}
                src={image}
                style={{ gridColumnEnd: isSpan ? "span 2" : undefined }}
              />
            );
          })}
        </BodyImageGrid>
      </>
    );
  }, [imageList]);

  return (
    <Column fullWidth={true}>
      {header}
      <Divider indent="5px" endIndent="5px" />
      {body}
    </Column>
  );
}

export default PortpolioPage;

const LogoImage = ({ height }: { height?: string }) => {
  return (
    <img
      alt="logoImage"
      src={logoSource}
      className={css`
        height: ${height ? height : "0"};
      `}
    />
  );
};

const BodyText = styled(Row)`
  font-size: 3em;
  font-weight: 700;
  line-height: 1.7em;
  text-align: center;
  width: 780px;
`;

const imageGlitter = keyframes`
    0% {
      opacity: 1;
    }
    1% {
      opacity: 0.5;
    }
  `;

const BodyImageGrid = styled(Row)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 384px;
  grid-gap: 20px;
  img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: cover;
    &:hover {
      animation: ${imageGlitter} 100s linear 0s 1 normal; //name, duration, delay, iteration-count, time-function, direction
    }
  }
`;
