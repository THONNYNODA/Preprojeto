import { styled } from "@mui/system";

export const ContainerCadastro = styled("div")`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  border: 2px solid green;
`;

// export const ContainerFilter = styled("div")`
//   width: 100%;
//   height: 100%;
//   background-color: rgba(48, 150, 96, 0.8);
//   position: absolute;
// `;

export const ContainerForm = styled("div")`
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  
  align-items: center;
  padding: 1.5rem;
  border: 2px solid blue;
`;

export const BoxText = styled("div")`
  width: 100%;
  max-width: 450px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const BoxForm = styled("div")`
  width: 100%;
  border: 2px solid green;
  max-width: 480px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

`;

export const Title = styled("h2")`
  position: relative;
  padding: 15px 0;
  color: ${(props) => props.color};
`;

export const Text = styled("p")`
  position: relative;
  color: ${(props) => props.color};
`;
export const Buttons = styled("button")`
  width: 100%;
  font-size: 1.5rem;
  //padding: 10px;
  color: #fff;
  background-color: rgb(48, 150, 96);
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(48, 150, 96, 0.9);
    //color: blue;
  }
`;
