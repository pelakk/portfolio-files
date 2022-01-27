import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: auto;
    margin-bottom: 200px;

    .heading {
        padding-left: 10%;
        margin-bottom: 100px;
    }

    .grid {
        display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        margin-left: 10%;
        margin-right: 10%;
    }

    .col {
        display: flex;
        justify-content: center;
    }

    .proj {
        width: 50%;
        -webkit-box-shadow: 0px 0px 12px 0px rgba(255, 255, 255, 1);
        -moz-box-shadow: 0px 0px 12px 0px rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 12px 0px rgba(255, 255, 255, 1);
        border-radius: 50px 0 50px 0;
        padding: 20px;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 50px;
    }

    .text-xl{
        font-weight: 500;
        text-align: center;
        margin-bottom: 0;
    }

    img {
        width: 90%;
        border-radius: 8px;
    }

    hr {
        width: 200px;
        border: none;
        border-radius: 2px;
        background: linear-gradient(270deg, rgba(19,173,199,1) 0%, rgba(105,120,209,1) 70%, rgba(148,93,214,1) 100%);
        height: 2px
    }

    @media screen and (max-width: 1350px){
        .proj {
            width: 60%;
        }
    }

    @media screen and (max-width: 1000px){
        .proj {
            width: 70%;
        }
    }

    @media screen and (max-width: 816px){
        .proj {
            width: 60%;
        }
    }

    @media screen and (max-width: 650px){
        .proj {
            width: 80%;
        }
    }

    @media screen and (max-width: 510px){
        .proj {
            width: 100%;
        }
        .grid {
            margin: 0;
        }
    }
`
