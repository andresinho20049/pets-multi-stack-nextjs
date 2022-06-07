import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";

interface IApiErrorResposnse {
    errors: string[],
    message: string
}

export function useIndex() {
    const [listPet, setListPet] = useState<Pet[]>([]);
    const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
    const [email, setEmail] = useState('');
    const [valor, setValor] = useState('');
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        ApiService.get('/pets').then((res) => {
            setListPet(res.data);
        })
    }, [])

    function adotar() {
        if (selectedPet != null) {

            if (validData()) {
                ApiService.post('/adocoes', {
                    pet_id: selectedPet.id,
                    email,
                    valor
                }).then(() => {
                    setSelectedPet(null);
                    setMensagem('Pet adotado com sucesso!');
                    clearForm();
                }).catch((error: Error | AxiosError) => {
                    if (error && axios.isAxiosError(error)){
                        const err = error.response?.data as IApiErrorResposnse;
                        setMensagem(err.message);
                    }
                    console.log(error);
                })

            } else {
                setMensagem('Favor Preencher todos os campos corretamente!');
            }
        }
    }

    function validData() {
        return email.length > 0 && valor.length > 0;
    }

    function clearForm() {
        setEmail('');
        setValor('');
    }

    return {
        listPet,
        selectedPet,
        setSelectedPet,
        email,
        setEmail,
        valor,
        setValor,
        mensagem,
        setMensagem,
        adotar
    }
}