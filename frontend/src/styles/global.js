import { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle `

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        ::-webkit-scrollbar{
            width:0px;
        };
        // ::-webkit-scrollbar-track{
        //     color:blue;
        // };
        ::-webkit-scrollbar-thumb{
            background:#1f6357;
        }
    };

    html,body{
        width: 100%;
        height:100%;
        position: relative;
        background-color: #ffffff;
        
        
    };



`



