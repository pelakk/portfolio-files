import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: auto;
    margin-bottom: 200px;

    .heading {
        padding-left: 10%;
        margin-bottom: 100px;
    }

    .heading2 {
        padding-left: 10%;
    }

    .listWrapper {
        margin-right: 14%;
        margin-left: 14%;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    li {
        margin: 0;
    }

`


export const Div = styled.div`
    margin-right: 14%;
    margin-left: 14%;
    margin-bottom: 30px;

    p {
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0 20px;
        margin-bottom: 5px;
        font-weight: 500;
        font-size: 20px
    }

    div {
        height: 20px;
        border-radius: 10px;
        background: #162950;
    }

    hr {
        height: 20px;
        border-radius: 10px;
        border: none;
        background: linear-gradient(270deg, rgba(19,173,199,1) 0%, rgba(105,120,209,1) 70%, rgba(148,93,214,1) 100%);
        float: left;
        margin: 0;
    }

`