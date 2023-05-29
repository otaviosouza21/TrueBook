import React from 'react';
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [form, setForm] = React.useState({
    nome: '',
    nascimento: '',
    endereco: '',
    cep: '',
    bairro: '',
    complemento: '',
    cidade: '',
    estado: '',
  });

  const [livro, setLivro] = React.useState({
    id: '',
    titulo: '',
    descricao: '',
    autor: '',
    capa: '',
    avalia: '',
  });

  React.useEffect(() => {
    const apiKey = 'AIzaSyAoTklFkAcgo6nbYIKMUHIIXgLZv-s-u_4';
    const url = `https://www.googleapis.com/books/v1/volumes?q=*&key=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { id } = data.items[0];
        const { title, authors, averageRating, description, imageLinks } =
          data.items[1].volumeInfo;
        setLivro({
          id,
          titulo: title,
          descricao: description,
          autor: authors,
          avalia: averageRating,
          capa: imageLinks.smallThumbnail,
        });
        console.log(livro);
      })
      .catch((error) => {
        // Lidar com erros
        console.error(error);
      });
  }, []);

  const [envia, setEnvia] = React.useState(false);

  return (
    <GlobalContext.Provider value={{ form, setForm, envia, setEnvia, livro }}>
      {children}
    </GlobalContext.Provider>
  );
};
