import { styled } from "@mui/system";
import Background from "../../assets/fundo.svg";

export const ContainerCadastro = styled("div")`
  width: 100%;
  height:  100%;
  position: absolute;
  padding: 0 2%;
  background-color: rgba(31, 99, 87, 0.9);
`;

export const ContainerBackground = styled("div")`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-image: url(${Background});
  background-size: cover;
  z-index: 1;
`;

export const BoxText = styled("div")`
  width: 100%;
  display: inline-block;
  position: relative;
  text-align: center;
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

export const BoxForm = styled("div")`
  width: 100%;
  max-width: 560px;
  display: flex;
  @media (max-width: 780px) {
    max-width: none;
  }
`;

export const Title = styled("h2")`
  position: relative;
  font-size: ${(props) => props.fontSize};
  font-weight: lighter;
  padding: 15px 0;
  color: ${(props) => props.color};
`;

export const Text = styled("p")`
  position: relative;
  color: ${(props) => props.color};
`;
export const Buttons = styled("button")`
  width: 50%;
  font-size: 1.5rem;
  padding: 10px;
  color: #fff;
  background-color: var(--primary-color);
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(31, 99, 87, 0.9);
    //color: blue;
  }
`;
