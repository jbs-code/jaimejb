
const img = require.context('../assets/img');

export const proyects = {
    proyectsArray: [
        {
            id: '01',
            name: 'F1 App',
            url: 'https://f1-app.jaimejb.com/',
            description: 'Aplicación de React que despliega una tabla con el campeonato de pilotos de la Fórmula 1. Muestra los datos de la temporada actual y de años anteriores, además del campeonato de constructores. Esta aplicación consigue los datos de la Ergast Developer API',
            path: img('./f1App.png')
        },

        {
            id: '02',
            name: 'Marvel App',
            url: 'https://marvel-app.jaimejb.com/',
            description: 'Aplicación de React en la que podemos buscar personajes de Marvel. Esta aplicación consigue los datos de la Marvel Comics API. AL entrar tendremos que escribir el nombre del personaje que queremos buscar y escoger uno que aparezca de la lista. Nos mostrará información del personaje y una lista de cómics en los que aparece si es que los hay.',
            path: img('./marvelApp.png')
        },

        {
            id: '03',
            name: 'Mouse Escape',
            url: 'https://mouse-escape.jaimejb.com/',
            description: 'Este es un juego que hice hace algún tiempo con Unity. Únicamente está disponible para ser probado en PC. Consiste en activar las trampas que van apereciendo haciendo clic en ellas para que el ratón no caiga en ellas.',
            path: img('./mouse-escape.png')
        }
    ]
}
