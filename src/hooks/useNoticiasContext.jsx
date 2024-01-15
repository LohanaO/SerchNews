
import { useContext } from "react"
import NoticiasContext from "../context/NoticiasProvIder"

const useNoticiasContext = () => {
  return (
    useContext(NoticiasContext)
  )
}

export default useNoticiasContext