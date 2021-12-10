const acordei = () => `Acordando!!`;
const cafezinho = () => `Bora tomar café!!`;
const dormindo = () => `Partiu dormir!!`;

const rotina = (func) => {
    const result = func();
    console.log(result);
};

rotina(acordei);