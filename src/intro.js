const impura = () => new Date().toLocaleString();
console.log(impura());

// funcion pura nunca cambia el valor de retorno 
const MiComponente = ({ miProp }) => {
  return <div>Nombre: {miProp}</div>;
};

const Intro = () => {
  return <MiComponente miProp={"Chanchito Feliz"} />;
};

export default Intro;
