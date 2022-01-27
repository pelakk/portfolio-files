import styled from "styled-components";
import img from '../../assets/images/drawing.png'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: right bottom; 
    padding: 5%;
    padding-left: 10%;
    margin-bottom: 100px;

    p {
        max-width: 980px;
        margin: 0;
    }

    .heading {
        margin-bottom: 2%;
    }

    .desc {
        padding-left: 2%;
    }

    .buttonContainer {
        margin-top: 2%;
        padding-left: 4%;
    }

    @media screen and (max-width: 550px) {
        margin-bottom: 250px;
    }
`