/**
 * @typedef {Object} Album
 * @property {string} id - Unique identifier for the album
 * @property {string} title - The album title
 * @property {string} artist - The album artist
 * @property {number} year - The release year
 * @property {string} coverUrl - URL for the album cover image
 */

/**
 * @type {Album[]}
 */
export const albums = [
    {
        id: "1989",
        title: "1989",
        artist: "Taylor Swift",
        year: 2014,
        coverUrl: "/images/album-covers/1989.png",
    },
    {
        id: "american-idiot",
        title: "American Idiot",
        artist: "Green Day",
        year: 2004,
        coverUrl: "/images/album-covers/american-idiot.png",
    },
    {
        id: "bad",
        title: "Bad",
        artist: "Michael Jackson",
        year: 1987,
        coverUrl: "/images/album-covers/bad.png",
    },
    {
        id: "hotel-california",
        title: "Hotel California",
        artist: "Eagles",
        year: 1976,
        coverUrl: "/images/album-covers/hotel-california.png",
    },
    {
        id: "led-zeppelin-iv",
        title: "Led Zeppelin IV",
        artist: "Led Zeppelin",
        year: 1971,
        coverUrl: "/images/album-covers/led-zeppelin-iv.png",
    },
    {
        id: "saturday-night-fever",
        title: "Saturday Night Fever",
        artist: "Bee Gees",
        year: 1977,
        coverUrl: "/images/album-covers/saturday-night-fever.png",
    },
    {
        id: "the-dark-side-of-the-moon",
        title: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        year: 1973,
        coverUrl: "/images/album-covers/the-dark-side-of-the-moon.png",
    },
    {
        id: "thriller",
        title: "Thriller",
        artist: "Michael Jackson",
        year: 1982,
        coverUrl: "/images/album-covers/thriller.png",
    },
    {
        id: "viva-la-vida",
        title: "Viva la Vida",
        artist: "Coldplay",
        year: 2008,
        coverUrl: "/images/album-covers/viva-la-vida.png",
    },
];

/**
 * @type {Map<string, Album>}
 * A map where the keys are album IDs and the values are the corresponding album objects.
 */
export const albumsById = new Map(albums.map((album) => [album.id, album]));
