import styled from "styled-components";


export const StyledLoginForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-grey-3);
    border-radius: 0.4rem;
    padding: 4.2rem 2.2rem 4.2rem 2.2rem;
    margin-top: 3rem;

    a {
        width: 100%;
    }

    .titleContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }    
    form {
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2.2rem;
    
    
        input {
            background-color: var(--color-grey-2);
            width: 33rem;
            height: 4.8rem;
            border-radius: 0.4rem;
            padding: 0rem 1.6rem 0rem 1.6rem;
            border: none;
            
            ::placeholder {
                font-weight: 400;
                font-size: 1.624rem;
                line-height: 2.639rem;
                color: var(--color-grey-1);
            }
        }
        select {
            background-color: var(--color-grey-2);
            width: 33rem;
            height: 4.8rem;
            border-radius: 0.4rem;
            padding: 0rem 1.6rem 0rem 1.6rem;
            font-weight: 400;
            font-size: 1.624rem;
            line-height: 2.639rem;
            color: var(--color-grey-1);
            border: none;
            
        }
    }
    @media screen and (max-width: 380px) {
        width: 90%;
        .title4 {
            width: 100%;
        }
    }
`