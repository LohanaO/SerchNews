import { Grid, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useNoticiasContext from "../hooks/useNoticiasContext";
import Noticia from "./Noticia";

const ListadoNoticias = () => {
  const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticiasContext()
  const totalPaginas = Math.ceil(totalNoticias / 20)


  return (
    <>
      <Typography
        textAlign={"center"}
        marginY={5}
        variant="h3"
        component={"h2"}
      >
        Últimas Noticias
      </Typography>
      <Grid container spacing={2}>
        {noticias.map((noticia) => {
          return <Noticia noticia={noticia} key={noticia.url} />;
        })}
      </Grid>
      <Stack
      sx={{
         marginY: 5 
        }}
       spacing={2}
       direction={"row"}
       justifyContent={"center"}
       alignItems={"center"}>
        <Pagination
         count={totalPaginas} 
         color="primary"
         onChange={handleChangePagina}
         page={pagina} />
      </Stack>
    </>
  );
};

export default ListadoNoticias;
