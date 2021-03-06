import { styled } from "@mui/system";

export const BoxCard = styled("div")`
  width: 100%;
  height: 100%;
  min-width: 18.75rem;
  max-width: ${props => props.maxwidth};
  border-radius: 0.7rem;
  margin-top: ${props => props.margintop};
  //filter: drop-shadow(2px 4px 4px rgba(15, 15, 15, 0.25));
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  background: ${(props) => props.background || "rgba(255, 255, 255, 1)"};
`;
export const BoxTitleCard = styled("div")`
  width: 100%;
  padding: 1rem;
  position: relative;
  text-align: center;
  border-radius: 0.7rem;
  //background-color: rgba(31, 99, 87, 0.6);
`;
export const ContainerCard = styled("div")`
  width: 100%;
  height: 100%;
  z-index: 999;
  position: relative;
  padding: ${(props) => props.padding || "2rem"};`;

export const TitleCard = styled("h2")`
  color: ${props => props.colortitle || "var(--title-light)"};
  font-size: 1.6rem;
  text-decoration: underline;
`;
