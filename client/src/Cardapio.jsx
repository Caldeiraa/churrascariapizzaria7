import React from 'react';
import LogoImg from './img/Logo.jpeg';
import Chapa from './img/chapa.jpg';
import Entrada from './img/entrada.jpg';
import Guarnicao from './img/guarnicao.jpg';
import Executivo from './img/executivo.jpg';
import Churrasco from './img/churrasco.jpg';
import Picanha from './img/picanha.jpg';
import Marguerita from './img/marguerita.jpg';
import Portuguesa from './img/portuguesa.jpg';
import Morango from './img/morango.jpg';
import Banana from './img/banana.png';
import Brigadeiro from './img/brigadeiro.png';
import Petit from './img/petit_gateau.png';
import Peixe from './img/peixe.png';
import Peixe2 from './img/peixe2.jpg';
import Caipirinha from './img/caipirinha.png';
import Drink from './img/tropical.png';
import Drink2 from './img/drink.jpg';
import Drink3 from './img/drink2.jpg';
import Laranja from './img/laranja.png';
import Coca from './img/coca.jpg';
import Agua from './img/agua.jpeg';
import Drink4 from './img/drink3.jpg';
import Cachaca from './img/cachaca.png';
import Cachaca2 from './img/cachaca2.jpg';
import Vinho from './img/vinho.jpg';
import Chopp from './img/chop.png';

