import type { NextPage } from 'next'
import ListaPet from '../ui/components/Lista/ListaPet'
import Titulo from '../ui/components/titulo/Titulo'
import { Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material'
import { useIndex } from '../data/hooks/pages/useIndex'

const Home: NextPage = () => {
  const {
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
  } = useIndex();

  return (
    <div>
      <Titulo
        title=''
        subtitle={<span>Com um pequeno valor mensal, você <br />
          pode <strong>adotar um pet virtualmente</strong></span>}
      />
      <ListaPet
        pets={listPet}
        onSelect={(pet) => setSelectedPet(pet)}
      />

      <Dialog
        open={selectedPet !== null}
        fullWidth
        PaperProps={{ sx: { p: 5, borderRadius: '8px' } }}
        onClose={() => setSelectedPet(null)}
      >

        <Grid container spacing={2}>

          <Grid item xs={12}>
            <TextField
              type={'email'}
              label='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type={'number'}
              label='Quantia por mês'
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              fullWidth />
          </Grid>

        </Grid>

        <DialogActions sx={{ mt: 5 }}>

          <Button
            onClick={() => setSelectedPet(null)}
            variant='outlined'
            color='secondary'>
            Cancelar
          </Button>

          <Button
            onClick={() => adotar()}
            variant='contained'>
            Confirmar Adoção
          </Button>

        </DialogActions>

      </Dialog>

      <Snackbar
        open={mensagem.length > 0}
        message={mensagem}
        autoHideDuration={2500}
        onClose={() => setMensagem('')}
      />
    </div>
  )
}

export default Home
