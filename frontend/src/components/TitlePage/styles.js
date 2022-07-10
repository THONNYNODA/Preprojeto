import { styled } from "@mui/system";

export const Title = styled("h2")`
  position: relative;
  font-size: ${(props) => props.fontSize};
  font-weight: lighter;
  padding: 1.5rem 0;
  color: ${(props) => props.color};
`;

export const Divisorio = styled("div")`
  width: ${(props) => props.width || "0.2rem"};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minheight || "100%"};
  margin: ${(props) => props.margin};
  background: rgb(31, 99, 87);
  background: radial-gradient(
    circle,
    rgba(31, 99, 87, 1) 57%,
    rgba(249, 249, 249, 1) 100%
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
  max-width: 48rem;
  display: block;
  margin: 0 auto;
  text-align: center;
`;
