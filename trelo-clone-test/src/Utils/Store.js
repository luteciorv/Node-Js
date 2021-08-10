const cards = [
    {
        id: "card-1",
        title: "Aprendendo a cozinhar"
    },
    {
        id: "card-2",
        title: "Fazendo um sanduíche"
    },
    {
        id: "card-3",
        title: "Levar o lixo para fora"
    }
];

const data = {
    lists: {
        "list-1":{
            id: "list-1",
            title: "A ser feito",
            cards
        },        
    },
    listIds: ["list-1"]
};

export default data;