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

  const [livro, setLivro] = React.useState('');
  const [envia, setEnvia] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [cart, setCart] = React.useState(false);
  const [validado,setValidado] = React.useState(false)
  const [livroNoCarrinho,setLivroNoCarrinho] = React.useState(null)
  const [quantidade,setQuantidade] = React.useState(0)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'AIzaSyAoTklFkAcgo6nbYIKMUHIIXgLZv-s-u_4';
        const url = `https://www.googleapis.com/books/v1/volumes?q=*&key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        setLivro(data.items);
        setValidado(true)
        console.log(livro);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        form,
        setForm,
        envia,
        setEnvia,
        livro,
        setLivro,
        login,
        setLogin,
        cart,
        setCart,
        livroNoCarrinho,
        setLivroNoCarrinho,
        quantidade,
        setQuantidade,
        validado,
        setValidado
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
