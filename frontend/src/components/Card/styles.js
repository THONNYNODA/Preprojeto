import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";

export const BoxCard = styled("div")`
  min-width: 18.75rem;
  min-height: 18.75rem;
  border-radius: 0.7rem;
  margin-top: 20px;
  filter: drop-shadow(2px 4px 4px rgba(15, 15, 15, 0.25));
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  background: ${(props) => props.background || "#ffff"};
`;
export const BoxTitleCard = styled("div")`
  width: 100%;
  height: 100%;
  padding: 10px;
  text-align: center;
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
  background-color: #1f6357;
`;
export const ContainerCard = styled("div")`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 20px;
`;

export const TitleCard = styled("h2")`
  color: #fff;
`;
