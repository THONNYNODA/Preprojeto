import { styled } from "@mui/system";

export const ContainerLogin = styled("main")`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: var(--primary-color);
  width: 100%;
  height: 100vh;
  img {
    width: 400px;
    height: 400px;
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0.1;
    filter: brightness(0.6);
  }

  .boxForm {
    position: relative;
    width: 400px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    img {
      margin-top: 10px;
      position: relative;
      width: 100px;
      height: 100px;
      opacity: 1;
    }

    h2 {
      position: relative;
      color: var(--primary-color);
      font-size: 1.8rem;
      font-weight: lighter;
    }
    p {
      font-size: 1rem;
      padding-bottom: 1rem;
      color: var(--text-gray);
    }
    .boxLinks {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      padding-inline: 1rem;

      a {
        text-decoration: none;
        color: #2c3333;
        font-size: 1rem;
        &:hover {
          color: var(--primary-color);
          text-decoration:underline;
        }
      }
    }
  }
`;

export const Buttons = styled("button")`
  width: 100%;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  padding: 1rem;
  color: #fff;
  background-color: var(--primary-color);
  border-radius: 0 0 1.5rem 1.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 1);
    color: var(--primary-color);
    transition: all 0.2s;
  }
`;


