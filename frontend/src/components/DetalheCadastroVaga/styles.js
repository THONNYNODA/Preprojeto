import { styled } from "@mui/system";

export const ContainerDetalheVaga = styled("div")`
  height: 100%;
  min-height: 100%;
  padding: 1rem 2.5rem;
  position: relative;
  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoxDetalhe = styled("div")`
  //width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;

  flex-direction: column;
  &:nth-of-type(1) {
    border-right: 0.2rem solid;
    border-image-slice: 1;
    border-width: 0.2rem;
    border-image-source: radial-gradient(
      circle,
      rgba(31, 99, 87, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;

export const TitleDetalhe = styled("h2")`
  font-weight: lighter;
`;
export const TextDetalhe = styled("p")`
  text-decoration: none;
  padding: 0.3rem;
`;
export const LinkDetalhe = styled("a")`
  color: black;
  text-decoration: none;
  margin-right: 1rem;
  &:hover {
    color: var(--primary-color);
  }
`;

export const BoxPerfil = styled("div")`
  width: 20rem;
  height: 30rem;
  position: relative;
  background-size: 100% 100%;
  background-image: url("${(props) => props.img}");
`;

export const Buttons = styled("button")`
  width: ${(props) => props.width || "100%"};
  font-size: 1.5rem;
  padding: 1rem 3rem;
  margin-top: 1rem;
  color: #fff;
  background-color: var(--primary-color);
  border: none;
  border-radius: 0 0 0.6rem 0.6rem;
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
