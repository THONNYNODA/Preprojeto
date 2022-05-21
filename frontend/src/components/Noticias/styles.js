import { styled } from "@mui/system";

export const ContainerNoticia = styled("div")`
  width: 100%;
  position: relative;
  height: 35rem;
  overflow: auto;
`;
export const CardNoticia = styled("div")`
  width: 100%;
  padding: 0.4rem;
  border-radius: 0.35rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border: 0.1rem solid rgba(0, 0, 0, 0.16);
  background-color: #fff;
  &:hover {
    background: #cccc;
    transition: 0.3s;
  }
`;
export const BoxNoticia = styled("div")`
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
`;
export const TextNoticia = styled("p")`
  width: 100%;
  font-size: 1.6rem;
  font-weight: bold;
`;
export const MiniTextNoticia = styled("p")`
  font-size: 1.2rem;
  font-style: italic;
`;
