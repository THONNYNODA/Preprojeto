import { styled } from "@mui/system";

export const ContainerCadastros = styled("section")`
  width: 100%;
  height: 100%;
  
  position: relative;
  display: flex;

  main {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;

    .containA {
      flex: 1;
      position: relative;
      margin-inline: 2rem;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      background-color: var(--primary-color);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      img {
        width: 150px;
        height: 150px;
      }
      ul {
        margin-top: 2rem;
        list-style-type: none;

        li {
          font-size: large;
          line-height: 2.5rem;
          color: var(--text);
        }
      }
    }

    .containB {
      flex: 3;
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 1rem;

      .title {
        font-weight: 400;
        font-size: 2.5rem;
        padding-block: 2rem;
        color: var(--primary-color);
      }
      .subtitle {
        font-weight: lighter;
        color: var(--title-light);
        font-size: 1.6rem;
      }

      button {
        border: none;
        background-color: transparent;
        font-size: 1.2rem;
        padding: 0.5rem;
        transition: 0.2s;
        cursor: pointer;

        &:hover {
          background-color: rgba(255, 255, 255, 0.3);
          filter: brightness(0.8);
          transition: 0.2s;
        }
      }

      .perfil {
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          flex: 1;
          padding-left: 1.5rem;
          font-size: 1.2rem;
          color: var(--text);
        }
      }

      .contain {
        width: 100%;
        padding: 1.5rem;
        position: relative;
        gap: 2px;

        .boxIcon {
          display: flex;
          justify-content: flex-end;
        }

        p {
          font-size: 1.2rem;
          padding-left: 1.5rem;
          line-height: 2rem;
          color: var(--text);
        }
      }
    }
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Divisorio = styled("div")`
  width: 100%;
  height: 2px;
  background: rgb(31, 99, 87);
  background: radial-gradient(
    circle,
    rgba(31, 99, 87, 1) 57%,
    rgba(249, 249, 249, 1) 100%
  );
`;
