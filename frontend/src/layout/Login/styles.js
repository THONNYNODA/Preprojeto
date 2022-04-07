import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Background from "../../assets/fundo.svg";
import Logo from "../../assets/logo-footer.png";

export const ContainerLogin = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const BoxFilter = styled("div")`
  width: 100%;
  height: 100vh;
  position: absolute;
  //background-color:rgba(50, 191, 132,0.1);
  filter: blur(4px);
`;

export const ContainerImg = styled(Box)`
  width: ${(props) => props.width};
  height: 100%;
  position: relative;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.4) 5px 2px 6px;
  background-color: rgba(31, 99, 87, 0.8);
  @media (max-width: 980px) {
    display: none;
  } ;
`;

export const ContainerFilter = styled("div")`
  width: 100px;
  height: 100px;
  background-image: url(${Logo});
  background-size: 100% 100%;
  position: relative;
  margin: 0 auto;

  // filter: drop-shadow(2px 4px 8px rgba(15, 15, 15, 0.25));
`;

export const ContainerForm = styled("div")`
  width: ${(props) => props.width};
  position: relative;
  padding: 2rem;
  //background-color: #1f6357;
  @media (max-width: 980px) {
    width: 100%;
    background-color: rgba(31, 99, 87, 0.8);
  } ;
`;

export const BoxText = styled("div")`
  width: 100%;
  max-width: 350px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //z-index: 9;
  text-align: center;
`;

export const BoxForm = styled(BoxText)`
  position: relative;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 20px;
  filter: drop-shadow(2px 4px 8px rgba(15, 15, 15, 0.5));
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;

export const Title = styled("h2")`
  position: relative;
  padding: 0;
  color: ${(props) => props.color};
  text-shadow: #58585858 2px 3px;
`;
export const TitleLogin = styled("h2")`
  position: relative;
  padding: 15px 0;
  color: ${(props) => props.color};
  font-size: 32px;
  font-weight: lighter;
  text-shadow: #58585858 2px 3px;
  color: #1f6357;
  @media (max-width: 980px) {
    color: #ffffff;
  } ;
`;

export const Text = styled("p")`
  position: relative;
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  text-shadow: #58585858 2px 3px;
  @media (max-width: 980px) {
    color: #ffffff;
  } ;
`;
export const Buttons = styled("button")`
  width: 100%;
  font-size: 1.5rem;
  padding: 10px;
  color: #fff;
  background-color: #1f6357;
  border-radius: 0px 0px 15px 15px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #fff;
    color: #1f6357;
    border: 2px solid #1f6357;
    transition: 0.2s;
  }
`;

export const Divisorio = styled("div")`
  position: relative;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight || "100%"};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 40%,
    rgba(149, 163, 166, 1) 15%
  );
`;
