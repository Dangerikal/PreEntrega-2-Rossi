const discos = [
    {
      id: 1,
      titulo: "Abbey Road",
      artista: "The Beatles",
      genero: "Rock",
      precio: 19.99,
      stock: 12,
      descripcion: "Abbey Road es el undécimo álbum de estudio publicado por la banda británica de rock The Beatles, sería lanzado el 26 de septiembre de 1969 en Reino Unido por Apple Records."
    },
    {
      id: 2,
      titulo: "Dark Side of the Moon",
      artista: "Pink Floyd",
      genero: "Rock Progresivo",
      precio: 24.99,
      stock: 8,
      descripcion: "The Dark Side of the Moon es el octavo álbum de estudio de la banda de rock británica Pink Floyd, lanzado el 1 de marzo de 1973 por Harvest Records en el Reino Unido y Capitol Records en Estados Unidos"
    },
    {
      id: 3,
      titulo: "Thriller",
      artista: "Michael Jackson",
      genero: "Pop",
      precio: 14.99,
      stock: 20,
      descripcion: "Thriller es el sexto álbum de estudio del cantante estadounidense Michael Jackson, publicado el 29 de noviembre de 1982 por Epic Records. "
    },
    {
      id: 4,
      titulo: "Rumours",
      artista: "Fleetwood Mac",
      genero: "Rock",
      precio: 18.99,
      stock: 10,
      descripcion: "Rumours es el undécimo álbum de estudio de la banda británica de rock Fleetwood Mac, publicado en 1977 por Warner Bros. Records. Su grabación se llevó a cabo en 1976 en varios estudios de los Estados Unidos, cuya producción quedó a cargo de Ken Caillat, Richard Dashut y la propia agrupación."
    },
    {
        id: 5,
        titulo: "Hotel California",
        artista: "Eagles",
        genero: "Rock",
        precio: 17.99,
        stock: 15,
        descripcion: "Hotel California es el quinto álbum de la banda estadounidense de música rock Eagles. Fue publicado el 8 de diciembre​ de 1976. Es el primer álbum del grupo sin su miembro fundador Bernie Leadon y el primero con Joe Walsh. "
      },
      {
        id: 6,
        titulo: "Back to Black",
        artista: "Amy Winehouse",
        genero: "Soul",
        precio: 16.99,
        stock: 10,
        descripcion: "Back to Black es el segundo y último álbum de estudio de la cantante británica Amy Winehouse. Su lanzamiento principal fue realizado el 4 de octubre de 2006 en el Reino Unido. "
      },
      {
        id: 7,
        titulo: "Nevermind",
        artista: "Nirvana",
        genero: "Grunge",
        precio: 20.99,
        stock: 5,
        descripcion: "Nevermind es el segundo álbum de estudio de la banda estadounidense de grunge Nirvana, publicado el 24 de septiembre de 1991. Producido por Butch Vig, Nevermind fue el primer lanzamiento de la banda con DGC Records."
      },
      {
        id: 8,
        titulo: "Kind of Blue",
        artista: "Miles Davis",
        genero: "Jazz",
        precio: 22.99,
        stock: 7,
        descripcion: "Kind of Blue —en español: Una especie de tristeza o algún tipo de tristeza— es un álbum de estudio del músico estadounidense de jazz Miles Davis editado en agosto de 1959. "
      },
      {
        id: 9,
        titulo: "Born to Run",
        artista: "Bruce Springsteen",
        genero: "Rock",
        precio: 18.99,
        stock: 12,
        descripcion: "Born to Run —en español: Nacido para correr— es el tercer álbum de estudio del músico estadounidense Bruce Springsteen, publicado por la compañía discográfica Columbia Records en agosto de 1975.1​ Su grabación tuvo lugar en los estudios de sonido Record Plant de la ciudad de Nueva York entre 1974 y 1975 bajo la producción de Mike Appel, Jon Landau y el propio Springsteen. "
      },
      {
        id: 10,
        titulo: "21",
        artista: "Adele",
        genero: "Pop",
        precio: 14.99,
        stock: 20,
        descripcion: "21 es el segundo álbum de estudio de la cantautora británica Adele. Fue lanzado al mercado el 24 de enero de 2011 en Europa y el 22 de febrero siguiente en Estados Unidos a través de los sellos discográficos XL y Columbia."
      },
      {
        id: 11,
        titulo: "The Wall",
        artista: "Pink Floyd",
        genero: "Rock Progresivo",
        precio: 25.99,
        stock: 9,
        descripcion: "The Wall es el undécimo álbum de estudio de la banda de rock británica Pink Floyd, lanzado el 30 de noviembre de 1979 por Harvest/EMI en Reino Unido y Columbia/CBS Records en Estados Unidos. Es una ópera rock sobre Pink, una estrella de rock hastiada que construye un «muro» psicológico de aislamiento social. "
      },
      {
        id: 12,
        titulo: "Led Zeppelin IV",
        artista: "Led Zeppelin",
        genero: "Hard Rock",
        precio: 19.99,
        stock: 8,
        descripcion: "El álbum sin título de Led Zeppelin es el cuarto álbum de estudio de la banda de rock inglesa Led Zeppelin, lanzado el 8 de noviembre de 1971 por Atlantic Records.​Fue producido por Jimmy Page, guitarrista del grupo, y grabado entre diciembre de 1970 y febrero de 1971."
      },
      {
        id: 13,
        titulo: "1989",
        artista: "Taylor Swift",
        genero: "Pop",
        precio: 13.99,
        stock: 25,
        descripcion: "1989 es el quinto álbum de estudio de la cantante y compositora estadounidense Taylor Swift, lanzado el 27 de octubre de 2014 a través del sello discográfico Big Machine Records."
      },
      {
        id: 14,
        titulo: "Blue",
        artista: "Joni Mitchell",
        genero: "Folk",
        precio: 18.99,
        stock: 6,
        descripcion: "Blue -en Español: Azul- es el cuarto álbum de estudio de la cantautora canadiense Joni Mitchell, lanzado el 22 de junio de 1971 por Reprise Records. Escrito y producido íntegramente por Mitchell, fue grabado en 1971 en A&M Studios en Hollywood, California. "
      },
      {
        id: 15,
        titulo: "Off the Wall",
        artista: "Michael Jackson",
        genero: "Pop",
        precio: 15.99,
        stock: 18,
        descripcion: "Off the Wall es el quinto álbum de estudio del cantante estadounidense Michael Jackson. Fue lanzado el 10 de agosto de 1979 por Epic Records. Con alrededor de 20 millones de copias vendidas en todo el mundo, ​ es uno de los 100 discos más vendidos de la historia y un hito imprescindible de la música disco."
      },
      {
        id: 16,
        titulo: "A Love Supreme",
        artista: "John Coltrane",
        genero: "Jazz",
        precio: 23.99,
        stock: 4,
        descripcion: "A Love Supreme es un álbum de jazz grabado por el cuarteto de John Coltrane el 9 de diciembre de 1964 en el estudio de Rudy Van Gelder en Englewood Cliffs, Nueva Jersey. El disco es una suite en cuatro partes, que se corresponden con sendos temas: Acknowledgement, Resolution, Pursuance y Psalm."
      },
      {
        id: 17,
        titulo: "Random Access Memories",
        artista: "Daft Punk",
        genero: "Electrónica",
        precio: 19.99,
        stock: 11,
        descripcion: "Random Access Memories es el cuarto y último álbum de estudio del dúo francés Daft Punk. Se publicó oficialmente el 17 de mayo en Australia, el 20 de mayo en Reino Unido​ y el 21 de mayo de 2013 en Estados Unidos, ​ bajo licencia de Daft Life.​"
      },
      {
        id: 18,
        titulo: "You Never Walk Alone",
        artista: "BTS",
        genero: "K-Pop",
        precio: 69.99,
        stock: 7,
        descripcion: "YOU NEVER WALK ALONE es el segundo álbum extendido de BTS, siendo el primero The Most Beautiful Moment In Life: Young Forever. El concepto del álbum es expresar la historia que no se relató en el álbum previo WINGS."
      },
  ];
  
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
  // Funciones simuladas
  export const getDiscos = async () => {
    await delay(500); // Simula un retraso
    return discos;
  };
  
  export const getDiscoById = async (id) => {
    await delay(500); 
    const disco = discos.find((disco) => disco.id === id);
    if (!disco) {
      throw new Error("Disco no encontrado");
    }
    return disco;
  };
  
  export const getDiscosByGenero = async (genero) => {
    await delay(500); 
    return discos.filter((disco) => disco.genero.toLowerCase() === genero.toLowerCase());
  };