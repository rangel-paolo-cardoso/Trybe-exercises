const Task = (value) => {
  return <li>{value}</li>;
};

function App() {
  const compomissos = [
    'Fazer a cama',
    'Almoçar',
    'Escovar dentes',
    'Lavar os pratos',
    'Trabalhar',
    'Tomar banho',
    'Fazer a janta',
    'Estudar inglês',
    'Estudar Java',
    'Dormir'
  ];
  return (
    <div>
      {compomissos.map((comprimisso) => Task(comprimisso))}
    </div>
  );
}

export default App;
