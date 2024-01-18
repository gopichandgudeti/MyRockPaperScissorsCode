import styled from 'styled-components'

export const AppBgContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    padding-top:20px;
    padding-bottom:20px;
    background-color:#223a5f;
    height:100vh;
`

export const ScoreContainer = styled.div`
    display:flex;
    width:80%;
    background-color:transparent;
    border:2px solid #ffffff;
    border-radius:10px;
    justify-content:space-between;
    padding-top:10px;
    padding-bottom:10px;
    padding-left:20px;
    padding-right:20px;
`

export const RockPaperScissorsUnorderedList = styled.ul`
    padding-left:0px;
`

export const ListItem = styled.li`
    list-style-type:none;
    padding-left:0px;
    color:#ffffff;
    font-family:'Roboto';
    font-size:20px;
    font-weight:300;
`

export const ScoreCard = styled.div`
    display:flex;
    flex-direction:column;
    height:100px;
    width:150px;
    background-color:#ffffff;
    align-items:center;
    justify-content:center;
    border-radius:10px;
`
export const ScoreText = styled.p`
    font-family:'Roboto';
    font-size:25px;
    color:#223a5f;
    font-weight:bold;
`

export const OptionsListContainer = styled.ul`
    padding-left:0px;
    display:flex;
    width:40%;
    background-color:transperent;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    align-self:center;
`
export const PopupContainer = styled.div`
    display:flex;
    align-self:flex-end;
`

export const PopupButton = styled.button`
    height:30px;
    width:80px;
    background-color:transperent;
    padding:0px;
`
export const RulesImageContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:90%;
    height:50%;
    padding:10px;
`

export const CloseLineContainer = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    background-color:transperent;
    align-self:flex-end;
`

export const CloseButton = styled.button`
    padding:0px;
    outline:none;
    background-color:transperent;
    cursor:pointer;
    border:0px;
    height:30px;
    width:30px;
    align-self:flex-end;
`

export const RulesImage = styled.img`
    width:cover;
    height:90%;
`

export const GameResultsContainer = styled.div`
    display:flex;
    background-color:transperent;
`