const productos = [
    {
      nombre: "Paleta Sane",
      id: "1",
      precio: 70000,
      idCategoria: "1",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/paleta_sane_impronta_11-95947fad0d4445087915458731914717-480-0.webp"
    },
    {
      nombre: "Paleta Siux",
      id: "2",
      precio: 80000,
      idCategoria: "1",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/paleta_siux_tsunami_2-0_roja_eva_111-7e450f7d798bdbf8e715780087814248-640-0.webp"
    },
    {
      nombre: "Paleta Odea",
      id: "3",
      precio: 70000,
      idCategoria: "1",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/paleta-odea-speed-12k-carbon-eva-soft-11-dcf188b34e1601addb16289806891099-640-0.webp"
    },
    {
      nombre: "Paleta Wingpadel",
      id: "4",
      precio: 65000,
      idCategoria: "1",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/paleta_wingpadel_air_combat_3-0_black_control_eva_soft_11-d357a95bd81e87742116015617352018-640-0.webp"
    },
    {
      nombre: "Paleta Bewe",
      id: "5",
      precio: 90000,
      idCategoria: "1",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/paleta-bewe-carvo-3k-eva-soft-11-cbb1a48925d7e73d0f16429577680456-480-0.webp"
    },
    {
      nombre: "Paleta Prokennex",
      id: "6",
      precio: 59000,
      idCategoria: "1",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/paleta-prokennex-legend-pro-eva-11-c0791bf11969d37fc916347524946490-480-0.webp"
    },
    {
      nombre: "Paleta Black Crown",
      id: "7",
      precio: 65000,
      idCategoria: "1",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/paleta_black_crown_piton_air_eva_11-2eafea670e53ff90ca15984782012341-480-0.webp"
    },
    {
      nombre: "Paleta J'hayber",
      id: "8",
      precio: 70000,
      idCategoria: "1",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/paleta-jhayber-warrior-fit-eva-soft-11-596787e0056ffc4e3516229320941995-480-0.webp"
    },
    {
      nombre:"Short Black Crown",
      id: "9",
      precio: 4000,
      idCategoria: "2",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/short-black-crown-cool-elastic-negro-11-b96cb05040c7c203f216654973234325-640-0.webp"
    },
    {
      nombre:"Medias Lasaig Negras ",
      id: "10",
      precio: 2000,
      idCategoria: "2",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/medias-acolchadas-lasaig-negras-11-b7154b5d474e3a93bb16308678745498-480-0.webp"
    },
    {
      nombre:"Medias Lasaig Blancas",
      id: "11",
      precio: 2000,
      idCategoria: "2",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/medias-acolchadas-lasaig-blancas-11-61d4e820db854b89ed16308637992279-480-0.webp"
    },
    {
      nombre:"Remera Black Crown",
      id: "12",
      precio: 4000,
      idCategoria: "2",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/remera-black-crown-cool-elastic-azul-3-0-11-92fa76adc1b25569de16661909692168-640-0.webp"
    },
    {
      nombre:"Remera Prokennex ",
      id: "13",
      precio: 4000,
      idCategoria: "2",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/remera-prokennex-dry-f-azul-11-b6b748dba88bb0b2d616479800014281-640-0.webp"
    },
    {
      nombre:"Short Odea",
      id: "14",
      precio: 4000,
      idCategoria: "2",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/short-odea-odpro-flex-gray-11-f5eb5b6c87bf74d28516586687436878-480-0.webp"
    },
    {
      nombre:"Buzo Black Crown",
      id: "15",
      precio: 6000,
      idCategoria: "2",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/buzo-black-crown-cool-elastic-gris-11-17237dad44289bdb6216611755728463-640-0.webp"
    },
    {
      nombre:"Gorra Sublime Trucker",
      id: "16",
      precio: 3000,
      idCategoria: "2",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/gorra-sublime-trucker-negra-11-fb46aa286cf16b9f5916277593656742-480-0.webp"
    },
    {
      nombre:"Zapatillas Odea Black ",
      id: "17",
      precio: 40000,
      idCategoria: "3",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/zapatillas-odea-black-orange-121-8d62dca81f3615350816460053703168-640-0.webp"
    },
    {
      nombre:"Zapatillas Odea Blue",
      id: "18",
      precio: 40000,
      idCategoria: "3",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/zapatillas-odea-blue-orange-11-06aa4f21e657bcb9cf16481348312435-640-0.webp"
    },
    {
      nombre:"Zapatillas Odea lima",
      id: "19",
      precio: 40000,
      idCategoria: "3",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/zapatillas-odea-lima-navy-111-eb7668f03bb23adc3416460073487501-640-0.webp"
    },
    {
      nombre:"Paletero Lasaig",
      id: "20",
      precio: 65000,
      idCategoria: "4",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/paletero-lasaig-ergonomic-oslo-blue-11-df9a23d75a76bea9e816644550344747-640-0.webp"
    },
    {
      nombre:"Paletero Odea",
      id: "21",
      precio: 55000,
      idCategoria: "4",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/paletero-odea-odpro-bigger-dorado-11-58147b50543ab27bb916389035844347-640-0.webp"
    },
    {
      nombre:"Funda Black Crown",
      id: "22",
      precio: 9000,
      idCategoria: "4",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/funda_blackcrown_roja_11-843a59457dd57fad3c15664301994653-480-0.webp"
    },
    {
      nombre:"Paletero Madma",
      id: "23",
      precio: 60000,
      idCategoria: "4",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/paletero-madma-padel-pro-negro-11-cf0ac64e196ab2335a16668132008131-640-0.webp"
    },
    {
      nombre:"Mochila Odea",
      id: "24",
      precio: 40000,
      idCategoria: "4",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/mochila-odea-odpro-hulk-11-5d076a14e0f74b422916622065798925-640-0.webp"
    },
    {
      nombre:"Mochila Odea",
      id: "25",
      precio: 50000,
      idCategoria: "4",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/mochila-odea-odpro-backpack-cuerina-negra-11-86499334cde8cdbc5416803829835323-640-0.webp"
    },



  ];
  
  export const getProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
  };
  
  export const getUnProducto = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const producto = productos.find((prod) => prod.id === id);
        resolve(producto);
      }, 1000);
    });
  };
  
  export const getCatProducto = (idCat) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const prodCategoria = productos.filter(
          (prod) => prod.idCategoria === idCat
        );
        resolve(prodCategoria);
      }, 1000);
    });
  };
  