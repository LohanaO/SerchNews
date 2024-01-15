import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import useNoticiasContext from "../hooks/useNoticiasContext";
const CATEGORIAS = [
  { value: "general", label: "General" },
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
];
const Formulario = () => {
    const {categoria, handleCategoria} = useNoticiasContext()
  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoria</InputLabel>
        <Select 
        label="Categoría"
        onChange={handleCategoria}
        value={categoria}>
          {CATEGORIAS.map((categoria) => (
            <MenuItem key={categoria.value} value={categoria.value}>
              {categoria.label}
            </MenuItem>
          ))}
        </Select>
       
      </FormControl>
    </form>
  );
};

export default Formulario;
