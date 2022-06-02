import { TituloStyled, Subtitulo } from "./Titulo.styled";

interface ITituloProps {
    title: string
    subtitle?: string | JSX.Element
}

export default function Titulo(props: ITituloProps) {
    return (
        <>
            <TituloStyled>{props.title}</TituloStyled>
            <Subtitulo>{props.subtitle}</Subtitulo>
        </>
    )
}