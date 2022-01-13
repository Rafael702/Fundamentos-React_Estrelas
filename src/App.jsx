import react from "react";
import Primeiro from "./componentes/basicos/Primeiro";
import ComParametro from "./componentes/basicos/ComParametro";
import ComFilhos from "./componentes/basicos/ComFilhos";
import Card from "./componentes/Layout/Card";
import Repeticao from "./componentes/basicos/Repeticao";
import Condicional from "./componentes/basicos/Condicional";
import CondicionalComIf from "./componentes/basicos/CondicionalComIf";
import "./App.css";


export default () => (
  <div className="App">
    <Card titulo="#6 - Condicional v2">
      <CondicionalComIf numero={11}></CondicionalComIf>
    </Card>
    <Card titulo="#5 - Condicional">
      <Condicional numero={9}></Condicional>
    </Card>
    <Card titulo="#4 - Repetição">
      <Repeticao></Repeticao>
    </Card>
    <Card titulo="Primeiro Componente">
      <Primeiro></Primeiro>
    </Card>

    <Card titulo="Componente com Parametro">
      <ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo" />
    </Card>

    <Card titulo="Exercicio X">
      Conteudo
    </Card>

    <Card titulo="Componentes Com Filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>
  </div>
)