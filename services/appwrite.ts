//Usando APPWRITE
import { Client, Databases, ID, Query } from 'react-native-appwrite';

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

/*console.log('DATABASE_ID:', DATABASE_ID);
console.log('COLLECTION_ID:', COLLECTION_ID);
console.log('PROJECT_ID:', process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID);

fetch('https://cloud.appwrite.io/v1')
  .then(response => console.log('Conexão bem-sucedida:', response))
  .catch(error => console.error('Erro de conexão:', error));*/

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const database = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal('searchTerm', query),
    ]);

    if (result.documents.length > 0) {
      const existingMovie = result.documents[0];

      //Verifica se "count" existe antes de incrementa-lo
      const newCount = existingMovie.count ? existingMovie.count + 1 : 1;

      await database.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        existingMovie.$id,
        {
          count: newCount, //existingMovie.count + 1,
        }
      );
    } else {
      await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        searchTerm: query,
        movie_id: movie.id,
        count: 1,
        title: movie.title,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      });
    }
  } catch (error) {
    console.log(
      'Erro ao atualizar contagem de pesquisa:',
      JSON.stringify(error, null, 2)
    );
  }
};

export const getTrendingMovies = async (): Promise<
  TrendingMovie[] | undefined
> => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.limit(5),
      Query.orderDesc('count'),
    ]);

    return result.documents as unknown as TrendingMovie[];
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
