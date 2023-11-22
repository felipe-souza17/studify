import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <Footer />
    </>
  );
}
