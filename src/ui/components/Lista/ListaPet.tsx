import { Button } from "@mui/material";
import { Pet } from "../../../data/@types/Pet";
import { TextService } from "../../../data/services/TextService";
import { DescricaoPetStyled, FotoStyled, InformacoesStyled, ItemListaStyled, ListaStyled, NomePetStyled } from "./ListaPet.styled";

interface IListaPetProps {
    pets: Pet[];
    onSelect: (pet: Pet) => void
}

export default function ListaPet({pets, onSelect}: IListaPetProps) {
    const maxSize = 200;

    return (
        <ListaStyled>
            {pets.map(pet => (
                <ItemListaStyled key={pet.id}>
                    <FotoStyled src={pet.foto} alt={pet.nome} />
                    <InformacoesStyled>
                        <NomePetStyled>{pet.nome}</NomePetStyled>
                        <DescricaoPetStyled>
                            {TextService.limitarTexto(pet.historia, maxSize)}
                        </DescricaoPetStyled>
                        <Button
                            fullWidth
                            onClick={() => onSelect(pet)} variant={'contained'}>
                            Adotar {pet.nome}
                        </Button>
                    </InformacoesStyled>
                </ItemListaStyled>
            ))}
        </ListaStyled>
    )
}