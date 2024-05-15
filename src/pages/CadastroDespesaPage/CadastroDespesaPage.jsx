/* eslint-disable */
import { Grid } from "@mui/material";
import CadastroDespesasForm from "../../components/molecules/CadastroDespesasForm";
import styles from "./CadastroDespesaPage.module.css";

function CadastroDespesaPage() {
 return (
  <Grid className={styles.containerDespesasPrincipal}>
   <CadastroDespesasForm />
  </Grid>
 );
}

export default CadastroDespesaPage;
