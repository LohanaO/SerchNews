import axios from "axios"
import { createContext, useState, useEffect } from "react"

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general")
  const [noticias, setNoticias] = useState([])
  const [pagina, setPagina] = useState(1)
  const [totalNoticias, setTotalNoticias] = useState(0)

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`

      const { data } = await axios(url);
      const noticiasFiltradas = data.articles.filter(
        (noticia) => noticia.title !== "[Removed]"
      )

      setNoticias(noticiasFiltradas)
      setTotalNoticias(data.totalResults)

      
    }

    consultarApi()
  }, [categoria])

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY}`

      const { data } = await axios(url);
      const noticiasFiltradas = data.articles.filter(
        (noticia) => noticia.title !== "[Removed]"
      )

      setNoticias(noticiasFiltradas)
      setTotalNoticias(data.totalResults)
      setPagina(1)

      
    }

    consultarApi()
  }, [pagina])


  const handleCategoria = (e) => {
    setCategoria(e.target.value);
  }

  const handleChangePagina = (e, valor) => {
      setPagina(valor)
  }

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleCategoria,
        noticias,
        totalNoticias,
        handleChangePagina,
        pagina
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider };

export default NoticiasContext;
