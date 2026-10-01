import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import { PROJECTS } from "../data/projects";
import { COLORS } from "../theme";

const HEADING_SX = {
  fontFamily:    '"Georgia", serif',
  fontSize:      { xs: "1.4rem", sm: "1.7rem", md: "clamp(1.6rem, 3vw, 2.2rem)" },
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color:         COLORS.white,
} as const;

function SectionDivider() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, my: 7 }}>
      <Box sx={{ flex: 1, height: "1px", backgroundColor: COLORS.border }} />
      <Box sx={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: COLORS.gold, opacity: 0.35 }} />
      <Box sx={{ flex: 1, height: "1px", backgroundColor: COLORS.border }} />
    </Box>
  );
}

export default function Home() {
  return (
    <Box
      sx={{
        maxWidth: "960px",
        mx:       "auto",
        px:       { xs: 3, sm: 4, md: 6 },
        pt:       { xs: "calc(64px + 24px)", md: "calc(100px + 40px)" }, // top bar height + padding
        pb:       { xs: 6, md: 10 },
        color:    COLORS.textPrimary,
      }}
    >
      {/* ── About ─────────────────────────────────────────────────────────── */}
      <Typography component="h2" sx={{ ...HEADING_SX, mb: { xs: 2, md: 3 } }}>
        About
      </Typography>

      <Box sx={{ maxWidth: "640px" }}>
        <Typography variant="body1" sx={{ color: COLORS.textPrimary, mb: 2 }}>
          I'm Moon, a software engineering graduate from the University of Brighton.
          I like working close to the hardware: C, assembly, firmware and operating systems.
        </Typography>
        <Typography variant="body1" sx={{ color: COLORS.textPrimary }}>
          The night sky behind this page is generated in your browser. Stars fade in and
          out, and every so often one shoots across. The aurora along the top is generated
          randomly too, so no two visits look the same. The site is built with React and TypeScript.
        </Typography>
      </Box>

      <SectionDivider />

      {/* ── Projects ──────────────────────────────────────────────────────── */}
      <Typography component="h2" sx={{ ...HEADING_SX, mb: 1 }}>
        Projects
      </Typography>

      <Typography variant="caption" sx={{ display: "block", mb: { xs: 2, md: 3 } }}>
        Click a title to explore that project
      </Typography>

      <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
        {PROJECTS.map((project) => (
          <Box
            key={project.id}
            component="li"
            sx={{
              display:       "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems:    { xs: "flex-start", sm: "baseline" },
              gap:           { xs: 0.5, sm: 2.5 },
              mb:            { xs: 2, md: 2.5 },
              borderLeft:    `2px solid ${COLORS.border}`,
              pl:            2.5,
              transition:    "border-color 0.2s",
              "&:hover":     { borderLeftColor: COLORS.gold },
            }}
          >
            <MuiLink
              component={RouterLink}
              to={`/projects/${project.id}`}
              underline="none"
              sx={{
                fontFamily:    '"Georgia", serif',
                fontSize:      { xs: "0.92rem", md: "0.9rem" },
                letterSpacing: "0.07em",
                color:         COLORS.gold,
                flexShrink:    0,
                minHeight:     "28px",
                display:       "flex",
                alignItems:    "center",
                "&:hover":     { opacity: 0.7 },
                transition:    "opacity 0.2s",
              }}
            >
              {project.title}
            </MuiLink>

            <Box
              aria-hidden
              sx={{
                flexShrink:      0,
                width:           3,
                height:          3,
                borderRadius:    "50%",
                backgroundColor: COLORS.border,
                alignSelf:       "center",
                display:         { xs: "none", sm: "block" },
              }}
            />

            <Typography sx={{ fontSize: { xs: "0.82rem", md: "0.85rem" }, color: COLORS.textMuted, lineHeight: 1.7 }}>
              {project.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
