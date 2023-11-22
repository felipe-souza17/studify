import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Book, ChartLine, FirstAid } from "@phosphor-icons/react";

export default function Materias() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-gradient-to-t from-[#121214] to-[#73bce385] p-8 py-16 mx-auto justify-between text-white">
        <section className="mx-auto text-center">
          <span className="py-4 px-6 bg-gradient-to-t from-[#3a6896] to-[#00a6ff] rounded-full">
            1
          </span>
          <h2 className="text-3xl font-medium mt-10">Quem somos nós</h2>
          <p className="w-3/4 font-light mt-10 mx-auto">
            O Studify é muito mais do que apenas um aplicativo de vídeos
            educacionais. É a plataforma definitiva que coloca nas mãos dos
            estudantes, de todas as idades e níveis de ensino, as ferramentas
            necessárias para conquistar o sucesso acadêmico. Nosso compromisso é
            transformar a jornada de aprendizado, tornando-a mais acessível,
            personalizada e envolvente do que nunca.
          </p>
        </section>
      </main>
      <section className="flex flex-col p-8 py-16 mx-auto text-white">
        <div className="my-8">
          <h3 className="font-medium text-base">
            Recomendações personalizadas
          </h3>
          <p className="font-light text-sm w-2/6 mt-4">
            &#8226; Acreditamos que cada estudante é único. Por isso, oferecemos
            recomendações de conteúdo com base em seus interesses, nível de
            conhecimento e objetivos de aprendizado. O Studify se adapta a você,
            não o contrário.
          </p>
        </div>
        <div className="my-8 self-end w-1/2">
          <h3 className="font-medium text-base">Aprenda no seu Ritmo</h3>
          <p className="font-light text-sm  mt-4">
            &#8226; Aulas em horários rígidos são coisa do passado. Com o
            Studify, você pode assistir aos vídeos e realizar cursos no seu
            próprio tempo, do conforto de sua casa ou onde quer que esteja. A
            aprendizagem nunca foi tão flexível.
          </p>
        </div>
        <div className="my-8">
          <h3 className="font-medium text-base">Comunidade Engajada</h3>
          <p className="font-light text-sm w-2/6 mt-4">
            &#8226; Estudar não precisa ser uma atividade solitária. Conecte-se
            com outros estudantes, compartilhe conhecimento e receba apoio de
            uma comunidade apaixonada por aprender.
          </p>
        </div>
      </section>
      <section className="text-center  text-white">
        <span className="py-4 px-6 bg-gradient-to-t from-[#3a6896] to-[#00a6ff] rounded-full">
          2
        </span>
        <h2 className="text-3xl font-medium mt-10">Infográfico</h2>
        <div className="flex mx-auto">
          <div className="flex flex-col text-center w-1/2 bg-[#1E1E1E] p-8 my-8 rounded-3xl mx-4">
            <Book className="mx-auto" size={96} color="#73BBE3" />
            <h3 className="font-black text-3xl">Causas</h3>
            <p className="font-light text-sm">
              As causas do TDAH ainda não são totalmente conhecidas, mas
              acredita-se que sejam de natureza neurobiológica. Estudos apontam
              que fatores genéticos, ambientais e biológicos podem contribuir
              para o desenvolvimento do transtorno. Fatores genéticos: Estudos
              de famílias e gêmeos sugerem que o TDAH tem uma forte base
              genética. Crianças com um ou mais pais com TDAH têm maior
              probabilidade de desenvolver o transtorno. Fatores ambientais:
              Fatores ambientais, como exposição a toxinas ou infecções durante
              a gravidez, também podem desempenhar um papel no desenvolvimento
              do TDAH. Fatores biológicos: Alterações em certas áreas do
              cérebro, como o córtex pré-frontal, podem contribuir para os
              sintomas do TDAH.
            </p>
          </div>
          <div className="flex flex-col  text-center w-1/2 bg-[#1E1E1E] p-8 my-8 rounded-3xl mx-4">
            <FirstAid className="mx-auto" size={96} color="#73BBE3" />
            <h3 className="font-black text-3xl">Sintomas</h3>
            <p className="font-light text-sm">
              O TDAH é caracterizado por dois grupos de sintomas principais:
              desatenção e hiperatividade/impulsividade. Sintomas de desatenção:
              Dificuldade em manter a atenção em tarefas ou atividades.
              Facilidade em se distrair com estímulos irrelevantes Dificuldade
              em seguir instruções e completar tarefas. Dificuldade em organizar
              tarefas e atividades. Perda de objetos pessoais. Dificuldade em
              prestar atenção em detalhes
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col text-center  bg-[#1E1E1E] p-8 my-8 rounded-3xl mx-4">
            <ChartLine className="mx-auto" size={96} color="#73BBE3" />
            <h3 className="font-black text-3xl">Dados de pesquisa</h3>
            <p className="font-light text-sm">
              De acordo com a Organização Mundial da Saúde (OMS), o TDAH é um
              dos transtornos mentais mais comuns da infância. Estima-se que 3 a
              5% das crianças em idade escolar sejam afetadas pelo transtorno.
              No Brasil, um estudo realizado pelo Instituto Brasileiro de
              Neurologia de São Paulo (IBENS) em 2019, estima que 3,5 milhões de
              crianças e adolescentes com idade entre 4 e 17 anos tenham TDAH.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
