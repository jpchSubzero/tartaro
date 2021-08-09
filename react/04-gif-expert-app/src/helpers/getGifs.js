// Como es una función async nos va a devolver una promesa
export const getGifs = async (category) => { 
    // Comentar para agregar la categoría que llega por props luego de las clases
    // const url = 'https://api.giphy.com/v1/gifs/search?q=saint+seiya&limit=20&offset=5&rating=g&lang=en&random_id=e826c9fc5c929e0d6c6d423841a282aa&api_key=WzZmmeMbM2fIoV97Bv3ZDXYM6pE1MDa6';

    // Agregar la categoría que llega por props y usar encodeURI() para sanitizar el string. También cambiar en AddCategory() para que agregue las nuevas búsquedas al inicio del arreglo
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&offset=5&rating=g&lang=en&random_id=e826c9fc5c929e0d6c6d423841a282aa&api_key=WzZmmeMbM2fIoV97Bv3ZDXYM6pE1MDa6`;

    //Hacer una llamada http
    const response = await fetch(url);

    //Trae toda la data con envoltorio incluido
    // const data = await response.json();

    //Destructurar para obtener la data sin envoltorio porque la estructura es obj.data
    const { data } = await response.json();

    //Usar map para recorrer la data y solo sacar lo que necesitamos
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    //Comentar una vez que funciona para que no estorbe en la ejecución del custom hook
    // console.log(gifs);

    return(gifs);
}
