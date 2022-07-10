import { styled } from "@mui/system";

export const BoxCard = styled("div")`
  min-width: 400px;
  height: 100%;
  max-width: 400px;
  border-radius: 0.7rem;
  position: relative;
  filter: drop-shadow(2px 4px 4px rgba(15, 15, 15, 0.25));
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  background: rgba(250, 250, 250, 0.6);

  header {
    width: 100%;
    padding: 1rem;
    position: relative;
    text-align: center;
    border-radius: 0.7rem 0.7rem 0 0;
    background-color: rgba(31, 99, 87, 0.6);

    strong {
      color: #fff;
      font-size: 1.6rem;
      text-decoration: underline;
    }
  }

  main {
    width: 100%;
    height: 100%;
    z-index: 999;
    position: relative;
    padding: 2rem;

    p {
      font-size: 1.2rem;
      color: var(--text-gray);
      line-height: 2rem;

      span {
        display: block;
        position: relative;
        left: 15px;
      }
    }

    button {
      display: inline-block;
      padding: 0 1rem;
      position: absolute;
      bottom: 15px;
      right: 15px;
      border: none;
      background: none;
      font-size: 1.2rem;
      color: var(--primary-color);
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.7);
        cursor: pointer;
      }
    }
  }
`;
