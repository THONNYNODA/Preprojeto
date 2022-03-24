import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";

export const BoxCard = styled(Paper)`
  min-width: 18.75rem;
  min-height: 18.75rem;
  background-color: #ffff;
  border-radius: 0.7rem;
  margin-top: 20px;
`;
export const BoxTitleCard = styled("div")`
  width: 100%;
  padding: 10px;
  text-align: center;
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
  background-color: #1f6357;
`;
export const ContainerCard = styled("div")`
  width: 100%;
  heigth: 100%;
  padding: 20px;
`;

export const TitleCard = styled("h2")`
  color: #fff;
`;
