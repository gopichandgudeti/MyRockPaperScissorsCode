import styled from 'styled-components'

export const GameResultsContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const ChoicesContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`

export const ResultImageItem = styled.img`
    height:100px;
    width:100px;
    border-radius:50px;
    margin-right:10px;
`

export const ResultText = styled.p`
    font-family:"Roboto";
    font-size:15px;
    font-weight:bold;
    text-align:center;
`

export const PlayAgainButton = styled.button`
    height:20px;
    width:80px;
    font-family:"Bree Serif";
    font-size:15px;
    font-weight:bold;
    color:#223a5f;
    border-radius:10px;
    background-color:#ffffff;
    outline:none;
    border:none;
    cursor:pointer;
`

export const ResultImageContainer = styled.div`
    display:flex;
    flex-direction:column;
`
