import { Badge, Grid, Typography } from "@mui/material";
import styles from "./DashboardPage.module.css";
import { useContext } from "react";
import { UsuariosContext } from "../../context/UsuarioContext";
import PeopleIcon from "@mui/icons-material/People";

function DashboardPage() {
 const { totalOnline } = useContext(UsuariosContext);

 return (
  <Grid
   sx={{ flexDirection: "column" }}
   className={styles.containerPrincipalDashboard}>
   <Grid className={styles.info}>
    <Badge color="primary" badgeContent={totalOnline} max={999}>
     <PeopleIcon sx={{ color: "black", fontSize: 35 }} />
    </Badge>
   </Grid>
   <Typography className={styles.titulo}>Locais incríveis</Typography>
  </Grid>
 );
}

export default DashboardPage;
