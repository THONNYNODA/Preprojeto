import { styled } from "@mui/system";
import Background from "../../../assets/fundologin.jpg";

export const ContainerCadastro = styled("div")`
  width: 100%;
  max-width: 48rem;
  text-align: center;
  border-radius: 1.5rem;
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export const ContainerFilter = styled("div")`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  border-radius: 1.5rem;
`;

export const ContainerForm = styled("div")`
  width: 100%;
  height: 100%;
  position: relative;
  max-width: 48rem;
  //display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 1.5rem;
  @media (max-width: 780px) {
    display: block;
  } ;
`;
export const BoxSingleInput = styled("div")`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  &:first-child {
    padding-top: 1.5rem;
  }
  @media (max-width: 780px) {
    display: block;
  } ;
`;

export const BoxText = styled("div")`
  width: 100%;
  padding: 1.5rem 0;
  display: inline-block;
  position: relative;
  text-align: center;
`;

export const Divisorio = styled("div")`
  position: relative;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minheight || "100%"};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background: rgba(149, 163, 166);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 40%,
    rgba(149, 163, 166, 1) 80%
  );
`;

export const BoxForm = styled("div")`
  width: 100%;
  display: block;
  padding: 1.5rem;
  max-height: 20rem;
  overflow-x: auto;
  filter: drop-shadow(2px 4px 4px rgba(15, 15, 15, 0.25));
  @media (max-width: 780px) {
    display: block;
    max-width: none;
  }
`;

export const SubBoxForm = styled("fieldset")`
  width: 100%;
  //padding: 1rem;
  border: 0.1rem solid #ffffff;
`;
export const SubText = styled("legend")`
  text-align: left;
  font-size: 1.2rem;
  color: #ffffff;
`;

export const Title = styled("h2")`
  position: relative;
  font-size: 1.6rem;
  font-size: ${(props) => props.fontSize};
  font-weight: lighter;
  color: ${(props) => props.color};
  text-shadow: #58585858 0.1rem 0.2rem;
`;

export const Text = styled("p")`
  position: relative;
  font-size: 1.2rem;
  color: ${(props) => props.color};
`;
export const Buttons = styled("button")`
  width: ${(props) => props.width || "100%"};
  font-size: 1.5rem;
  padding: 1rem 3rem;
  margin-top: 1rem;
  color: #fff;
  background-color: var(--primary-color);
  border: none;
  border-radius: 0 0 1.5rem 1.5rem;
  cursor: pointer;
  transition: 0.2s;
  @media (max-width: 780px) {
    width: 100%;
    margin: 0;
    padding: 1rem;
  }
  &:hover {
    background-color: #fff;
    color: var(--primary-color);
    transition: 0.2s;
  }
`;
