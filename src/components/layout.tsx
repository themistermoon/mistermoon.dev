import React from "react";
import { AppBar, Box, IconButton, Toolbar, Link as MuiLink } from "@mui/material";
import GitHubIcon    from "@mui/icons-material/GitHub";
import LinkedInIcon  from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link as RouterLink } from "react-router-dom";
import NightSky  from "./nightsky";
import AuroraBar from "./aurorabar";
import { COLORS } from "../theme";

interface LayoutProps {
  children: React.ReactNode;
}

const SOCIAL_LINKS = [
  {
    icon:  <GitHubIcon sx={{ fontSize: { xs: "1.4rem", md: "2.35rem" } }} />,
    href:  "https://github.com/MamoonU",
    label: "GitHub",
  },
  {
    icon:  <LinkedInIcon sx={{ fontSize: { xs: "1.4rem", md: "2.35rem" } }} />,
    href:  "https://www.linkedin.com/in/mamoon-umar-92ba95297/",
    label: "LinkedIn",
  },
  {
    icon:  <InstagramIcon sx={{ fontSize: { xs: "1.4rem", md: "2.35rem" } }} />,
    href:  "https://www.instagram.com/mamoon.umar",
    label: "Instagram",
  },
] as const;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* Background */}
      <NightSky />

      {/* Top bar */}
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          height:          { xs: "64px", md: "100px" },
          justifyContent:  "center",
          backgroundColor: "transparent",
          backdropFilter:  "blur(6px)",
          borderBottom:    "none",
        }}
      >
        <AuroraBar />

        <Toolbar
          sx={{
            position:       "relative",
            zIndex:         1,
            height:         { xs: "64px", md: "100px" },
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            px:             { xs: 2, sm: 3, md: 5 },
          }}
        >
          <MuiLink
            component={RouterLink}
            to="/"
            underline="none"
            sx={{
              color:         COLORS.white,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontFamily:    '"Georgia", serif',
              fontSize:      { xs: "1.05rem", sm: "1.35rem", md: "2.05rem" },
              opacity:       0.9,
              "&:hover":     { opacity: 1 },
              transition:    "opacity 0.2s ease",
              whiteSpace:    "nowrap",
            }}
          >
            MisterMoon
          </MuiLink>

          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0.25, md: 0.75 } }}>
            {SOCIAL_LINKS.map(({ icon, href, label }) => (
              <IconButton
                key={label}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                sx={{
                  color:     COLORS.textMuted,
                  p:         { xs: "6px", md: "8px" },
                  "&:hover": { color: COLORS.white },
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Page content */}
      <Box
        component="main"
        sx={{ position: "relative", zIndex: 1, width: "100vw", overflowX: "hidden" }}
      >
        {children}
      </Box>
    </>
  );
}
