import { styled } from "@mui/system";


export const ContainerDetalheVaga = styled("div")`
  height: 100%;
  min-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;

  div{
    padding: 1rem 1.5rem;
  }
`;

export const BoxDetalhe = styled("div")`
  width: 100%;
  height: 100%;
  padding: 0.5rem;  
  display: flex;
`;

export const TitleDetalhe = styled("h2")`
  font-weight: lighter;
`;
export const TextDetalhe = styled("p")`
font-size: 1.2rem;
  text-decoration:none;
  margin-right: 1rem;
`;
export const LinkDetalhe = styled("a")`
  color: black ;
  text-decoration:none;
  margin-right: 1rem;
  &:hover{
    color:var(--primary-color);
  }
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
