const menu = [
    /*array =  ex: características do produto*/
    {
        id: 1,
        title: "Nome Real",
        category: "Sobre",
        img: "./imagens/week.webp",
        desc: `The Weeknd nasceu como Abel Makkonen Tesfaye em 16 de fevereiro de 1990, em Toronto, Canadá. Criado por sua mãe e avó, ele adotou o nome artístico após sair de casa aos 17 anos, simbolizando um "fim de semana" que mudou sua vida.`,
        /* alt z= quebra d linha*/
    },
    {
        id: 2,
        title: "Início da Carreira",
        category: "Sobre",
        img: "./imagens/inicio_carreira.png",
        desc: `The Weeknd começou postando faixas no YouTube em 2010, mantendo-se anônimo. Suas músicas rapidamente chamaram atenção, inclusive de Drake, que o ajudou a ganhar destaque na cena musical de Toronto e a construir sua carreira internacional.`,
    },
    {
        id: 3,
        title: "Primeiro Álbum",
        category: "Sobre",
        img: "./imagens/priemeiro_album.png",
        desc: `O álbum de estreia de The Weeknd, Kiss Land (2013), misturou R&B e eletrônico, criando um som sombrio e introspectivo. Embora tenha tido um sucesso comercial moderado, estabeleceu sua base de fãs e sua identidade única.`,
    },
    {
        id: 4,
        title: "Estilo Musical",
        category: "Sobre",
        img: "./imagens/estilo_musical.png",
        desc: `Seu som mistura R&B alternativo, pop e eletrônico, com letras que exploram solidão, vícios e relacionamentos complicados. Ele é conhecido por criar uma atmosfera melancólica, combinando vocais suaves com batidas modernas e produções atmosféricas.`,
    },
    {

        id: 5,
        title: "Álbum de Sucesso",
        category: "Sobre",
        img: "./imagens/beautybehind.png",
        desc: `Beauty Behind the Madness (2015) foi o álbum que catapultou The Weeknd ao estrelato global. Inclui hits como "Can't Feel My Face" e "The Hills", que dominaram as paradas e solidificaram sua presença na música pop.`,
    },
    {
        id: 6,
        title: "Turnê Mundial",
        category: "Sobre",
        img: "./imagens/turne_sucesso.png",
        desc: `6. A After Hours Til Dawn Tour (2022-2023) foi uma de suas maiores, trazendo uma experiência visual e sonora impactante. Inspirada no álbum After Hours, a turnê contou com cenários futuristas e shows em estádios ao redor do mundo.`,
    },
    {
        id: 7,
        title: "Impacto na Moda",
        category: "Sobre",
        img: "./imagens/imacto_moda.png",
        desc: `Durante a era After Hours, The Weeknd adotou um visual icônico com jaquetas vermelhas e óculos escuros, que se tornaram uma marca registrada. Ele também colaborou com marcas de moda como Puma e H&M, influenciando o estilo global.`,
    },
    {
        id: 8,
        title: "Super Bowl",
        category: "Sobre",
        img: "./imagens/super_bowl.png",
        desc: `Em 2021, ele se apresentou no intervalo do Super Bowl LV, investindo pessoalmente US$ 7 milhões no show. Sua performance foi um espetáculo visual, destacando sua criatividade artística e consolidando sua presença no cenário musical global.`,
    },
    {
        id: 9,
        title: "Colaborações",
        category: "Sobre",
        img: "./imagens/colaboracoes.png",
        desc: `The Weeknd colaborou com vários artistas renomados, como Daft Punk, Ariana Grande e Drake. Suas colaborações sempre resultam em grandes sucessos, misturando seu estilo único com o de outros gêneros e expandindo seu alcance.`,
    },
    {
        id: 10,
        title: "Influências",
        category: "Sobre",
        img: "./imagens/inspiracoes_thewek.png",
        desc: ` Entre suas maiores influências estão Michael Jackson, Prince e David Bowie. Ele incorpora o legado desses artistas em seu trabalho, misturando gêneros e explorando temas sombrios e emocionais em suas músicas e performances.`,
    },
    {
        id: 11,
        title: "Carreira Cinematográfica",
        category: "Sobre",
        img: "./imagens/carreira_cine.png",
        desc: `The Weeknd fez uma participação especial no filme Uncut Gems (2019), interpretando a si mesmo. Essa aparição marcou seu interesse em explorar o cinema como uma nova forma de expressão artística, além da música.`,
    },
    {
        id: 12,
        title: "Recorde no Billboard Hot 100",
        category: "Sobre",
        img: "./imagens/record_billboard.png",
        desc: `"Blinding Lights" quebrou recordes no Billboard Hot 100, ficando no top 10 por 90 semanas consecutivas. A música se tornou um dos maiores sucessos da década e solidificou sua relevância na indústria musical.`,
    },
    {
        id: 13,
        title: "Filantropia",
        category: "Sobre",
        img: "./imagens/filantrropia.png",
        desc: `The Weeknd é um defensor ativo de várias causas sociais. Ele doou milhões de dólares para apoiar causas como Black Lives Matter e iniciativas humanitárias, demonstrando seu compromisso com a justiça social e a igualdade.`,
    },
    {
        id: 14,
        title: "Nome Artístico",
        category: "Sobre",
        img: "./imagens/nome_artistico.png",
        desc: `O nome “The Weeknd” foi inspirado por sua fuga de casa aos 17 anos. Originalmente ele queria usar "The Weekend", mas teve que remover a letra "e" para evitar problemas de direitos autorais com outra banda canadense.`,
    },
    {
        id: 15,
        title: "Álbum Visual",
        category: "Sobre",
        img: "./imagens/album_visual.png",
        desc: `Com After Hours (2020), The Weeknd criou um álbum visual, onde cada videoclipe forma uma narrativa interconectada. Essa abordagem inovadora elevou sua música para uma nova forma de arte audiovisual, explorando temas profundos.`,
    },
    {
        id: 16,
        title: "Prêmios",
        category: "Sobre",
        img: "./imagens/premios.png",
        desc: `The Weeknd acumulou uma série de prêmios importantes, incluindo quatro Grammys, 20 Billboard Music Awards e uma indicação ao Oscar. Seu sucesso é tanto comercial quanto artístico, refletindo seu impacto global na música e na cultura pop.`,
    

    },
    {
        id: 1,
        title: "Kiss Land (2013)",
        category: "Álbuns",
        img: "./imagens/kissland.png",
        desc: "Estilo musical: O álbum de estreia de The Weeknd é repleto de uma sonoridade sombria, combinando R&B alternativo com elementos de eletrônico. Kiss Land explora temas de isolamento, fama e desejo, refletindo suas experiências com o sucesso repentino. As letras tratam de relacionamentos complicados e solidão."
    },
    {
        id: 2,
        title: "Beauty Behind the Madness (2015)",
        category: "Álbuns",
        img: "./imagens/beautybehind.png",
        desc: "Estilo musical: Este álbum foi o ponto de virada na carreira de The Weeknd, misturando pop com o R&B obscuro que o tornou famoso. Com hits como “Can’t Feel My Face” e “The Hills”, ele explora o sucesso, o vício e o amor problemático. Beauty Behind the Madness foi um sucesso massivo, abrindo portas para colaborações com artistas de renome."
    },
    {
        id: 3,
        title: "Starboy (2016)",
        category: "Álbuns",
        img: "./imagens/starboy.png",
        desc: "O terceiro álbum de The Weeknd expandiu ainda mais sua presença no pop global. Com influências de música eletrônica e colaborações com Daft Punk, Starboy aborda os altos e baixos da fama e a luta interna do artista. O álbum também traz reflexões sobre luxos e excessos."
    },
    {
        id: 4,
        title: "My Dear Melancholy (2018)",
        category: "Álbuns",
        img: "./imagens/mydearmelancholy.png",
        desc: "Este EP é um retorno ao estilo sombrio e emocional que The Weeknd explorou no início de sua carreira. Com uma abordagem mais introspectiva, ele foca em temas de arrependimento, dor de amor e vulnerabilidade. My Dear Melancholy oferece uma visão crua de seus sentimentos pessoais e é considerado um dos trabalhos mais emocionais do artista."
    },
    {
        id: 5,
        title: "After Hours (2020)",
        category: "Álbuns",
        img: "./imagens/afterhours.png",
        desc: "Um dos álbuns mais ambiciosos de The Weeknd, After Hours mistura synthwave, R&B e pop. Com temas de solidão, arrependimento e decadência, o álbum criou uma narrativa visual impressionante que foi reforçada pelos videoclipes e pela estética única da era. Sucessos como “Blinding Lights” e “Heartless” dominaram as paradas por meses."
    },
    {
        id: 6,
        title: "Dawn FM (2022)",
        category: "Álbuns",
        img: "./imagens/dawnfm.png",
        desc: "Dawn FM traz uma experiência conceitual em que The Weeknd imagina estar em uma estação de rádio enquanto transita entre a vida e a morte. Misturando pop, R&B e influências dos anos 80, o álbum é introspectivo, explorando temas de redenção, arrependimento e aceitação. A produção inclui colaborações com Jim Carrey e Tyler, the Creator."
    },
    {
        id: 1,
        title: "Grammy Awards",
        category: "Prêmios",
        img: "./imagens/grammy_awards.png",
        desc: "The Weeknd ganhou três Grammy Awards ao longo de sua carreira, destacando sua excelência musical. Em 2016, ele venceu duas categorias com o álbum Beauty Behind the Madness: Melhor Álbum Urbano Contemporâneo e Melhor Performance R&B com “Earned It”. Ele também ganhou outro Grammy por Starboy como Melhor Álbum Urbano Contemporâneo em 2018. Sua ausência nas indicações ao Grammy de 2021 causou controvérsia, mesmo com o sucesso massivo de After Hours."
    },
    {
        id: 2,
        title: "Billboard Music Awards",
        category: "Prêmios",
        img: "./imagens/billborad_png.jpg",
        desc: "Com uma forte presença nos Billboard Music Awards, The Weeknd ganhou um total impressionante de 21 prêmios. Em 2021, ele foi o grande destaque da premiação, levando 10 prêmios, incluindo o de Melhor Artista, Melhor Álbum R&B por After Hours, e Melhor Canção Hot 100 por “Blinding Lights”. O impacto de The Weeknd no cenário pop e R&B foi amplamente reconhecido pelo Billboard, consolidando sua posição como um dos maiores artistas da década."
    },
    {
        id: 3,
        title: "American Music Awards (AMAs)",
        category: "Prêmios",
        img: "./imagens/american_music.png",
        desc: "Nos American Music Awards, The Weeknd já acumulou 6 prêmios. Em 2020, ele foi um dos grandes vencedores da noite, levando três troféus, incluindo o de Artista Masculino Favorito de Soul/R&B. O sucesso de “Blinding Lights” e After Hours também rendeu a ele prêmios de Álbum Favorito de Soul/R&B e Canção Favorita de Soul/R&B. As AMAs têm sido uma plataforma importante para reconhecer seu alcance global e impacto na música."
    },
    {
        id: 4,
        title: "MTV Video Music Awards (VMAs)",
        category: "Prêmios",
        img: "./imagens/mtv_video_musica.png",
        desc: "The Weeknd teve destaque no MTV Video Music Awards, conquistando 5 prêmios. Entre suas vitórias mais notáveis, está a de Melhor Vídeo do Ano em 2020 com “Blinding Lights”, uma música que revolucionou o cenário da música pop. Além disso, ele venceu em categorias como Melhor Vídeo de R&B e Melhores Efeitos Visuais. Seus vídeos musicais são conhecidos por suas narrativas visuais impressionantes, o que lhe rendeu amplo reconhecimento no VMAs."
    },
    {
        id: 5,
        title: "Juno Awards",
        category: "Prêmios",
        img: "./imagens/juno_awards.png",
        desc: "Sendo canadense, The Weeknd teve grande reconhecimento em seu país natal com os Juno Awards, tendo vencido 15 prêmios. Sua carreira começou a ganhar destaque no Canadá, e ao longo dos anos, ele continuou a ser premiado por sua contribuição à música. O Juno Awards de 2021 foi especialmente significativo, quando ele ganhou cinco prêmios, incluindo Artista do Ano, Álbum do Ano com After Hours e Single do Ano com “Blinding Lights”."   
    },
    {
        id: 6,
        title: "iHeartRadio Music Awards",
        category: "Prêmios",
        img: "./imagens/iheart.png",
        desc: "Nos iHeartRadio Music Awards, The Weeknd é um dos artistas mais premiados, com 13 vitórias. Ele recebeu prêmios importantes como Artista do Ano e Canção do Ano por “Blinding Lights”. O impacto da sua música nas rádios ao redor do mundo tem sido imenso, e suas canções frequentemente dominam as paradas globais, tornando-o um favorito do iHeartRadio"     
    },
    {
        id: 7,
        title: "ASCAP Pop Music Awards",
        category: "Prêmios",
        img: "./imagens/ascap.png",
        desc: "The Weeknd também é reconhecido por sua habilidade como compositor. Nos ASCAP Pop Music Awards, ele ganhou diversos prêmios por suas composições, incluindo o prêmio de Compositor do Ano em 2016. Suas letras e melodias cativantes, misturadas com sua produção única, contribuíram para seu sucesso contínuo na indústria."     
    },
    {
        id: 8,
        title: "Soul Train Music Awards",
        category: "Prêmios",
        img: "./imagens/soul_train.png",
        desc: "The Weeknd foi premiado no Soul Train Music Awards, onde venceu categorias como Melhor Artista Masculino de R&B/Soul. Sua conexão com o R&B moderno e sua habilidade de inovar dentro do gênero são amplamente reconhecidas nessa premiação, que celebra a música afro-americana."      
    },
    {
        id: 9,
        title: "People's Choice Awards",
        category: "Prêmios",
        img: "./imagens/peoplechoice.png",
        desc: "No People's Choice Awards, The Weeknd conquistou prêmios em categorias votadas diretamente pelos fãs, incluindo Artista Masculino Favorito e Álbum Favorito com After Hours. A conexão do artista com seu público e o impacto emocional de suas músicas são sempre reforçados em prêmios que envolvem voto popular."      
    },
    {
        id: 10,
        title: "BET Awards",
        category: "Prêmios",
        img: "./imagens/bet_awards.png",
        desc: "The Weeknd também foi reconhecido no BET Awards, onde ganhou prêmios de Melhor Artista Masculino de R&B/Pop. Sua influência dentro da comunidade negra e seu impacto no R&B são refletidos nesse prêmio, que celebra artistas afro-americanos e outras minorias na música, cinema e esportes."         
    },
    {
        id: 11,
        title: "Brit Awards",
        category: "Prêmios",
        img: "./imagens/brit_awards.png",
        desc: "O sucesso de The Weeknd atravessa fronteiras, e ele foi reconhecido no Reino Unido com o Brit Award de Artista Internacional Masculino em 2021. Isso confirma seu alcance global, especialmente com o impacto de After Hours e “Blinding Lights” em várias partes do mundo."    
    },
    {
        id: 12,
        title: "Academy Awards (Oscar)",
        category: "Prêmios",
        img: "./imagens/academy_awards.png",
        desc: "Em 2016, The Weeknd foi indicado ao Oscar pela música “Earned It”, da trilha sonora de Cinquenta Tons de Cinza. Embora não tenha vencido, a indicação ao prêmio de Melhor Canção Original marcou uma grande conquista para o artista, destacando sua habilidade de criar músicas que vão além do mundo da música pop e R&B."     
    },
    {
        id: 13,
        title: "Golden Globe Awards",
        category: "Prêmios",
        img: "./imagens/golden_globe.png",
        desc: "The Weeknd foi indicado ao Globo de Ouro pela mesma música “Earned It”. Assim como no Oscar, a indicação ao Globo de Ouro é um reconhecimento de seu talento não apenas como músico, mas como compositor para trilhas sonoras de grandes produções cinematográficas."   
    },
    {
        id: 14,
        title: "Guinness World Records",
        category: "Prêmios",
        img: "./imagens/guinnes_world.png",
        desc: "The Weeknd foi reconhecido pelo Guinness World Records por ser o primeiro artista a manter uma música no Top 10 da Billboard Hot 100 por um ano inteiro com “Blinding Lights”. Esse feito impressionante solidificou ainda mais seu legado na indústria musical e no cenário global."   
    },
    {
        id: 15,
        title: "Latin American Music Awards",
        category: "Prêmios",
        img: "./imagens/latin_american.png",
        desc: "The Weeknd fez história em 2021 ao colaborar com Maluma em “Hawái (Remix)”, que lhe rendeu indicações e prêmios nos Latin American Music Awards. A colaboração entre culturas e a transição para o mercado latino aumentaram sua popularidade e alcance global."   
    },
    {
        id: 16,
        title: "MOBO Awards",
        category: "Prêmios",
        img: "./imagens/mobo_awards.png",
        desc: "Os MOBO Awards, que celebram a música de origem negra, também reconheceram o talento de The Weeknd com prêmios de Melhor Artista Internacional. Seu trabalho contínuo no R&B e suas contribuições ao gênero têm um impacto significativo, o que levou ao reconhecimento em premiações que celebram diversidade e excelência na música."   
    },
    {
        id: 1,
        title: "Popular",
        category: "Destaques",
        img: "./imagens/popular.png",
        desc: "“Popular” com Madonna e Playboi Carti, da trilha sonora de The Idol. Essa faixa continua em alta devido à colaboração de grandes nomes e sua batida envolvente." 
    },
    {
        id: 2,
        title: "Die For You",
        category: "Destaques",
        img: "./imagens/DieforYou.png",
        desc: "“Die For You” que foi regravada recentemente e tem conquistado novos ouvintes, mantendo-se relevante nas paradas por sua letra impactante e melodia marcante."    
    },
    {
        id: 3,
        title: "Creepin",
        category: "Destaques",
        img: "./imagens/creepin.png",
        desc: "“Creepin” em parceria com Metro Boomin e 21 Savage, mantém-se entre as favoritas por misturar suavemente R&B e hip-hop, sendo um sucesso duradouro ao longo do ano."   
    },
];
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
 

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price"></h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
 

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["todos"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
   

      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "todos") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}