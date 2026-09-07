import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import CheckIcon from "@mui/icons-material/Check";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import { useColorScheme } from "@mui/material/styles";
import SearchDialog from "../Search/SearchDialog";
import { useDesignStyle } from "../../hooks/useDesignStyle";
import { DESIGN_STYLES } from "../../types/theme";

interface HeaderProps {
  onMenuClick: () => void;
}

/** Top app bar: logo/home link, search, style switcher, and the mobile
 * menu toggle (also the only way to reach nav when style === "minimal",
 * since Layout hides the persistent sidebar for that style). */
export default function Header({ onMenuClick }: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [styleMenuAnchor, setStyleMenuAnchor] = useState<HTMLElement | null>(null);
  const navigate = useNavigate();
  const { mode, setMode } = useColorScheme();
  const { style, setStyle } = useDesignStyle();

  const toggleMode = () => setMode(mode === "dark" ? "light" : "dark");

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        <Toolbar sx={{ gap: 1 }}>
          <IconButton
            edge="start"
            onClick={onMenuClick}
            sx={{
              display: style === "minimal" ? "inline-flex" : { xs: "inline-flex", md: "none" },
              mr: 0.5,
            }}
            aria-label="Open navigation"
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h3"
            component="button"
            onClick={() => navigate("/")}
            sx={{
              border: "none",
              background: "none",
              cursor: "pointer",
              p: 0,
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "text.primary",
            }}
          >
            EngineeringWiki
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Tooltip title="Search">
            <IconButton onClick={() => setSearchOpen(true)} aria-label="Search">
              <SearchIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Design style">
            <IconButton
              onClick={(e) => setStyleMenuAnchor(e.currentTarget)}
              aria-label="Change design style"
            >
              <PaletteOutlinedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
            <IconButton onClick={toggleMode} aria-label="Toggle color mode">
              {mode === "dark" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={styleMenuAnchor}
        open={Boolean(styleMenuAnchor)}
        onClose={() => setStyleMenuAnchor(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {DESIGN_STYLES.map((s) => (
          <MenuItem
            key={s.id}
            selected={s.id === style}
            onClick={() => {
              setStyle(s.id);
              setStyleMenuAnchor(null);
            }}
          >
            <ListItemText
              primary={s.label}
              secondary={s.description}
              slotProps={{ secondary: { sx: { fontSize: "0.75rem" } } }}
            />
            {s.id === style && <CheckIcon fontSize="small" sx={{ ml: 2, color: "primary.main" }} />}
          </MenuItem>
        ))}
      </Menu>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
