import { styled } from "@mui/system";

export const ContainerCadastro = styled("div")`
  position: relative;
  width: 100%;
  
  //padding: 2.5rem;
  border: 0.2rem solid;
`;

export const ContainerFilter = styled("div")`
  width: 100%;
  
  height: 40rem;
  background-color: #cccc;
  position: relative;
  filter: blur(0.1rem);
`;

export const ContainerForm = styled("div")`
  width: 100%;
  height: 100%;
  position: relative;
  max-width: 48rem;
  justify-content: space-between;
  align-items: stretch;
  border: 0.2rem solid;
  margin-top: 1.5rem;
  @media (max-width: 780px) {
    display: block;
  } ;
`;
export const BoxSingleInput = styled("div")`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  @media (max-width: 780px) {
    display: block;
  } ;
`;

export const BoxText = styled("div")`
  width: 100%;
  display: inline-block;
  position: relative;
  text-align: center;
`;

export const Divisorio = styled("div")`
  position: relative;
  width: ${(props) => props.width || "0.2rem"};
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
  display: flex;
  @media (max-width: 780px) {
    display: block;
    max-width: none;
  }
`;

export const Title = styled("h2")`
  position: relative;
  font-size: ${(props) => props.fontSize};
  font-weight: lighter;
  padding: 1.5rem 0;
  color: ${(props) => props.color};
`;

export const Text = styled("p")`
  position: relative;
  color: ${(props) => props.color};
`;
export const Buttons = styled("button")`
  width: ${(props) => props.width || "100%"};
  font-size: 1.5rem;
  margin-top: 3rem;
  padding: 1rem;
  color: #fff;
  background-color: var(--primary-color);
  border: none;
  cursor: pointer;
  transition: 0.2s;
  @media (max-width: 780px) {
    width: 100%;
  }
  &:hover {
    background-color: #fff;
    color: var(--primary-color);
    border: 0.2rem solid var(--primary-color);
    transition: 0.2s;
  }
`;
