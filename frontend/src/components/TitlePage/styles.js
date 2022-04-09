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
  background: rgba(31, 99, 87, 1);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.8) 20%,
    rgba(31, 99, 87, 1) 100%
  );
`;

export const ContainerText = styled("div")`
  width: 100%;
  display: block;
  position: relative;
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
