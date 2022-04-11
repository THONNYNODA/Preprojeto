import { styled } from "@mui/system";

export const ContainerNoticia = styled("div")`
  width: 100%;
  height: 350px;
  overflow: auto;
`;
export const CardNoticia = styled("div")`
  width: 100%;
  padding: 0.4rem;
  border-radius: 0.35rem;
  margin-bottom: 5px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  background-color: #fff;
  &:hover {
    background: #cccc;
    transition: 0.3s;
  }
`;
export const BoxNoticia = styled("div")`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`;
export const TextNoticia = styled("p")`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
`;
export const MiniTextNoticia = styled("p")`
  font-size: 12px;
  font-style: italic;
`;
