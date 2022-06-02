import { styled } from "@mui/material";


export const ListaStyled = styled('ul')`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing(2)};
`

export const ItemListaStyled = styled('li')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing(5)};
    margin-bottom: ${({ theme }) => theme.spacing(5)};
    
    ${({ theme }) => theme.breakpoints.down('md')} {
        grid-template-columns: 1fr;
        gap: ${({ theme }) => theme.spacing(2)};
        margin-bottom: ${({ theme }) => theme.spacing(10)};
    }
`

export const FotoStyled = styled('img')`
    width: 100%;

`

export const InformacoesStyled = styled('div')`
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing(2)};
`

export const NomePetStyled = styled('h2')`
    margin: 0;
    
`

export const DescricaoPetStyled = styled('p')`
    margin: 0;
    word-break: break-all;
`