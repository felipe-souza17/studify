import Navbar from "../components/Navbar";
import estudante from '../assets/estudando.jpg'

export default function Home() {
    return (
        <>
            <Navbar/>
            <main className="flex bg-[#121214] p-8 py-16 mx-auto justify-between text-white">
                <div className="p-4 w-1/2">
                    <h1 className="text-8xl font-black">O seu lugar de <span className="text-[#73BBE3]">estudos é aqui.</span></h1>
                    <p className="font-light text-xl my-8">Comece agora a fazer suas próprias anotações de matérias e conteúdos 
                    para estudar e divulgue para seus amigos.</p>
                    <button className="bg-[#73BBE3] px-6 py-4 rounded-md w-full font-bold text-3xl">Comece agora!</button>
                </div>
                <img className="w-[600px] h-[600px] rounded-s-full rounded-b-full object-cover" src={estudante} alt="Imagem de um aluno com livro aberto usando óulos para estudar" />
            </main>
        </>
    )
}