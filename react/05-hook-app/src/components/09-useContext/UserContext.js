// Importamos la función de creación de contextos
import { createContext } from 'react';

// 1. Creamos y exportamos un contexto con valor null. Este se utilizará en el componente de más alto nivel de donde se necesite. Es decir, si existen 10 nivles de componentes (abuelo, padre, hijo, nieto, bisnieto, ..., 10mo) y el contexto se necesita en los 4 últimos niveles se deberá utilizar en el nivel 6 que contiene el 7, 8, 9 y 10. En este caso irá en el MainApp ya que este contiene a todos
export const UserContext = createContext(null);