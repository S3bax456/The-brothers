export interface Dish {
  nombre: string;
  descripcion?: string;
  imagen?: string;
  precio: string | { personal: string; familiar: string };
}

export interface Category {
  id: string;
  nombre: string;
  items: Dish[];
}

export const DEFAULT_MENU_DATA: Category[] = [
  {
    id: "entradas",
    nombre: "Entradas",
    items: [
      {
        nombre: "Tequeños",
        descripcion: "Palitos de masa frita rellenos de queso, servidos como entrada.",
        precio: "S/. 14.00"
      },
      {
        nombre: "Causa acevichada",
        descripcion: "Causa de papa amarilla cubierta con ceviche fresco.",
        precio: "S/. 20.00"
      },
      {
        nombre: "Rellenas de chancho con pellejito",
        descripcion: "Croquetas rellenas de carne de cerdo acompañadas con pellejito crocante.",
        precio: "S/. 18.00"
      },
      {
        nombre: "Canoas rellenas",
        descripcion: "Plátano maduro relleno con preparación salada de la casa.",
        precio: "S/. 16.00"
      },
      {
        nombre: "Patacones acevichados",
        descripcion: "Patacones verdes cubiertos con ceviche.",
        precio: "S/. 20.00"
      },
      {
        nombre: "Langostinos al panco",
        descripcion: "Langostinos empanizados con panko y fritos.",
        precio: "S/. 18.00"
      },
      {
        nombre: "Patacones rellenos",
        descripcion: "Patacones rellenos con preparación especial de la casa.",
        precio: "S/. 18.00"
      },
      {
        nombre: "Piqueo The Brothers",
        descripcion: "Piqueo variado para compartir con especialidades del restaurante.",
        precio: "S/. 22.00"
      }
    ]
  },
  {
    id: "ceviches",
    nombre: "Ceviches",
    items: [
      {
        nombre: "Caballa",
        descripcion: "Ceviche preparado con caballa fresca.",
        precio: { personal: "S/. 25.00", familiar: "S/. 40.00" }
      },
      {
        nombre: "Filete",
        descripcion: "Ceviche clásico elaborado con filete de pescado.",
        precio: { personal: "S/. 27.00", familiar: "S/. 45.00" }
      },
      {
        nombre: "Mixto",
        descripcion: "Ceviche de pescado y mariscos.",
        precio: "S/. 30.00"
      },
      {
        nombre: "Caballa con filete",
        descripcion: "Combinación de caballa y filete de pescado en leche de tigre.",
        precio: { personal: "S/. 28.00", familiar: "S/. 45.00" }
      },
      {
        nombre: "Congrio",
        descripcion: "Ceviche preparado con congrio fresco.",
        precio: { personal: "S/. 35.00", familiar: "S/. 60.00" }
      },
      {
        nombre: "Carretillero",
        descripcion: "Ceviche acompañado con chicharrón de mariscos.",
        precio: { personal: "S/. 30.00", familiar: "S/. 55.00" }
      },
      {
        nombre: "Filete con conchas",
        descripcion: "Ceviche de filete de pescado acompañado con conchas.",
        precio: "S/. 40.00"
      },
      {
        nombre: "Ceviche The Brothers",
        descripcion: "Especialidad de la casa con combinación exclusiva de ingredientes.",
        precio: "S/. 45.00"
      },
      {
        nombre: "Ceviche de conchas",
        descripcion: "Ceviche preparado únicamente con conchas frescas.",
        precio: "S/. 35.00"
      }
    ]
  },
  {
    id: "leches",
    nombre: "Leches",
    items: [
      {
        nombre: "Leche de tigre",
        descripcion: "Concentrado de ceviche servido como entrada o aperitivo.",
        precio: "S/. 10.00"
      },
      {
        nombre: "Leche de pantera",
        descripcion: "Versión especial de leche de tigre con mariscos.",
        precio: "S/. 18.00"
      }
    ]
  },
  {
    id: "trios",
    nombre: "Tríos",
    items: [
      {
        nombre: "Trío Marino",
        descripcion: "Ceviche de filete + Chicharrón + Arroz con mariscos.",
        precio: "S/. 35.00"
      },
      {
        nombre: "Trío Criollo",
        descripcion: "Seco de chavelo + Majado de yuca + Chicharrón de chancho.",
        precio: "S/. 40.00"
      },
      {
        nombre: "Trío Piurano",
        descripcion: "Ceviche de caballa + Pota + Majado de yuca.",
        precio: "S/. 35.00"
      }
    ]
  },
  {
    id: "chupes",
    nombre: "Chupes",
    items: [
      {
        nombre: "Chupe de pescado",
        descripcion: "Sopa cremosa tradicional preparada con pescado.",
        precio: "S/. 30.00"
      },
      {
        nombre: "Chupe de cangrejo",
        descripcion: "Chupe tradicional elaborado con cangrejo.",
        precio: "S/. 30.00"
      },
      {
        nombre: "Caldo de pollo",
        descripcion: "Caldo tradicional de pollo.",
        precio: "S/. 18.00"
      }
    ]
  },
  {
    id: "tacu-tacu",
    nombre: "Tacu Tacu",
    items: [
      {
        nombre: "Tacu Tacu de lomo",
        descripcion: "Tacu tacu acompañado con lomo salteado.",
        precio: "S/. 32.00"
      },
      {
        nombre: "Tacu Tacu en salsa de mariscos",
        descripcion: "Tacu tacu cubierto con salsa de mariscos.",
        precio: "S/. 32.00"
      },
      {
        nombre: "Tacu Tacu a lo pobre",
        descripcion: "Tacu tacu acompañado con huevo, plátano y carne.",
        precio: "S/. 34.00"
      }
    ]
  },
  {
    id: "arroz",
    nombre: "Arroces",
    items: [
      {
        nombre: "Chaufa de pollo",
        descripcion: "Arroz chaufa preparado con pollo.",
        precio: "S/. 16.00"
      },
      {
        nombre: "Chaufa broaster",
        descripcion: "Arroz chaufa acompañado con pollo broaster.",
        precio: "S/. 18.00"
      },
      {
        nombre: "Chaufa con mariscos",
        descripcion: "Arroz chaufa preparado con variedad de mariscos.",
        precio: { personal: "S/. 28.00", familiar: "S/. 48.00" }
      },
      {
        nombre: "Arroz con mariscos",
        descripcion: "Arroz tradicional con mariscos frescos.",
        precio: { personal: "S/. 28.00", familiar: "S/. 55.00" }
      },
      {
        nombre: "Arroz con conchas negras",
        descripcion: "Arroz preparado con conchas negras.",
        precio: "S/. 32.00"
      },
      {
        nombre: "Cabrilla al ajo",
        descripcion: "Filete de cabrilla preparado al ajo.",
        precio: { personal: "S/. 28.00", familiar: "S/. 40.00" }
      }
    ]
  },
  {
    id: "sudados",
    nombre: "Sudados",
    items: [
      {
        nombre: "Cabrilla",
        descripcion: "Sudado tradicional preparado con cabrilla fresca en caldo criollo con tomate, cebolla, ají y especias.",
        precio: { personal: "S/. 30.00", familiar: "S/. 55.00" }
      },
      {
        nombre: "Cabrillón",
        descripcion: "Sudado elaborado con cabrillón entero cocinado al estilo tradicional peruano.",
        precio: "S/. 65.00"
      },
      {
        nombre: "Parihuela",
        descripcion: "Sopa marina concentrada preparada con pescado, mariscos y caldo de mariscos.",
        precio: { personal: "S/. 45.00", familiar: "S/. 70.00" }
      },
      {
        nombre: "Parihuela The Brothers",
        descripcion: "Versión especial de la casa con mayor variedad de pescados y mariscos.",
        precio: "S/. 55.00"
      }
    ]
  },
  {
    id: "tiraditos",
    nombre: "Tiraditos",
    items: [
      {
        nombre: "Ají amarillo",
        descripcion: "Láminas de pescado fresco bañadas en salsa cremosa de ají amarillo.",
        precio: "S/. 25.00"
      },
      {
        nombre: "En salsa de rocoto",
        descripcion: "Tiradito de pescado acompañado con salsa cremosa de rocoto.",
        precio: "S/. 25.00"
      },
      {
        nombre: "Caballa",
        descripcion: "Tiradito preparado con finas láminas de caballa fresca.",
        precio: "S/. 22.00"
      },
      {
        nombre: "Tricolor",
        descripcion: "Tiradito especial con combinación de tres salsas representativas de la casa.",
        precio: "S/. 30.00"
      }
    ]
  },
  {
    id: "criollos",
    nombre: "Criollos",
    items: [
      {
        nombre: "Carne aliñada",
        descripcion: "Carne marinada y cocinada al estilo tradicional norteño.",
        precio: "S/. 25.00"
      },
      {
        nombre: "Seco de chavelo",
        descripcion: "Plato típico piurano elaborado con carne y plátano verde majado.",
        precio: { personal: "S/. 25.00", familiar: "S/. 40.00" }
      },
      {
        nombre: "Majado de yuca",
        descripcion: "Yuca majada preparada al estilo norteño.",
        precio: { personal: "S/. 25.00", familiar: "S/. 40.00" }
      },
      {
        nombre: "Chicharrón de chancho",
        descripcion: "Cerdo crocante acompañado con guarniciones tradicionales.",
        precio: { personal: "S/. 27.00", familiar: "S/. 45.00" }
      },
      {
        nombre: "Seco de chavelo con chancho",
        descripcion: "Seco de chavelo acompañado con chicharrón de cerdo.",
        precio: { personal: "S/. 30.00", familiar: "S/. 50.00" }
      },
      {
        nombre: "Majado de yuca con chancho",
        descripcion: "Majado de yuca servido junto con chicharrón de chancho.",
        precio: { personal: "S/. 30.00", familiar: "S/. 50.00" }
      },
      {
        nombre: "Majariscos",
        descripcion: "Majado de yuca acompañado con mariscos salteados.",
        precio: { personal: "S/. 27.00", familiar: "S/. 45.00" }
      },
      {
        nombre: "Seco de chavelo con carne aliñada",
        descripcion: "Combinación de seco de chavelo con carne aliñada de la casa.",
        precio: "S/. 35.00"
      }
    ]
  },
  {
    id: "chicharrones",
    nombre: "Chicharrones",
    items: [
      {
        nombre: "Pota",
        descripcion: "Chicharrón de pota crocante acompañado con salsa criolla y guarnición.",
        precio: "S/. 18.00"
      },
      {
        nombre: "Pescado",
        descripcion: "Filetes de pescado empanizados y fritos hasta obtener una textura crocante.",
        precio: { personal: "S/. 27.00", familiar: "S/. 45.00" }
      },
      {
        nombre: "Pollo",
        descripcion: "Pollo frito estilo chicharrón acompañado con guarnición.",
        precio: { personal: "S/. 28.00", familiar: "S/. 50.00" }
      },
      {
        nombre: "Mixto",
        descripcion: "Combinación de pescado, pota y otros mariscos fritos.",
        precio: { personal: "S/. 30.00", familiar: "S/. 55.00" }
      },
      {
        nombre: "Jalea Real",
        descripcion: "Especialidad marina con variedad de mariscos fritos para compartir.",
        precio: "S/. 50.00"
      }
    ]
  },
  {
    id: "guarniciones",
    nombre: "Guarniciones",
    items: [
      {
        nombre: "Arroz blanco",
        descripcion: "Porción de arroz blanco.",
        precio: "S/. 5.00"
      },
      {
        nombre: "Chifles",
        descripcion: "Láminas de plátano verde fritas.",
        precio: "S/. 5.00"
      },
      {
        nombre: "Papas fritas",
        descripcion: "Porción de papas fritas.",
        precio: "S/. 6.00"
      },
      {
        nombre: "Camote / Yuca",
        descripcion: "Porción de camote o yuca cocida.",
        precio: "S/. 5.00"
      },
      {
        nombre: "Yuca frita",
        descripcion: "Porción de yuca frita.",
        precio: "S/. 6.00"
      },
      {
        nombre: "Patacones",
        descripcion: "Patacones de plátano verde.",
        precio: "S/. 8.00"
      },
      {
        nombre: "Ensalada fresca",
        descripcion: "Ensalada de vegetales frescos.",
        precio: "S/. 6.00"
      }
    ]
  },
  {
    id: "almuerzos",
    nombre: "Almuerzos",
    items: [
      {
        nombre: "Arroz a la cubana",
        descripcion: "Arroz acompañado con huevo frito y plátano.",
        precio: "S/. 12.00"
      },
      {
        nombre: "Cachema encebollada",
        descripcion: "Filete de cachema preparado con salsa de cebolla.",
        precio: "S/. 16.00"
      },
      {
        nombre: "Cabrilla frita o encebollada",
        descripcion: "Cabrilla preparada frita o con salsa encebollada.",
        precio: "S/. 25.00"
      },
      {
        nombre: "Pollo a la plancha",
        descripcion: "Pechuga de pollo cocinada a la plancha.",
        precio: "S/. 16.00"
      },
      {
        nombre: "Milanesa de pollo",
        descripcion: "Pechuga empanizada y frita.",
        precio: "S/. 18.00"
      },
      {
        nombre: "Churrasco con menestra",
        descripcion: "Carne a la plancha acompañada con menestra.",
        precio: "S/. 18.00"
      },
      {
        nombre: "Lomo saltado",
        descripcion: "Tradicional lomo salteado con cebolla, tomate y papas fritas.",
        precio: "S/. 20.00"
      },
      {
        nombre: "Lomo a lo pobre",
        descripcion: "Lomo acompañado con huevo, plátano y papas.",
        precio: "S/. 22.00"
      },
      {
        nombre: "Pollo saltado",
        descripcion: "Pollo salteado con cebolla, tomate y papas fritas.",
        precio: "S/. 18.00"
      }
    ]
  },
  {
    id: "combos",
    nombre: "Combos",
    items: [
      {
        nombre: "Arma tu Combo",
        descripcion: "Elige 2 platos e incluye una bebida (chicha morada, limonada o clarito). Opciones: Ceviche + Chicharrón, Arroz con mariscos, Seco de chavelo, Chaufa de mariscos.",
        precio: "S/. 45.00"
      }
    ]
  },
  {
    id: "rondas",
    nombre: "Rondas",
    items: [
      {
        nombre: "Ronda Criolla",
        descripcion: "Selección de especialidades criollas para compartir.",
        precio: "S/. 65.00"
      },
      {
        nombre: "Ronda Marina",
        descripcion: "Variedad de platos marinos para compartir.",
        precio: "S/. 60.00"
      },
      {
        nombre: "Ronda The Brothers",
        descripcion: "Selección especial de platos representativos del restaurante.",
        precio: "S/. 65.00"
      },
      {
        nombre: "Ronda Cevichera",
        descripcion: "Combinación de ceviches y especialidades marinas.",
        precio: "S/. 70.00"
      },
      {
        nombre: "Ronda Mar y Tierra",
        descripcion: "Combinación de platos marinos y criollos para compartir.",
        precio: "S/. 75.00"
      }
    ]
  },
  {
    id: "bebidas",
    nombre: "Bebidas",
    items: [
      {
        nombre: "Clarito",
        descripcion: "Bebida tradicional.",
        precio: "S/. 8.00"
      },
      {
        nombre: "Maracuyá",
        descripcion: "Jugo natural de maracuyá.",
        precio: "S/. 9.00"
      },
      {
        nombre: "Chicha morada",
        descripcion: "Bebida tradicional peruana.",
        precio: "S/. 8.00"
      },
      {
        nombre: "Limonada",
        descripcion: "Limonada natural.",
        precio: "S/. 8.00"
      },
      {
        nombre: "Inca Kola o Coca-Cola 1L",
        descripcion: "Gaseosa de 1 litro.",
        precio: "S/. 8.00"
      },
      {
        nombre: "Inca Kola o Coca-Cola 2L",
        descripcion: "Gaseosa de 2 litros.",
        precio: "S/. 13.00"
      },
      {
        nombre: "Pepsi 1½ L",
        descripcion: "Gaseosa Pepsi de litro y medio.",
        precio: "S/. 9.00"
      },
      {
        nombre: "Pepsi 500 ml",
        descripcion: "Gaseosa Pepsi presentación personal.",
        precio: "S/. 4.00"
      },
      {
        nombre: "Pilsen",
        descripcion: "Cerveza nacional.",
        precio: "S/. 9.00"
      },
      {
        nombre: "Cristal",
        descripcion: "Cerveza nacional.",
        precio: "S/. 8.00"
      },
      {
        nombre: "Cusqueña",
        descripcion: "Cerveza premium nacional.",
        precio: "S/. 9.00"
      },
      {
        nombre: "Agua",
        descripcion: "Agua embotellada.",
        precio: "S/. 2.00"
      }
    ]
  }
];
