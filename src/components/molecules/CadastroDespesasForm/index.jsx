import {
 Select,
 TextField,
 MenuItem,
 Grid,
 Button,
 FormControl
} from "@mui/material";
import { useForm } from "react-hook-form";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DespesaContext } from "../../../context/DespesaContext";
import CurrencyInput from "../../atoms/CurrencyInput";

function CadastroUsuarioForm() {
 const {
  register,
  handleSubmit,
  formState: { errors }
 } = useForm();

 const { cadastrarDespesa, despesas } = useContext(DespesaContext);
 const navigate = useNavigate();

 function sendCadastro(formValue) {
  if (despesas.find((despesa) => despesa.descricao === formValue.descricao)) {
   alert("Despesa já cadastrado");

   return;
  }

  cadastrarDespesa({ ...formValue });
  navigate("/despesas");
 }

 return (
  <>
   <Grid className="containerCadastroDespesa">
    <Grid className="cadastroFormDespesa" sx={{ flexDirection: "column" }}>
     <form>
      <Grid className="logoCadastroDespesa">
       <img src="/assets/Logo-azul.png" alt="Logo Wallet" />
      </Grid>
      <Grid className="gridDescricao" sx={{ flexDirection: "column" }}>
       <TextField
        type="text"
        variant="outlined"
        placeholder="Descrição"
        error={!!errors.descricao}
        helperText={errors.descricao?.message}
        sx={{ height: "1rem" }}
        {...register("descricao", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 50,
          message: "Este campo aceita no máximo 50 caracteres."
         }
        })}
       />
      </Grid>
      <Grid className="dadosComplementares">
       <FormControl fullWidth>
        <Select
         defaultValue="Selecione"
         {...register("parcela", {
          required: "Este campo é obrigatório."
         })}>
         <MenuItem value="Selecione" disabled>
          <em>Quantidade Parcelas</em>
         </MenuItem>
         <MenuItem value="0">0</MenuItem>
         <MenuItem value="1">1</MenuItem>
         <MenuItem value="2">2</MenuItem>
         <MenuItem value="3">3</MenuItem>
         <MenuItem value="4">4</MenuItem>
         <MenuItem value="5">5</MenuItem>
         <MenuItem value="6">6</MenuItem>
         <MenuItem value="7">7</MenuItem>
         <MenuItem value="8">8</MenuItem>
         <MenuItem value="9">9</MenuItem>
         <MenuItem value="10">10</MenuItem>
         <MenuItem value="11">11</MenuItem>
         <MenuItem value="12">12</MenuItem>
        </Select>
       </FormControl>

       <CurrencyInput
        placeholder="Valor"
        error={!!errors.valor}
        helperText={errors.valor?.message}
        {...register("valor", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 10,
          message: "Este campo aceita no máximo 10 caracteres."
         }
        })}
       />

       <TextField
        placeholder="Vencimento"
        type="date"
        variant="outlined"
        error={!!errors.vencimento}
        helperText={errors.vencimento?.message}
        {...register("vencimento", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 10,
          message: "Este campo aceita no máximo 10 caracteres."
         }
        })}
       />
      </Grid>
     </form>
     <Grid
      className="containerButtonCadastroDespesa"
      sx={{ flexDirection: "column" }}>
      <Button
       onClick={handleSubmit(sendCadastro)}
       className="buttonCadastrar"
       variant="contained"
       size="medium">
       Cadastrar
      </Button>
     </Grid>
    </Grid>
   </Grid>
  </>
 );
}

export default CadastroUsuarioForm;
