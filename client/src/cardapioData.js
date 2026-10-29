// Cardápio Churrascaria 7 - versão atualizada
// Preços em reais (number). `cod` é string para preservar zeros à esquerda.

const VF = "Vinagrete e farofa.";
const ACOMP_500 = "arroz, feijão tropeiro, fritas e vinagrete.";

export const cardapio = [
  {
    id: "entradas-guarnicoes",
    titulo: "Entradas e Guarnições",
    secoes: [
      {
        titulo: "Entradas",
        itens: [
          { cod: "0014", nome: "Kieber (500g)", preco: 65 },
          { cod: "0015", nome: "Fritas (500g)", preco: 40 },
          { cod: "0016", nome: "Aipim (500g)", preco: 40 },
          { cod: "0017", nome: "Fritas com cheddar e bacon (500g)", preco: 60 },
          { cod: "0018", nome: "Anel de cebola (200g)", preco: 35 },
          { cod: "0019", nome: "Salaminho italiano (100g)", preco: 35 },
          { cod: "0020", nome: "Bolinho de bacalhau (12 un.)", preco: 70 },
          { cod: "0021", nome: "Pastel de camarão (10 un.)", preco: 60 },
          { cod: "0022", nome: "Pastel de siri (10 un.)", preco: 60 },
          { cod: "1018", nome: "Pastel de bacalhau", preco: 60 },
          { cod: "0112", nome: "Torresmo porção", preco: 40 },
          { cod: "0023", nome: "Torresmo com aipim", preco: 50 },
          { cod: "00101", nome: "Bolinho de costela", preco: 65 },
        ],
      },
      {
        titulo: "Guarnições",
        itens: [
          { cod: "0027", nome: "Arroz branco", preco: 15 },
          { cod: "0028", nome: "Feijão tropeiro", preco: 30 },
          { cod: "0029", nome: "Feijão em caldo", preco: 15 },
          { cod: "0030", nome: "Farofa", preco: 10 },
          { cod: "0031", nome: "Vinagrete", preco: 10 },
          { cod: "0032", nome: "Banana frita", preco: 20 },
        ],
      },
    ],
  },
  {
    id: "carnes-churrasqueira",
    titulo: "Carnes na Churrasqueira",
    secoes: [
      {
        titulo: "Carnes na churrasqueira com acompanhamento",
        itens: [
          { cod: "0001", nome: "Picanha da Rua 7", preco: 170, desc: `500g de carne, ${ACOMP_500}` },
          { cod: "0002", nome: "Picanha Família", preco: 230, desc: "1kg de picanha, arroz, feijão tropeiro, fritas, farofa e vinagrete." },
          { cod: "0004", nome: "Espeto Misto", preco: 110, desc: "200g de carne, 200g de picanha suína e 2 unidades de linguiça. Acompanha batata frita, farofa e vinagrete." },
          { cod: "0005", nome: "Picanha Suína", preco: 95, desc: `500g de picanha suína, ${ACOMP_500}` },
          { cod: "0006", nome: "Coração de Alcatra (500g)", preco: 130, desc: `500g de carne, ${ACOMP_500}` },
          { cod: "0007", nome: "Espeto Coração de Alcatra", preco: 190, desc: "1kg de carne, arroz, feijão tropeiro, farofa, vinagrete e fritas." },
          { cod: "0009", nome: "Espeto de Linguiça (4 un.)", preco: 50 },
          { cod: "0010", nome: "Espeto de Coração de Frango (20 un.)", preco: 40 },
        ],
      },
      {
        titulo: "Acompanhamentos",
        itens: [
          { cod: "0011", nome: "Pão de Alho (un.)", preco: 10 },
          { cod: "0012", nome: "Queijo Coalho (300g)", preco: 45, desc: "Acompanha delicioso melado de cana." },
          { cod: "0013", nome: "Salada Fresca", preco: 50, desc: "Alface americana, rúcula, tomate, palmito, azeite, presunto e queijo." },
          { cod: "0102", nome: "Carne de Sol (500g)", preco: 85, desc: VF },
          { cod: "00001", nome: "Picanha (500g)", preco: 100, desc: VF },
          { cod: "00002", nome: "Picanha (1kg)", preco: 180, desc: VF },
          { cod: "00004", nome: "Espeto Misto", preco: 90, desc: VF },
          { cod: "00005", nome: "Picanha Suína (500g)", preco: 60, desc: VF },
          { cod: "00006", nome: "Coração de Alcatra (500g)", preco: 90, desc: VF },
          { cod: "0003", nome: "Tulipa de Frango (08 un.)", preco: 40, desc: VF },
        ],
      },
    ],
  },
  {
    id: "chapa",
    titulo: "Chapa",
    secoes: [
      {
        itens: [
          { cod: "0108", nome: "Picanha (500g)", preco: 90, desc: "Molho, vinagrete e farofa." },
          { cod: "0109", nome: "Picanha com Fritas", preco: 90, desc: "300g de carne, 300g fritas, vinagrete, molho e farofa." },
          { cod: "0111", nome: "Coração de Alcatra (500g)", preco: 70, desc: "Molho, vinagrete e farofa." },
          { cod: "0113", nome: "Filé com Fritas", preco: 80, desc: "300g de carne, 300g fritas, vinagrete, molho e farofa." },
          { cod: "0114", nome: "Carne de Sol com Aipim", preco: 90, desc: "400g de carne, 400g aipim, vinagrete, molho e farofa." },
        ],
      },
    ],
  },
  {
    id: "executivo",
    titulo: "Executivo",
    secoes: [
      {
        itens: [
          { cod: "1010", nome: "Contra Filé", preco: 45, desc: "Arroz, feijão, fritas, ovo, vinagrete e farofa." },
          { cod: "1011", nome: "Frango", preco: 45, desc: "Arroz, feijão, fritas, ovo, vinagrete e farofa." },
          { cod: "1012", nome: "Peixe", preco: 45, desc: "Arroz, feijão, fritas, vinagrete e farofa." },
          { cod: "1013", nome: "Picanha", preco: 55 },
        ],
      },
    ],
  },
  {
    id: "pizzas-salgadas",
    titulo: "Pizzas Salgadas",
    tamanhos: [
      { fatias: 6, tamanho: "P", preco: 50 },
      { fatias: 8, tamanho: "M", preco: 60 },
      { fatias: 10, tamanho: "G", preco: 70 },
    ],
    tamanhosEspeciais: {
      "0048": [
        { fatias: 6, tamanho: "P", preco: 53 },
        { fatias: 8, tamanho: "M", preco: 63 },
        { fatias: 10, tamanho: "G", preco: 73 },
      ],
    },
    adicionalBorda: 8,
    secoes: [
      {
        itens: [
          { cod: "0033", nome: "Atum", desc: "Mussarela, molho de tomate, atum, cebola, azeitona e orégano." },
          { cod: "0034", nome: "Bacon 1", desc: "Mussarela, molho de tomate, bacon, cebola, azeitona e orégano." },
          { cod: "0035", nome: "Bacon 2", desc: "Mussarela, molho de tomate, bacon, palmito, cebola, azeitona e orégano." },
          { cod: "0036", nome: "Bauru", desc: "Mussarela, molho de tomate, presunto, tomate, azeitona e orégano." },
          { cod: "0037", nome: "Calabresa", desc: "Mussarela, molho de tomate, calabresa, cebola, azeitona e orégano." },
          { cod: "0038", nome: "Carijó", desc: "Mussarela, molho de tomate, frango, milho, palmito, ervilha, catupiry, azeitona e orégano." },
          { cod: "0039", nome: "Frango", desc: "Mussarela, molho de tomate, frango, catupiry, azeitona e orégano." },
          { cod: "0040", nome: "Marguerita", desc: "Mussarela, molho de tomate, tomate, parmesão, azeitona e manjericão." },
          { cod: "0041", nome: "Mista", desc: "Mussarela, molho de tomate, calabresa, presunto, cebola, palmito, bacon, frango, milho, ervilha, azeitona e orégano." },
          { cod: "0042", nome: "Mussarela", desc: "Mussarela, molho de tomate, azeitona, tomate e orégano." },
          { cod: "0043", nome: "Napolitana", desc: "Mussarela, molho de tomate, tomate, parmesão, azeitona e orégano." },
          { cod: "0044", nome: "Palmito", desc: "Mussarela, molho de tomate, palmito, azeitona e orégano." },
          { cod: "0045", nome: "Portuguesa", desc: "Mussarela, molho de tomate, presunto, ovo, cebola, calabresa, ervilha, azeitona e orégano." },
          { cod: "0046", nome: "Quatro Queijos", desc: "Mussarela, molho de tomate, provolone, parmesão, catupiry, azeitona e orégano." },
          { cod: "0047", nome: "Vegetariana", desc: "Mussarela, molho de tomate, palmito, ervilha, milho, cebola, tomate, azeitona e orégano." },
          { cod: "0048", nome: "Bacalhau", desc: "Mussarela, molho de tomate, bacalhau, palmito, cebola, azeitona e orégano.", precoEspecial: true },
        ],
      },
    ],
  },
  {
    id: "pizzas-doces-sobremesas",
    titulo: "Pizzas Doces e Sobremesas",
    secoes: [
      {
        titulo: "Pizzas Doces",
        tamanhos: [
          { fatias: 6, tamanho: "P", preco: 45 },
          { fatias: 8, tamanho: "M", preco: 50 },
          { fatias: 10, tamanho: "G", preco: 55 },
        ],
        tamanhosEspeciais: {
          "0051": [
            { fatias: 6, tamanho: "P", preco: 48 },
            { fatias: 8, tamanho: "M", preco: 58 },
            { fatias: 10, tamanho: "G", preco: 60 },
          ],
        },
        itens: [
          { cod: "0049", nome: "Banana", desc: "Mussarela, banana, canela, açúcar e leite condensado." },
          { cod: "0050", nome: "Brigadeiro", desc: "Chocolate granulado e leite condensado." },
          { cod: "0051", nome: "Brigadeiro com Morango", desc: "Chocolate, leite condensado e morango.", precoEspecial: true },
          { cod: "0604", nome: "Romeu e Julieta", desc: "Mussarela e goiabada." },
        ],
      },
      {
        titulo: "Sobremesas",
        itens: [
          { cod: "0052", nome: "Petit Gateau", preco: 30, desc: "Acompanha bola de sorvete de creme." },
          { cod: "111", nome: "Taça da Felicidade", preco: 30, desc: "Brigadeiro, morango e sorvete." },
        ],
      },
    ],
  },
  {
    id: "peixes",
    titulo: "Peixes",
    secoes: [
      {
        itens: [
          { cod: "1014", nome: "Peroá Simples", preco: 85, desc: "1 unidade de peroá, fritas, vinagrete e farofa." },
          { cod: "1015", nome: "Peroá Completo", preco: 140, desc: "1 unidade de peroá, fritas, aipim, camarão, banana, vinagrete e farofa." },
          { cod: "1313", nome: "Casquinha de Siri", preco: 35 },
          { cod: "0024", nome: "Camarão à Dorê", preco: 80 },
          { cod: "0025", nome: "Gurjão de Tilápia", preco: 90 },
          { cod: "0026", nome: "Lula em Anel (300g)", preco: 50 },
          { cod: "1029", nome: "Embalagem para Viagem", preco: 3 },
        ],
      },
    ],
  },
  {
    id: "drinks",
    titulo: "Drinks",
    secoes: [
      {
        itens: [
          { cod: "1024", nome: "Daiquiri", preco: 25, desc: "Rum, limão e açúcar." },
          { cod: "0053", nome: "Caipivodka", preco: 25, desc: "Vodka Orloff, kiwi, limão, morango, maracujá e açúcar." },
          { cod: "1028", nome: "Caipirinha com Absolut", preco: 30, desc: "Absolut, kiwi, limão, morango, maracujá e açúcar." },
          { cod: "0054", nome: "Caipirinha", preco: 20, desc: "Cachaça e açúcar." },
          { cod: "0055", nome: "Caipiríssima", preco: 25, desc: "Bacardi, limão e açúcar." },
          { cod: "0056", nome: "Delícia de Morango", preco: 28, desc: "Morango, limão, Smirnoff e xarope de morango." },
          { cod: "0057", nome: "Gin Tônica Tradicional ou Saborizada", preco: 28, desc: "Gin, tônica e xarope à escolha." },
          { cod: "0058", nome: "Gin Tropical", preco: 28, desc: "Gin, tônica, energético tropical e laranja." },
          { cod: "0059", nome: "Vodka Tropical", preco: 28, desc: "Vodka, energético tropical e laranja." },
          { cod: "0060", nome: "Sex on the Beach", preco: 28, desc: "Laranja, Smirnoff, licor de pêssego e xarope de groselha." },
          { cod: "0103", nome: "Cuba Libre", preco: 20, desc: "Rum branco, coca cola, limão e gelo." },
          { cod: "0104", nome: "Margarita", preco: 30, desc: "Tequila prata, triple sec, sal, limão" },
          { cod: "0105", nome: "Aperol Spritz", preco: 30, desc: "Aperol, espumante e água com gás." },
          { cod: "0106", nome: "Mojito", preco: 23, desc: "Rum branco, suco de limão, hortelã e açúcar." },
          { cod: "0085", nome: "Moscow Mule", preco: 28, desc: "Vodka, xarope de gengibre, limão, espuma de gengibre." },
          { cod: "0061", nome: "Gin Sunset", preco: 30, desc: "Suco de laranja, gin, xarope de grenadine e espuma de sicília." },
          { cod: "1025", nome: "D'Mauro", preco: 40 },
          { cod: "1026", nome: "Negroni", preco: 40 },
        ],
      },
    ],
  },
  {
    id: "drinks-sem-alcool",
    titulo: "Drinks sem Álcool",
    secoes: [
      {
        itens: [
          { cod: "0062", nome: "Soda Italiana", preco: 18, desc: "Xarope de maçã verde e água com gás." },
          { cod: "0063", nome: "Pink Lemonade", preco: 15, desc: "Xarope de morango, limão tahiti, água sem gás e gelo." },
          { cod: "0064", nome: "Shirley Temple", preco: 20, desc: "Suco de laranja, soda e xarope de morango." },
          { cod: "0065", nome: "Delícia de Morango", preco: 25, desc: "Morango, limão e xarope de morango." },
          { cod: "1027", nome: "Orange Apple", preco: 25, desc: "Limão, xarope de maçã, manjericão e suco de laranja." },
        ],
      },
    ],
  },
  {
    id: "sucos-refrigerantes",
    titulo: "Sucos e Refrigerantes",
    secoes: [
      {
        titulo: "Sucos",
        itens: [
          { cod: "0066", nome: "Acerola", preco: 12 },
          { cod: "0067", nome: "Maracujá", preco: 12 },
          { cod: "0068", nome: "Abacaxi", preco: 12 },
          { cod: "0069", nome: "Abacaxi com Hortelã", preco: 12 },
          { cod: "0070", nome: "Laranja", preco: 12 },
          { cod: "0072", nome: "Graviola", preco: 12 },
          { cod: "0074", nome: "Manga", preco: 12 },
          { cod: "0071", nome: "Laranja com Acerola", preco: 16 },
          { cod: "0073", nome: "Morango", preco: 16 },
          { cod: "0075", nome: "Laranja com Morango", preco: 16 },
          { cod: "1017", nome: "Suco de Uva Integral", preco: 18 },
        ],
      },
      {
        titulo: "Água",
        itens: [
          { cod: "0076", nome: "Água Mineral s/ Gás", preco: 6 },
          { cod: "0077", nome: "Água Mineral c/ Gás", preco: 7 },
        ],
      },
      {
        titulo: "Refrigerantes",
        itens: [
          { cod: "0078", nome: "Coca-Cola (lata)", preco: 9 },
          { cod: "0079", nome: "Fanta Laranja (lata)", preco: 9 },
          { cod: "0080", nome: "Fanta Uva (lata)", preco: 9 },
          { cod: "0081", nome: "Fanta Guaraná (lata)", preco: 9 },
          { cod: "0082", nome: "Sprite (lata)", preco: 9 },
          { cod: "192", nome: "Refrigerante 2 Litros", preco: 18 },
        ],
      },
    ],
  },
  {
    id: "cervejas-chopps",
    titulo: "Cervejas e Chopps",
    secoes: [
      {
        itens: [
          { cod: "0083", nome: "Chopp Petra Puro Malte (300ml)", preco: 13 },
          { cod: "0084", nome: "Chopp Petra Puro Malte (500ml)", preco: 17 },
          { cod: "0086", nome: "Heineken (600ml)", preco: 19 },
          { cod: "1022", nome: "Amstel (600ml)", preco: 14 },
          { cod: "1023", nome: "Petra (600ml)", preco: 13 },
          { cod: "1021", nome: "Original (600ml)", preco: 15 },
        ],
      },
    ],
  },
  {
    id: "energeticos",
    titulo: "Energéticos",
    secoes: [{ itens: [{ cod: "0087", nome: "Red Bull", preco: 16 }] }],
  },
  {
    id: "bebidas-alcoolicas",
    titulo: "Bebidas Alcoólicas",
    secoes: [
      {
        titulo: "Doses",
        itens: [
          { cod: "0090", nome: "Whisky 12 anos", preco: 35 },
          { cod: "0091", nome: "Whisky 8 anos", preco: 25 },
          { cod: "0092", nome: "Tequila", preco: 25 },
          { cod: "0093", nome: "Campari", preco: 18 },
          { cod: "0094", nome: "Cachaça Cabaré (ouro)", preco: 10 },
          { cod: "0095", nome: "Cachaça Cabaré (prata)", preco: 10 },
          { cod: "0096", nome: "Vodka Absolut", preco: 20 },
          { cod: "0097", nome: "Vodka Orloff", preco: 15 },
          { cod: "2209", nome: "Bananinha", preco: 10 },
        ],
      },
      {
        titulo: "Vinhos",
        itens: [
          { cod: "0098", nome: "Reservado", preco: 70 },
          { cod: "0099", nome: "Espumante", preco: 70 },
          { cod: "0100", nome: "Prosecco", preco: 80 },
          { cod: "0101", nome: "Vinho Taça", preco: 15 },
        ],
      },
    ],
  },
];

// Na versão atual do cardápio só aparecem WhatsApp e Instagram.
export const contato = {
  whatsapp: "(27) 9 9759-9168",
  instagram: "@churrascaria.7",
};

export default cardapio;
