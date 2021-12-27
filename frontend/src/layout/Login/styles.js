import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Background from "../../assets/fundologin.jpg";

export const ContainerLogin = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 100vh;
`;

export const ContainerImg = styled(Box)`
  width: ${(props) => props.width};
  height: 100%;
  background-image: url(${Background});
  background-size: 100% 100%;
  position: relative;
  z-index: 2;

`;

export const ContainerFilter = styled("div")`
  width: 100%;
  height: 100%;
  background-color: rgba(48, 150, 96, 0.8);
  position: absolute;
`;

export const ContainerForm = styled("div")`
  width: ${(props) => props.width};
  background-size: 100% 100%;
  @media (max-width: 780px) {
    width: 100%;
  } ;
  `;

export const BoxText = styled("div")`
  width: 100%;
  max-width: 450px;
  position: relative;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  z-index: 999;
  text-align: center;
`;

export const Title = styled("h2")`
  position: relative;
  padding: 15px 0;
  color: ${props => props.color};
`;

export const Text = styled("p")`
  position: relative;
  color: ${props => props.color};
`;
export const Buttons = styled('button')`
  width: 100%;
  padding: 15px;
`
