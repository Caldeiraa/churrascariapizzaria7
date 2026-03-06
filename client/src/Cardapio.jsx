import React from 'react'
import LogoImg from './img/Logo.jpeg'
import Chapa from './img/chapa.jpg'
import Entrada from './img/entrada.jpg'
import Guarnicao from './img/guarnicao.jpg'
function index() {
  return (

    <div className="pagina">

      <div className="cardapio container">

        {/* TÍTULO */}
        <div className="header">
          <h1>ENTRADAS E GUARNIÇÕES</h1>
        </div>

        {/* IMAGENS */}
        <div className="row imagens">

          <div className="col-6 p-0">
            <img
              src={Entrada}
              className="img-fluid"
            />
          </div>

          <div className="col-6 p-0">
            <img
              src={Guarnicao}
              className="img-fluid"
            />
          </div>

        </div>

        <div className="conteudo text-center">

          <h3 className="categoria">ENTRADAS</h3>

          <Item cod="0014" nome="KIBE (500G)" preco="R$50,00" />
          <Item cod="0015" nome="FRITAS (500G)" preco="R$35,00" />
          <Item cod="0016" nome="AIPIM (500G)" preco="R$30,00" />
          <Item cod="0017" nome="FRITAS COM CHEDDAR E BACON (500G)" preco="R$50,00" />
          <Item cod="0018" nome="ANEL DE CEBOLA (200G)" preco="R$25,00" />
          <Item cod="0019" nome="SALAMINHO ITALIANO (100G)" preco="R$35,00" />
          <Item cod="0020" nome="BOLINHO DE BACALHAU (12 UN.)" preco="R$60,00" />
          <Item cod="0021" nome="PASTEL DE CAMARÃO (10 UN.)" preco="R$50,00" />
          <Item cod="0022" nome="PASTEL DE SIRI (10 UN.)" preco="R$50,00" />
          <Item cod="1018" nome="PASTEL DE BACALHAU" preco="R$50,00" />
          <Item cod="0012" nome="TORRESMO PORÇÃO" preco="R$35,00" />
          <Item cod="0023" nome="TORRESMO COM AIPIM" preco="R$45,00" />
          <Item cod="0010" nome="BOLINHO DE COSTELA" preco="R$50,00" />

          <h3 className="categoria mt-4">GUARNIÇÕES</h3>

          <Item cod="0027" nome="ARROZ BRANCO" preco="R$15,00" />
          <Item cod="0028" nome="FEIJÃO TROPEIRO" preco="R$30,00" />
          <Item cod="0029" nome="FEIJÃO EM CALDO" preco="R$15,00" />
          <Item cod="0030" nome="FAROFA" preco="R$10,00" />
          <Item cod="0031" nome="VINAGRETE" preco="R$10,00" />
          <Item cod="0032" nome="BANANA FRITA" preco="R$20,00" />

        </div>

      </div>
      {/* PAGINA 2 - CARNES NA CHURRASQUEIRA */}

      <div className="cardapio mt-5">

        <div className="header">
          <h1>CARNES NA CHURRASQUEIRA</h1>
        </div>

        {/* IMAGENS */}
        <div className="row imagens">

          <div className="col-6 p-0">
            <img
              src="https://images.unsplash.com/photo-1558030006-450675393462"
              className="img-fluid"
            />
          </div>

          <div className="col-6 p-0">
            <img
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e"
              className="img-fluid"
            />
          </div>

        </div>

        <div className="conteudo">

          <h3 className="categoria text-center">
            CARNES NA CHURRASQUEIRA COM ACOMPANHAMENTO
          </h3>

          <div className="row">

            {/* COLUNA 1 */}

            <div className="col-md-6">

              <Item cod="0001" nome="PICANHA DA RUA 7" preco="R$160,00" />
              <Desc texto="500g de carne, arroz, feijão tropeiro, fritas e vinagrete." />

              <Item cod="0002" nome="PICANHA FAMÍLIA" preco="R$220,00" />
              <Desc texto="1kg de picanha, arroz, feijão tropeiro, fritas, farofa e vinagrete." />

              <Item cod="0004" nome="ESPETO MISTO" preco="R$99,00" />
              <Desc texto="200g de carne, 200g de picanha suína e 2 unidades de linguiça." />

              <Item cod="0005" nome="PICANHA SUÍNA" preco="R$85,00" />
              <Desc texto="500g de picanha suína, arroz, feijão tropeiro, fritas e vinagrete." />

              <Item cod="0006" nome="ESPETO CONTRA FILÉ" preco="R$120,00" />
              <Desc texto="500g de carne, arroz, feijão e fritas." />

              <Item cod="0007" nome="ESPETO BIFE DE CONTRA FILÉ" preco="R$180,00" />

              <Item cod="0009" nome="ESPETO DE LINGUIÇA (4 UN.)" preco="R$40,00" />

              <Item cod="0010" nome="ESPETO DE CORAÇÃO DE FRANGO (20 UN.)" preco="R$30,00" />

            </div>

            {/* COLUNA 2 */}

            <div className="col-md-6">

              <Item cod="0011" nome="PÃO DE ALHO (UN.)" preco="R$10,00" />

              <Item cod="0012" nome="QUEIJO COALHO (300G)" preco="R$45,00" />

              <Item cod="0013" nome="SALADA FRESCA" preco="R$50,00" />
              <Desc texto="Alface americana, rúcula, tomate, palmito, azeite, presunto e queijo." />

              <Item cod="0102" nome="CARNE DE SOL (500G)" preco="R$73,00" />

              <Item cod="00001" nome="PICANHA (500G)" preco="R$90,00" />

              <Item cod="00002" nome="PICANHA (1KG)" preco="R$170,00" />

              <Item cod="00004" nome="ESPETO MISTO" preco="R$80,00" />

              <Item cod="00005" nome="PICANHA SUÍNA (500G)" preco="R$50,00" />

              <Item cod="00006" nome="CONTRA FILÉ (500G)" preco="R$80,00" />

              <Item cod="00003" nome="TULIPA DE FRANGO (08 UN.)" preco="R$35,00" />

            </div>

          </div>

        </div>

        {/* RODAPÉ */}

        <div className="rodape text-center">

          <img src={LogoImg} alt="Logo" className="logoRodape" />

        </div>

      </div>



      <div className="cardapio container">

        {/* TÍTULO */}
        <div className="header">
          <h1>CHAPA</h1>
        </div>

        {/* IMAGENS */}
     
          <div className="img3">
            <img src={Chapa} className="chapa "
            />
          </div>

        <div className="conteudo text-center">

          <h3 className="categoria">ENTRADAS</h3>

          <Item cod="0108" nome="PICANHA (500G)" preco="R$90,00" />
            <Desc texto="Molho, vinagrete e farofa." />
          <Item cod="0109" nome="PICANHA COM FRITAS" preco="R$90,00" />
           <Desc texto="300g de carne, 300g fritas, vinagrete, molho e farofa." />
          <Item cod="00111" nome="CONTRA FILÉ(500G)" preco="R$70,00" />
           <Desc texto="Molho, vinagrete e farofa." />
          <Item cod="0113" nome="FILÉ COM FRITAS " preco="R$80,00" />
            <Desc texto="300g de carne, 300g fritas, vinagrete, molho e farofa." />
          <Item cod="0114" nome="CARNE DE SOL COM AIPIM" preco="R$90,00" />
            <Desc texto="400g de carne, 400g aipim, vinagrete, molho e farofa." />

        </div>
        <div className="rodape text-center">

          <img src={LogoImg} alt="Logo" className="logoRodape" />

        </div>
      </div>
    </div>
  );
}



function Item({ cod, nome, preco }) {
  return (
    <div className="item">
      COD {cod} - {nome} | {preco}
    </div>
  );
}
function Desc({ texto }) {
  return (
    <div className="descItem">
      {texto}
    </div>
  );
}


export default index
