import { Books, GithubLogo, InstagramLogo } from "@phosphor-icons/react";
import logoFatec from '../assets/logo-fatec-branco.png'

export default function Footer() {
    return (
        <footer className="bg-[#0E0E10] p-8 text-white font-thin flex items-center justify-between mt-24">
            <div className="font-bold flex flex-col text-[#73BBE3] items-center">
                <Books color="#73BBE3" size={64} />
                <span className="font-bold ml-4 text-4xl">Studify</span>
            </div>
            <div className="flex gap-20 font-medium text-2xl">
                <span>Início </span>
                <span>•</span>
                <span>Cadastrar</span>
                <span>•</span>
                <span>Contato</span>
                <span>•</span>
                <span>Sobre nós</span>
            </div>
            <div className="flex flex-col gap-6 font-medium text-2xl">
                <p>Redes Sociais</p>
                <div className="flex gap-10">
                <GithubLogo size={32} color="#fffafa" />
                <InstagramLogo size={32} color="#fffafa" />
                <img className="w-32" src={logoFatec} alt="Logo da FATEC versão branca" />
                </div>
            </div>
        </footer>
    )
}