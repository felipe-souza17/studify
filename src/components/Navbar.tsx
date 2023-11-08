import { Books } from "@phosphor-icons/react";

export default function Navbar() {
    return (
        <nav className="bg-[#0E0E10] p-8 text-white font-thin flex items-center justify-between">
            <div className="font-bold flex text-[#73BBE3] items-center">
                <Books color="#73BBE3" size={64} />
                <span className="font-bold ml-4 text-4xl">Studify</span>
            </div>
            <div className="flex gap-28">
                <span>Início</span>
                <span>Matérias</span>
            </div>
            <div className="flex gap-20">
                <button>
                    Logar
                </button>
                <button className="bg-[#73BBE3] px-6 py-2 rounded-md">
                    Cadastrar
                </button>
            </div>
        </nav>
    )
}