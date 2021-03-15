import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
`

export const Form = styled.div`
    width: 50%;
    margin-bottom: 80px;

`

export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .inative{
        opacity: 0.5;
    }

    button{
        border: none;
        background: none;

    }

    img{
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;

        &:hover{
            opacity: 0.5;
        }
    }
`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span{
        margin-bottom: 5px;
        color: #707070;
    }

    input{
        font-size: 16px;
        padding: 15px;
    }

    img{
        width: 25px;
        height: 25px;
        position: relative;
        left: 91%;
        bottom: 36px;

    }
`

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span{
        margin-bottom: 5px;
        color: #707070;
    }

    textarea{
        font-size: 16px;
        border: 1px solid;
    }

`

export const Options = styled.div`
    display: flex;
    justify-content: space-between;
    
    button{
        font-weight: bold;
        color: red;
        border: none;
        background: none;
        font-size: 18px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }

    div{
        display: flex;
        align-items: center;
        color: #EE6b26;
        font-weight: bold;
        font-size: 18px;
    }

`

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;

    button{
        width: 100%;
        background: #EE6B26;
        border: none;
        font-size: 20px;
        color: #FFF;
        font-weight: bold;
        padding: 20px;
        border-radius: 30px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }

    }
`

//border: none
//border-bottom: 1px solid;