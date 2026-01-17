import styles from "@/components/Header/index.module.css";
import HeaderLogo from "@/components/ui/HeaderLogo";
import HumBarger from "@/components/ui/HumBarger";
import { Box } from "@mui/material";

export default function Header() {
  return (
    <Box className={styles.header}>
      <HumBarger />
      <HeaderLogo />
    </Box>
  );
}
