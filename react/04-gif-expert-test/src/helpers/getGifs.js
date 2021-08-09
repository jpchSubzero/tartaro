export const getGifs = async (category) => { 
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&offset=5&rating=g&lang=en&random_id=e826c9fc5c929e0d6c6d423841a282aa&api_key=WzZmmeMbM2fIoV97Bv3ZDXYM6pE1MDa6`;

    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return(gifs);
}
