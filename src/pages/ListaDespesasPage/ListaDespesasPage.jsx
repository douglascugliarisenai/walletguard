import { Grid, Typography } from "@mui/material";
import TabelaContas from "../../components/molecules/TabelaContas";
import styles from "./ListaDespesasPage.module.css";
function ListaContasPage() {
 return (
  <Grid sx={{ flexDirection: "column" }} className={styles.containerPrincipal}>
   <Typography className={styles.titulo}>Contas Fixas</Typography>
   <TabelaContas />
  </Grid>
 );
}

export default ListaContasPage;
