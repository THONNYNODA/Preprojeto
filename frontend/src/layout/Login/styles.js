import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Background from "../../assets/fundologin.jpg";

export const ContainerLogin = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
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
  @media (max-width: 980px) {
    display: none;
  } ;
`;

export const ContainerFilter = styled("div")`
  width: 100%;
  height: 100%;
  background-color: rgba(31, 99, 87, 0.8);
  position: absolute;
`;

export const ContainerForm = styled("div")`
  width: ${(props) => props.width};
  position: relative;
  padding: 2rem;
  @media (max-width: 980px) {
    width: 100%;
  } ;
`;

export const BoxText = styled("div")`
  width: 100%;
  max-width: 450px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //z-index: 9;
  text-align: center;
`;

export const BoxForm = styled(BoxText)`
  position: relative;
`;

export const Title = styled("h2")`
  position: relative;
  padding: 15px 0;
  color: ${(props) => props.color};
`;
export const TitleLogin = styled("h2")`
  position: relative;
  padding: 15px 0;
  color: ${(props) => props.color};
  font-size: 48px;
  color:#1f6357;
`;

export const Text = styled("p")`
  position: relative;
  color: ${(props) => props.color};
`;
export const Buttons = styled("button")`
  width: 100%;
  font-size: 1.5rem;
  padding: 10px;
  color: #fff;
  background-color: #1f6357;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #fff;
    color:#1f6357;
    border: 2px solid #1f6357;
    transition: 0.2s;
  }
`;
