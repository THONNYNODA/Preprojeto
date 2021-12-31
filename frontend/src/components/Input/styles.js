import { styled } from "@mui/system";
import { Field } from "formik";



export const InputField = styled(Field)`
  position: relative;
  width: ${props => props.width || null};
  height: ${(props) => props.height || "2rem"};
  font-size: ${props => props.fontSize || "0.8rem"};
  border: none;
  padding-left: 10px;
  color:#343837;
  &:focus {
    outline: 2px solid green;
  };
 
`;

export const InputOption = styled("option")`
    color:#343837;   

    }
`;

export const TextLabel = styled("label")`
  color: ${(props) => props.color || "#1f6357"};
  font-size: ${props => props.fontSizeLabel || "0.9rem"};
`;
export const TextErrors = styled("span")`
  color: #FD5956;
  font-size: ${props => props.fontSizeLabel || "0.9rem"};
`;

export const BoxField = styled("div")`
  display: flex;  
  margin: 0 0 0.7em 0;
`;
export const ContainerField = styled("div")`
  display: block;
  width: 100%;
  margin: ${props => props.margin || "0 5px"};
  padding: ${props => props.padding};
 
`;

export const BoxLabel = styled("div")`
  display: flex;
`;

export const BoxIcon = styled("span")`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 2rem;
  background-color: #fff;
  color: #1f6357;
`;
