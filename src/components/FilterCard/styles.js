import styled from 'styled-components';

export const Container = styled.div`
    width: 260px;
    height: 60px;
    background: ${props => props.actived ? '#EE6B26' : '#000000' }; //#20295F
    padding: 10px;
    cursor: pointer;

    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img{
        width: 30px;
        height: 35px;
    }

    span{
        color: #FFF;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
    }

    &:hover{
        background: #EE6B26;
    }


`