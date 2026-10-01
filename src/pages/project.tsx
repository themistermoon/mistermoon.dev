import { Link as RouterLink, useParams } from "react-router-dom";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PaperRow from "../components/papers";
import { getProject } from "../data/projects";
import { COLORS } from "../theme";

function BackLink() {
  return (
    <MuiLink
      component={RouterLink}
      to="/"
      underline="none"
      sx={{
        display:       "inline-flex",
        alignItems:    "center",
        gap:           0.75,
        mb:            { xs: 4, md: 6 },
        fontFamily:    '"Georgia", serif',
        fontSize:      "0.75rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color:         COLORS.textMuted,
        "&:hover":     { color: COLORS.gold, opacity: 1 },
      }}
    >
      <ArrowBackIcon sx={{ fontSize: "0.95rem" }} />
      Home
    </MuiLink>
  );
}

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project  = getProject(slug ?? "");

  return (
    <Box
      sx={{
        maxWidth: "960px",
        mx:       "auto",
        px:       { xs: 3, sm: 4, md: 6 },
        pt:       { xs: "calc(64px + 24px)", md: "calc(100px + 40px)" },
        pb:       { xs: 6, md: 10 },
        color:    COLORS.textPrimary,
      }}
    >
      <BackLink />

      {!project ? (
        <Typography variant="body1">Project not found.</Typography>
      ) : (
        <>
          <Typography variant="h2" sx={{ mb: { xs: 3, md: 4 }, fontSize: { xs: "2rem", md: "clamp(1.75rem, 3.5vw, 3rem)" } }}>
            {project.title}
          </Typography>

          <Box sx={{ maxWidth: "640px", mb: 5 }}>
            {project.body.map((para, i) => (
              <Typography key={i} variant="body1" sx={{ color: COLORS.textPrimary, mb: 2.5 }}>
                {para}
              </Typography>
            ))}
          </Box>

          {project.papers.map((paper) => (
            <PaperRow key={paper.id} paper={paper} />
          ))}
        </>
      )}
    </Box>
  );
}