function Cardapio() {
  return (
    <div className="pagina">

      {/* ======================================= */}
      {/* MENU INICIAL INTERATIVO                 */}
      {/* ======================================= */}
      <div className="menu-interativo" id="inicio">
        <div className="menu-interativo-header">
          <div className="titulo-interativo">
            <h2 className="m-0">CARDÁPIO</h2>
            <h2 className="m-0">INTERATIVO</h2>
          </div>
          <div className="logo-interativo-container">
             <img src={LogoImg} alt="Logo" className="logo-interativo" />
          </div>
        </div>

        <div className="botoes-container">
          <a href="#entradas" className="btn-interativo">ENTRADAS E GUARNIÇÕES <span>👆🏼</span></a>
          <a href="#carnes" className="btn-interativo">CARNES NA CHURRASQUEIRA <span>👆🏼</span></a>
          <a href="#chapa" className="btn-interativo">CHAPA <span>👆🏼</span></a>
          <a href="#executivo" className="btn-interativo">EXECUTIVO <span>👆🏼</span></a>
          <a href="#pizzas-salgadas" className="btn-interativo">PIZZAS SALGADAS <span>👆🏼</span></a>
          <a href="#pizzas-doces" className="btn-interativo">PIZZAS DOCES <small>E SOBREMESAS</small> <span>👆🏼</span></a>
          <a href="#peixes" className="btn-interativo">PEIXES <span>👆🏼</span></a>
          <a href="#drinks" className="btn-interativo">DRINKS <span>👆🏼</span></a>
          <a href="#drinks-sem-alcool" className="btn-interativo">DRINKS SEM ÁLCOOL <span>👆🏼</span></a>
          <a href="#sucos" className="btn-interativo">SUCOS E REFRIGERANTES <span>👆🏼</span></a>
          <a href="#cervejas" className="btn-interativo">CERVEJAS E CHOPPS <span>👆🏼</span></a>
          <a href="#energeticos" className="btn-interativo">ENERGÉTICOS <span>👆🏼</span></a>
          <a href="#bebidas-alcoolicas" className="btn-interativo">BEBIDAS ALCOÓLICAS <span>👆🏼</span></a>
        </div>

        <div className="contatos-footer">
          <span><i className="fab fa-whatsapp"></i> (27) 9 9759-9168</span>
          <span><i className="fas fa-phone"></i> (27) 3354-0550</span>
          <span><i className="fab fa-instagram"></i> @CHURRASCARIA.7</span>
        </div>
      </div>

      {/* ======================================= */}
      {/* PAGINA 1 - ENTRADAS E GUARNIÇÕES */}
      <div className="cardapio mt-4" id="entradas">
        <div className="header">
          <h1>ENTRADAS E GUARNIÇÕES</h1>
        </div>

        <div className="row m-0 imagens">
          <div className="col-6 p-0">
            <img src={Entrada} className="img-fluid" alt="Entradas" />
          </div>
          <div className="col-6 p-0">
            <img src={Guarnicao} className="img-fluid" alt="Guarnições" />
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

          <h3 className="categoria mt-5">GUARNIÇÕES</h3>
          <Item cod="0027" nome="ARROZ BRANCO" preco="R$15,00" />
          <Item cod="0028" nome="FEIJÃO TROPEIRO" preco="R$30,00" />
          <Item cod="0029" nome="FEIJÃO EM CALDO" preco="R$15,00" />
          <Item cod="0030" nome="FAROFA" preco="R$10,00" />
          <Item cod="0031" nome="VINAGRETE" preco="R$10,00" />
          <Item cod="0032" nome="BANANA FRITA" preco="R$20,00" />
        </div>
      </div>

      {/* PAGINA 2 - CARNES NA CHURRASQUEIRA */}
      <div className="cardapio mt-4" id="carnes">
        <div className="header">
          <h1>CARNES NA CHURRASQUEIRA</h1>
        </div>

        <div className="row m-0 imagens">
          <div className="col-6 p-0">
            <img src={Churrasco} className="img-fluid" alt="Churrasco" />
          </div>
          <div className="col-6 p-0">
            <img src={Picanha} className="img-fluid" alt="Picanha" />
          </div>
        </div>

        <div className="conteudo">
          <h3 className="categoria text-center">COM ACOMPANHAMENTO</h3>
          <div className="row">
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

            <div className="col-md-6 mt-4 mt-md-0">
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

        <div className="rodape text-center">
          <img src={LogoImg} alt="Logo" className="logoRodape" />
        </div>
      </div>

      {/* PAGINA 3 - CHAPA */}
      <div className="cardapio mt-4" id="chapa">
        <div className="header">
          <h1>CHAPA</h1>
        </div>

        <div className="img3">
          <img src={Chapa} className="chapa" alt="Chapa" />
        </div>

        <div className="conteudo text-center">
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

      {/* PAGINA 4 - EXECUTIVO */}
      <div className="cardapio mt-4" id="executivo">
        <div className="header">
          <h1>EXECUTIVO</h1>
        </div>

        <div className="conteudo text-center">
          <Item cod="1010" nome="CONTRA FILÉ" preco="R$40,00" />
          <Desc texto="Arroz, feijão, fritas, ovo, vinagrete e farofa." />
          <Item cod="1011" nome="FRANGO" preco="R$40,00" />
          <Desc texto="Arroz, feijão, fritas, ovo, vinagrete e farofa" />
          <Item cod="1012" nome="PEIXE" preco="R$40,00" />
          <Desc texto="Arroz, feijão, fritas, vinagrete e farofa" />
          <Item cod="1013" nome="PICANHA " preco="R$50,00" />
        </div>

        <div className="img3">
          <img src={Executivo} className="chapa" alt="Executivo" />
        </div>

        <div className="rodape text-center">
          <img src={LogoImg} alt="Logo" className="logoRodape" />
        </div>
      </div>

      {/* PAGINA 5 - PIZZAS SALGADAS */}
      <div className="cardapio mt-4" id="pizzas-salgadas">
        <div className="header">
          <h1>PIZZAS SALGADAS</h1>
        </div>

        <div className="conteudo">
          <div className="row text-center">
            <div className="col-md-6 mb-4">
              <Item cod="0033" nome="ATUM" />
              <Desc texto="Mussarela, molho de tomate, atum, cebola, azeitona e orégano." />

              <Item cod="0034" nome="BACON 1" />
              <Desc texto="Mussarela, molho de tomate, bacon, cebola, azeitona e orégano." />

              <Item cod="0035" nome="BACON 2" />
              <Desc texto="Mussarela, molho de tomate, bacon, palmito, cebola, azeitona e orégano." />

              <Item cod="0036" nome="BAURU" />
              <Desc texto="Mussarela, molho de tomate, presunto, tomate, azeitona e orégano." />

              <Item cod="0037" nome="CALABRESA" />
              <Desc texto="Mussarela, molho de tomate, calabresa, cebola, azeitona e orégano." />

              <Item cod="0038" nome="CARIJÓ" />
              <Desc texto="Mussarela, molho de tomate, frango, milho, palmito, ervilha, catupiry, azeitona e orégano." />

              <Item cod="0039" nome="FRANGO" />
              <Desc texto="Mussarela, molho de tomate, frango, catupiry, azeitona e orégano." />

              <Item cod="0040" nome="MARGUERITA" />
              <Desc texto="Mussarela, molho de tomate, tomate, parmesão, azeitona e manjericão." />

              <Item cod="0041" nome="MISTA" />
              <Desc texto="Mussarela, molho de tomate, calabresa, presunto, cebola, palmito, bacon, frango, milho, ervilha, azeitona e orégano." />

              <Item cod="0042" nome="MUSSARELA" />
              <Desc texto="Mussarela, molho de tomate, azeitona, tomate e orégano." />
            </div>

            <div className="col-md-6">
              <Item cod="0043" nome="NAPOLITANA" />
              <Desc texto="Mussarela, molho de tomate, tomate, parmesão, azeitona e orégano." />

              <Item cod="0044" nome="PALMITO" />
              <Desc texto="Mussarela, molho de tomate, palmito, azeitona e orégano." />

              <Item cod="0045" nome="PORTUGUESA" />
              <Desc texto="Mussarela, molho de tomate, presunto, ovo, cebola, calabresa, ervilha, azeitona e orégano." />

              <Item cod="0046" nome="QUATRO QUEIJOS" />
              <Desc texto="Mussarela, molho de tomate, provolone, parmesão, catupiry, azeitona e orégano." />

              <Item cod="0047" nome="VEGETARIANA" />
              <Desc texto="Mussarela, molho de tomate, palmito, ervilha, milho, cebola, tomate, azeitona e orégano." />

              <Item cod="0048" nome="BACALHAU*" />
              <Desc texto="Mussarela, molho de tomate, bacalhau, palmito, cebola, azeitona e orégano." />
              <p className="preco-especial">* [ 6 fat: P: R$53,00 / 8 fat: M: R$63,00 / 10 fat: G: R$73,00 ]</p>

              <div className="caixa-precos-pizza mt-4 mx-auto text-center">
                <h5 className="font-weight-bold mb-3">TAMANHOS E PREÇOS</h5>
                
                <div className="d-flex justify-content-around flex-wrap align-items-center mb-3 gap-2">
                  <div className="text-center pizza-size">
                    <p className="mb-1">6 FATIAS<br/>P R$48,00</p>
                    <IconePizza fatias={6} />
                  </div>
                  <div className="text-center pizza-size">
                    <p className="mb-1">8 FATIAS<br/>M R$58,00</p>
                    <IconePizza fatias={8} />
                  </div>
                  <div className="text-center pizza-size">
                    <p className="mb-1">10 FATIAS<br/>G R$68,00</p>
                    <IconePizza fatias={10} />
                  </div>
                </div>

                <p className="obs-pizza">**exceto pizza de bacalhau.</p>
                <p className="borda-pizza font-weight-bold mt-2">Pizza com borda R$8,00 a mais.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row m-0 imagens">
          <div className="col-6 p-0">
            <img src={Portuguesa} className="img-fluid" alt="Pizza 1" />
          </div>
          <div className="col-6 p-0">
            <img src={Marguerita} className="img-fluid" alt="Pizza 2" />
          </div>
        </div>

        <div className="rodape text-center">
          <img src={LogoImg} alt="Logo" className="logoRodape" />
        </div>
      </div>

      {/* PAGINA 6 - PIZZAS DOCES E SOBREMESAS */}
      <div className="cardapio mt-4" id="pizzas-doces">
        
        <div className="header">
          <h1>PIZZAS DOCES</h1>
        </div>

        <div className="conteudo">
          <div className="row text-center align-items-center">
            <div className="col-md-7 mb-4">
              <Item cod="0049" nome="BANANA" />
              <Desc texto="Mussarela, banana, canela, açúcar e leite condensado." />

              <Item cod="0050" nome="BRIGADEIRO" />
              <Desc texto="Chocolate granulado e leite condensado." />

              <Item cod="0051" nome="BRIGADEIRO COM MORANGO*" />
              <Desc texto="Chocolate, leite condensado e morango." />
              <p className="preco-especial">* [ 6 fat: P: R$48,00 / 8 fat: M: R$58,00 / 10 fat: G: R$60,00 ]</p>
            </div>

            <div className="col-md-5">
              <div className="caixa-precos-pizza mx-auto w-100 text-center">
                <h5 className="font-weight-bold mb-3">TAMANHOS E PREÇOS</h5>
                
                <div className="d-flex justify-content-around flex-wrap align-items-center mb-3 gap-2">
                  <div className="text-center pizza-size">
                    <p className="mb-1">6 FATIAS<br/>P R$45,00</p>
                    <IconePizza fatias={6} />
                  </div>
                  <div className="text-center pizza-size">
                    <p className="mb-1">8 FATIAS<br/>M R$50,00</p>
                    <IconePizza fatias={8} />
                  </div>
                  <div className="text-center pizza-size">
                    <p className="mb-1">10 FATIAS<br/>G R$55,00</p>
                    <IconePizza fatias={10} />
                  </div>
                </div>

                <p className="obs-pizza">**exceto pizza de brigadeiro com morango.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row m-0 imagens">
          <div className="col-4 p-0">
            <img src={Brigadeiro} className="img-fluid" alt="Pizza Doce Banana" />
          </div>
          <div className="col-4 p-0">
            <img src={Banana} className="img-fluid" alt="Pizza Doce Brigadeiro" />
          </div>
          <div className="col-4 p-0">
            <img src={Morango} className="img-fluid" alt="Pizza Doce Morango" />
          </div>
        </div>

        <div className="header mt-2">
          <h1>SOBREMESAS</h1>
        </div>

        <div className="row m-0 align-items-center mb-4">
          <div className="col-md-6 p-0 imagens">
            <img src={Petit} className="img-fluid" alt="Sobremesas" />
          </div>

          <div className="col-md-6 conteudo text-center">
            <Item cod="0052" nome="PETIT GATEAU" preco="R$28,00" />
            <Desc texto="Acompanha bola de sorvete de creme." />

            <div className="mt-4 mt-md-5">
              <Item cod="111" nome="TAÇA DA FELICIDADE" preco="R$28,00" />
              <Desc texto="Brigadeiro, morango e sorvete." />
            </div>
          </div>
        </div>

        <div className="rodape text-center">
          <img src={LogoImg} alt="Logo" className="logoRodape" />
        </div>
      </div>

      {/* PAGINA 7 - PEIXES */}
      <div className="cardapio mt-4" id="peixes">
        <div className="header">
          <h1>PEIXES</h1>
        </div>

        <div className="row m-0 imagens">
          <div className="col-6 p-0">
            <img src={Peixe} className="img-fluid" alt="Peixes 1" />
          </div>
          <div className="col-6 p-0">
            <img src={Peixe2} className="img-fluid" alt="Peixes 2" />
          </div>
        </div>

        <div className="conteudo text-center">
          <Item cod="1014" nome="PEROÁ SIMPLES" preco="R$85,00" />
          <Desc texto="2 unidades de peroá, fritas, vinagrete e farofa." />

          <Item cod="1015" nome="PEROÁ COMPLETO" preco="R$140,00" />
          <Desc texto="2 unidades de peroá, fritas, aipim, camarão, banana, vinagrete e farofa." />

          <br />
          <Item cod="1313" nome="CASQUINHA DE SIRI" preco="R$35,00" />
          <Item cod="0024" nome="CAMARÃO A DORE" preco="R$70,00" />
          <Item cod="0025" nome="GURJÃO DE TILÁPIA" preco="R$70,00" />
          <Item cod="0026" nome="LULA EM ANEL (300G)" preco="R$50,00" />
          <Item cod="1029" nome="EMBALAGEM PARA VIAGEM" preco="R$3,00" />
        </div>

        <div className="rodape text-center">
          <img src={LogoImg} alt="Logo" className="logoRodape" />
        </div>
      </div>

      {/* PAGINA 8 - BEBIDAS (DRINKS) */}
      <div className="cardapio mt-4" id="drinks">
        <div className="header">
          <h1>BEBIDAS</h1>
        </div>

        <div className="row m-0 stretch-row">
          <div className="col-md-4 p-0 imagens-verticais d-none d-md-flex">
            <img src={Caipirinha} alt="Drink 1" />
            <img src={Drink} alt="Drink 2" />
            <img src={Drink2} alt="Drink 3" />
            <img src={Drink3} alt="Drink 4" />
          </div>

          <div className="col-md-8 conteudo text-center">
            <h3 className="categoria mb-4">DRINKS</h3>

            <Item cod="1024" nome="DAIQUIRI" preco="R$18,00" />
            <Desc texto="Rum, limão e açúcar." />

            <Item cod="0053" nome="CAIPIVODKA" preco="R$18,00" />
            <Desc texto="Vodka Orloff, Kiwi, limão, morango, maracujá e açúcar." />

            <Item cod="1028" nome="CAIPIRINHA COM ABSOLUT" preco="R$30,00" />
            <Desc texto="Absolut, Kiwi, limão, morango, maracujá e açúcar." />

            <Item cod="0054" nome="CAIPIRINHA" preco="R$15,00" />
            <Desc texto="Cachaça e açúcar." />

            <Item cod="0055" nome="CAIPIRÍSSIMA" preco="R$18,00" />
            <Desc texto="Bacardi, limão e açúcar." />

            <Item cod="0056" nome="DELÍCIA DE MORANGO" preco="R$28,00" />
            <Desc texto="Morango, limão, Smirnoff e xarope de morango." />

            <Item cod="0057" nome="GIN TÔNICA TRADICIONAL / SABORISADA" preco="R$28,00" />
            <Desc texto="Gin, tônica e xarope a escolha." />

            <Item cod="0058" nome="GIN TROPICAL" preco="R$28,00" />
            <Desc texto="Gin, tônica, energético tropical e laranja." />

            <Item cod="0059" nome="VODKA TROPICAL" preco="R$28,00" />
            <Desc texto="Vodka, energético tropical e laranja." />

            <Item cod="0060" nome="SEX ON THE BEACH" preco="R$28,00" />
            <Desc texto="Laranja, Smirnoff, licor de pêssego e xarope de groselha." />

            <Item cod="0103" nome="CUBA LIBRE" preco="R$20,00" />
            <Desc texto="Rum branco, coca cola, limão e gelo." />

            <Item cod="0104" nome="MARGARITA" preco="R$28,00" />
            <Desc texto="Tequila prata, triple sec, sal, limão" />

            <Item cod="0105" nome="APEROL SPRITZ" preco="R$28,00" />
            <Desc texto="Aperol, espumante e água com gás." />

            <Item cod="0106" nome="MOJITO" preco="R$23,00" />
            <Desc texto="Rum branco, suco de limão, hortelã e açúcar." />

            <Item cod="0085" nome="MOSCOW MULE" preco="R$28,00" />
            <Desc texto="Vodka, xarope de gengibre, limão, espuma de gengibre." />

            <Item cod="0061" nome="GIN SUNSET" preco="R$28,00" />
            <Desc texto="Suco de laranja, gin, xarope de grenadine e espuma de sicília." />

            <Item cod="1025" nome="D'MAURO" preco="R$35,00" />
            <Item cod="1026" nome="NEGRONI" preco="R$40,00" />
          </div>
        </div>

        <div className="rodape text-center">
          <img src={LogoImg} alt="Logo" className="logoRodape" />
        </div>
      </div>

      {/* PAGINA 9 - BEBIDAS (DRINKS SEM ÁLCOOL, SUCOS E REFRIGERANTES) */}
      <div className="cardapio mt-4" id="drinks-sem-alcool">
        <div className="header">
          <h1>BEBIDAS</h1>
        </div>

        <div className="row m-0 stretch-row">
          <div className="col-md-8 conteudo text-center">
            
            <h3 className="categoria mb-4">DRINKS SEM ÁLCOOL</h3>
            <Item cod="0062" nome="SODA ITALIANA" preco="R$15,00" />
            <Desc texto="Xarope de maçã verde e água com gás." />

            <Item cod="0063" nome="PINK LEMONADE" preco="R$13,00" />
            <Desc texto="Xarope de morango, limão tahiti, água sem gás e gelo." />

            <Item cod="0064" nome="SHIRLEY TEMPLE" preco="R$20,00" />
            <Desc texto="Suco de laranja, soda e xarope de morango." />

            <Item cod="0065" nome="DELÍCIA DE MORANGO" preco="R$20,00" />
            <Desc texto="Morango, limão e xarope de morango." />

            <Item cod="1027" nome="ORANGE APPLE" preco="R$20,00" />
            <Desc texto="Limão, xarope de maçã, manjericão e suco de laranja." />

            <h3 className="categoria mt-5 mb-1" id="sucos">SUCOS</h3>
            <h5 className="mb-0 font-weight-bold">R$12,00</h5>
            <p className="mb-4 text-muted" style={{fontSize: '13px'}}>*exceto laranja com acerola.</p>
            
            <Item cod="0066" nome="ACEROLA" />
            <Item cod="0067" nome="MARACUJÁ" />
            <Item cod="0068" nome="ABACAXI" />
            <Item cod="0069" nome="ABACAXI COM HORTELÃ" />
            <Item cod="0070" nome="LARANJA" />
            <Item cod="0071" nome="LARANJA COM ACEROLA*" preco="R$16,00" />
            <Item cod="0072" nome="GRAVIOLA" />
            <Item cod="0073" nome="MORANGO" />
            <Item cod="0074" nome="MANGA" />
            <br/>
            <Item cod="0075" nome="LARANJA COM MORANGO" preco="R$16,00" />
            <Item cod="1017" nome="SUCO DE UVA INTEGRAL" preco="R$18,00" />

            <h3 className="categoria mt-5 mb-4">ÁGUA</h3>
            <Item cod="0076" nome="ÁGUA MINERAL S/ GÁS" preco="R$5,00" />
            <Item cod="0077" nome="ÁGUA MINERAL C/ GÁS" preco="R$6,00" />

            <h3 className="categoria mt-5 mb-2">REFRIGERANTES</h3>
            <h5 className="font-weight-bold mb-3">REFRIGERANTE LATA | R$8,00</h5>
            <Item cod="0078" nome="Coca cola" />
            <Item cod="0079" nome="Fanta laranja" />
            <Item cod="0080" nome="Fanta uva" />
            <Item cod="0081" nome="Fanta Guaraná" />
            <Item cod="0082" nome="Sprite" />
            <br/>
            <Item cod="192" nome="REFRIGERANTE 2 LITROS" preco="R$18,00" />
            
          </div>

          <div className="col-md-4 p-0 imagens-verticais d-none d-md-flex">
            <img src={Laranja} alt="Suco 1" />
            <img src={Coca} alt="Suco 2" />
            <img src={Agua} alt="Suco 3" />
            <img src={Drink4} alt="Suco 4" />
          </div>
        </div>

        <div className="rodape text-center">
          <img src={LogoImg} alt="Logo" className="logoRodape" />
        </div>
      </div>

      {/* PAGINA 10 - BEBIDAS (CERVEJAS E ALCOÓLICAS) */}
      <div className="cardapio mt-4" id="cervejas">
        <div className="header">
          <h1>BEBIDAS</h1>
        </div>

        <div className="row m-0 stretch-row">
          <div className="col-md-4 p-0 imagens-verticais d-none d-md-flex">
            <img src={Cachaca} alt="Bebida 1" />
            <img src={Cachaca2} alt="Bebida 2" />
            <img src={Vinho} alt="Bebida 3" />
            <img src={Chopp} alt="Bebida 4" />
          </div>

          <div className="col-md-8 conteudo text-center">
            
            <h3 className="categoria mb-4">CERVEJAS</h3>
            <Item cod="0083" nome="CHOPP (PETRA) (300ML)" preco="R$10,00" />
            <Item cod="0084" nome="CHOPP (PETRA) (500ML)" preco="R$15,00" />
            <Item cod="0086" nome="HEINEKEN (600ML)" preco="R$18,00" />
            <Item cod="1022" nome="AMSTEL (600ML)" preco="R$13,00" />
            <Item cod="1023" nome="PETRA (600ML)" preco="R$12,00" />

            <h3 className="categoria mt-5 mb-4" id="energeticos">ENERGÉTICOS</h3>
            <Item cod="0087" nome="RED BULL" preco="R$16,00" />

            <h3 className="categoria mt-5 mb-4" id="bebidas-alcoolicas">BEBIDAS ALCOÓLICAS</h3>
            <Item cod="0090" nome="WHISKY 12 ANOS" preco="R$35,00" />
            <Item cod="0091" nome="WHISKY 8 ANOS" preco="R$25,00" />
            <Item cod="0092" nome="TEQUILA" preco="R$20,00" />
            <Item cod="0093" nome="CAMPARI" preco="R$17,00" />
            <Item cod="0094" nome="CACHAÇA CABARÉ (OURO)" preco="R$10,00" />
            <Item cod="0095" nome="CACHAÇA CABARÉ (PRATA)" preco="R$10,00" />
            <Item cod="0096" nome="VODKA ABSOLUT" preco="R$20,00" />
            <Item cod="0097" nome="VODKA ORLOFF" preco="R$13,00" />

            <h3 className="categoria mt-5 mb-4">VINHOS</h3>
            <Item cod="0098" nome="RESERVADO" preco="R$70,00" />
            <Item cod="0099" nome="ESPUMANTE" preco="CONSULTAR" />
            <Item cod="0100" nome="PROSECCO" preco="R$80,00" />
            <Item cod="0101" nome="VINHO TAÇA" preco="R$15,00" />

          </div>
        </div>

        <div className="rodape text-center">
          <img src={LogoImg} alt="Logo" className="logoRodape" />
        </div>
      </div>

      {/* BOTÃO VOLTAR AO INÍCIO FLUTUANTE */}
      <a href="#inicio" className="btn-voltar-topo">
        ⬆ VOLTAR AO INÍCIO
      </a>

    </div>
  );
}

// COMPONENTES AUXILIARES
function Item({ cod, nome, preco }) {
  return (
    <div className="item">
      <span className="text-muted" style={{fontSize: '0.8em'}}>COD {cod}</span> - {nome} {preco && `| ${preco}`}
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

function IconePizza({ fatias }) {
  const linhas = fatias / 2;
  const anguloBase = 180 / linhas;
  const corBorda = "#1a1a1a";
  const corFatia = "#cfa872";

  return (
    <svg viewBox="0 0 100 100" width="50" height="50" className="icone-pizza">
      <circle cx="50" cy="50" r="46" fill="none" stroke={corBorda} strokeWidth="3" />
      <circle cx="50" cy="50" r="40" fill="none" stroke={corBorda} strokeWidth="1.5" />
      {Array.from({ length: linhas }).map((_, index) => (
        <line key={index} x1="50" y1="4" x2="50" y2="96" stroke={corFatia} strokeWidth="2" transform={`rotate(${index * anguloBase} 50 50)`} />
      ))}
    </svg>
  );
}

export default Cardapio;