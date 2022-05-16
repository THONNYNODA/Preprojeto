import { styled } from "@mui/system";
import Background from "../../../assets/fundologin.jpg";

export const ContainerCadastro = styled("div")`
  width: 100%;
  max-width: 480px;
  text-align: center;
  //height: 100%;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  
`;

export const ContainerFilter = styled("div")`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  border-radius: 15px;
`;

export const ContainerForm = styled("div")`
  width: 100%;
  height: 100%;
  position: relative;
  max-width: 480px;
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
    padding-top: 15px;
  }
  @media (max-width: 780px) {
    display: block;
  } ;
`;

export const BoxText = styled("div")`
  width: 100%;
  padding: 15px 0;
  display: inline-block;
  position: relative;
  text-align: center;
`;

export const Divisorio = styled("div")`
  position: relative;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight || "100%"};
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
  padding: 15px;
  max-height: 360px;
  overflow-x: auto;
  filter: drop-shadow(2px 4px 4px rgba(15, 15, 15, 0.25));
  @media (max-width: 780px) {
    display: block;
    max-width: none;
  }
`;

export const SubBoxForm = styled("fieldset")`
  width: 100%;
  padding: 5px;
  border: 2px solid var(--primary-color);
`;
export const SubText = styled("legend")`
  text-align: left;
  font-size: larger;
  color: var(--primary-color);
`;

export const Title = styled("h2")`
  position: relative;
  font-size: ${(props) => props.fontSize};
  font-weight: lighter;
  color: ${(props) => props.color};
  text-shadow: #58585858 1px 2px;
`;

export const Text = styled("p")`
  position: relative;
  color: ${(props) => props.color};
  padding: 10px;
`;
export const Buttons = styled("button")`
  width: ${(props) => props.width || "100%"};
  font-size: 1.5rem;
  //margin: 30px;
  padding: 10px 30px;
  margin-top: 10px;
  color: #fff;
  background-color: var(--primary-color);
  border: none;
  border-radius: 0px 0px 15px 15px;
  cursor: pointer;
  transition: 0.2s;
  @media (max-width: 780px) {
    width: 100%;
    margin: 0;
    padding: 10px;
  }
  &:hover {
    background-color: #fff;
    color: var(--primary-color);
    transition: 0.2s;
  }
`;
