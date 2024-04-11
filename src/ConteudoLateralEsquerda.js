import logo from './imagens/images.png';
import Menu from './TextMenu';
import './ConteudoLateralEsquerda.css';
import { CgAddR } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { TbBrandMessenger } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { GiGoat } from "react-icons/gi";

export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img src={logo} classesName="" alt='Logo' />
            
            <ul>
                <Menu  nome="Home" icone1={<IoIosArrowDown/>}  classes="text-menu" icone={<GoHomeFill/>} />

                <Menu nome="Explore" classes="text-menu" icone={<FiSearch/>}/>

                <Menu nome="Mensagem" classes="text-menu" icone= {<TbBrandMessenger/>}/>

                <Menu nome="Notificações" classes="text-menu" icone={<FaRegHeart/>}/>

                <Menu nome="Criar" icone1={<IoIosArrowDown/>} classes="text-menu" icone={<CgAddR/>}/>

                
                <Menu className="profile" nome="Perfil" classes="text-menu" icone={<GiGoat/>}/>
            </ul>
        </div>
    )
}

// export default ConteudoLateralEsquerda;