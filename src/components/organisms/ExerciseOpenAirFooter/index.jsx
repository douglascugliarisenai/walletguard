import "./style.css";
import "../../../../src/App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid } from "@mui/material";

function TrilhasFooter() {
 return (
  <>
   <footer className="footer">
    <span>Copyright © 2024 - WalletGuard. Todos os direitos reservados.</span>
    <ul>
     <li>
      <a href="https://github.com/douglascugliarisenai" target="_blank">
       <GitHubIcon sx={{ color: "#eff6e0" }} />
      </a>
     </li>
     <li>
      <a href="https://www.linkedin.com/in/douglascugliari/" target="_blank">
       <LinkedInIcon sx={{ color: "#eff6e0" }} />
      </a>
     </li>
     <li>
      <a href="https://www.instagram.com/sant0s_d0ug/" target="_blank">
       <InstagramIcon sx={{ color: "#eff6e0" }} />
      </a>
     </li>
    </ul>
   </footer>
  </>
 );
}

export default TrilhasFooter;
