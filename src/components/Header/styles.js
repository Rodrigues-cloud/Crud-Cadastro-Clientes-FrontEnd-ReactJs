import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #000000;  //#20295F
    border-bottom: 5px solid #EE6B26;

    display: flex;

`

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    align-items: center;
    padding-left: 5px;

    img{
        width: 200px;
        height: 70px;
    }

`

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a, button{
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        background: none;
        margin: 0 10px;

        &:hover{
            color: #EE6B26;
        }
    }

    #notification {
        img{
            width: 25px;
            height: 30px;
        }

        span {
            background: #FFF;
            color: #EE6B26;
            padding: 3px 7px;
            border-radius: 50%;
            position: relative;
            top: -20px;
            right: 10px;
        }

        &:hover{
            opacity: 50%;
        }
    }

    .dividir::after{
        content: "|";
        margin: 0 10px;
        color: #FFF;
    }

    button{
        font-size: 16px;
        background: none;
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        margin:0 10px;
        cursor: pointer;
    }


`
