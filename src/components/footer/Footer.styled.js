import styled from "styled-components";

export const Container = styled.div`
    padding-left: 14%;
    padding-right: 14%;
    height: 200px;

    .grid {
        display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
    }

    p {
        margin: 0;
    }

    li {
        display: inline;
        margin-left: 25px
    }

    @media screen and (max-width: 1000px){
        padding: 2%;

        .text-md {
            font-size: 16px;
        }
    }
`