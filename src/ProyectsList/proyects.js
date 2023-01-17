
const img = require.context('../assets/img');

export const proyects = {
    proyectsArray: [
        {
            id: '00',
            name: 'F1 App',
            url: 'https://f1-app.jaimejb.com/',
            description: 'Aplicación que despliega una tabla con el campeonato de pilotos de la Fórmula 1. Muestra los datos de la temporada actual y de años anteriores, además del campeonato de constructores. Esta aplicación consigue los datos de la Ergast Developer API y está construida con React.',
            path: img('./f1App.png')
        },

        {
            id: '01',
            name: 'Marvel App',
            url: 'https://marvel-app.jaimejb.com/',
            description: 'Aplicación en la que podemos buscar personajes de Marvel. Al entrar tendremos que escribir el nombre del personaje que queremos buscar y escoger uno que aparezca de la lista. Nos mostrará información del personaje y una lista de cómics en los que aparece si es que los hay. Esta aplicación consigue los datos de la Marvel Comics API y está construida con React.',
            path: img('./marvelApp.png')
        },

        {
            id: '02',
            name: 'Mouse Escape',
            url: 'https://mouse-escape.jaimejb.com/',
            description: 'Este es un juego que hice hace algún tiempo con Unity. Únicamente está disponible para ser probado en PC. Consiste en activar las trampas que van apereciendo haciendo clic en ellas para que el ratón no sea atrapado.',
            path: img('./mouse-escape.png')
        },

        {
            id: '03',
            name: 'Mejico',
            url: 'https://mejico.jaimejb.com/',
            description: 'Esta aplicación simula el menú para un restaurante mexicano; además, consume la API-Mejico que también yo desarrollé. Dado que la API está en un host con limitaciones, es posible que esta aplicación no funcione correctamente.',
            path: img('./mejicoApp.png')
        },

        {
            id: '04',
            name: 'API-Mejico',
            url: 'https://api-mejico.jaimejb.com/',
            description: 'Esta es una API que desarrollé con Node, Express y MongoDB. Guarda diferentes platillos que se podrían encontrar en algún restaurante mexicano. Las diferentes formas de consultar esos platillos es a través de los endpoints que se describen en el home de la API. Esta aplicación está en un host con restricciones y no está en linea permanentemente, así que es posible que no esté disponible.',
            path: img('./api-mejico.png')
        }
    ]
}
