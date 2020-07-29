import React from 'react';
import Menu from  '../../components/Menu'
import dadosiniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import '../../App.css';

function Home() {
  return (
   
    <>

    <Menu />
    
    <BannerMain 
      videoTitle={dadosiniciais.categorias[0].videos[0].titulo}
      videoDescription={"O que é FrontEnd"}
      url={dadosiniciais.categorias[0].videos[0].url}
    />

    <Carousel 
      ignoreFirstVideo
      category={dadosiniciais.categorias[0]}
    />
    <Carousel 
      ignoreFirstVideo
      category={dadosiniciais.categorias[1]}
    />
    <Carousel 
      ignoreFirstVideo
      category={dadosiniciais.categorias[2]}
    />
    <Carousel 
      ignoreFirstVideo
      category={dadosiniciais.categorias[3]}
    />

    <Footer />
    </>
  );
}

export default Home;
