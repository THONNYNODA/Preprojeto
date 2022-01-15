import { styled } from "@mui/system";

export const Title = styled("h2")`
  position: relative;
  font-size: ${(props) => props.fontSize};
  font-weight: lighter;
  padding: 15px 0;
  color: ${(props) => props.color};
`;

export const Divisorio = styled("div")`
  width: ${(props) => props.width || "2px"};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight || "100%"};
  margin: ${(props) => props.margin};
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 40%,
    rgba(149, 163, 166, 1) 100%
  );
`;

export const ContainerText = styled("div")`
  width: 100%;
  display: block;
  text-align: center;
`;
export const BoxText = styled("div")`
  width: 100%;
  max-width: 480px;
  display: block;
  margin: 0 auto;
  //position: relative;
  text-align: center;
`;