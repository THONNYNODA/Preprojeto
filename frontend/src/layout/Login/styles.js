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
  filter: blur(0.4rem);
`;

export const ContainerImg = styled(Box)`
  width: ${(props) => props.width};
  height: 100%;
  position: relative;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.4) 0.5rem 0.2rem 0.6rem;
  background-color: rgba(31, 99, 87, 0.8);
  @media (max-width: 960px) {
    display: none;
  } ;
`;

export const ContainerFilter = styled("div")`
  width: 10rem;
  height: 10rem;
  background-image: url(${Logo});
  background-size: 100% 100%;
  position: relative;
  margin: 0 auto;
`;

export const ContainerForm = styled("div")`
  width: ${(props) => props.width};
  position: relative;
  padding: 2.4rem;
  @media (max-width: 960px) {
    width: 100%;
    background-color: rgba(31, 99, 87, 0.8);
  } ;
`;

export const BoxText = styled("div")`
  width: 100%;
  max-width: 25rem;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const BoxForm = styled(BoxText)`
  position: relative;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;

export const Title = styled("h2")`
  position: relative;
  padding: 0;
  font-size: 1.4rem;
  color: ${(props) => props.color};
  text-shadow: #58585858 0.2rem 0.3rem;
`;
export const TitleLogin = styled("h2")`
  position: relative;
  padding: 1.5rem 0;
  color: ${(props) => props.color};
  font-size: 2.4rem;
  font-weight: lighter;
  color: var(--primary-color);
  @media (max-width: 960px) {
    color: #ffffff;
  } ;
`;

export const Text = styled("p")`
  position: relative;
  font-size: 1rem;
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  @media (max-width: 960px) {
    color: #ffffff;
  } ;
`;
export const Buttons = styled("button")`
  width: 100%;
  font-size: 1.5rem;
  padding: 1rem;
  color: #fff;
  background-color: var(--primary-color);
  border-radius: 0 0 1.5rem 1.5rem;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #fff;
    color: var(--primary-color);
    border: 0.2rem solid var(--primary-color);
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
  background: rgb(31, 99, 87);
  background: radial-gradient(
    circle,
    rgba(31, 99, 87, 1) 57%,
    rgba(249, 249, 249, 1) 100%
  );
`;
