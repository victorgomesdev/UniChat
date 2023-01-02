import Imagem from '../img/logotipo.png'
import '../styles/HeaderStyle.css'

export default function Header(){
    return(
        <div className='header'>
            <img src={Imagem} alt="Logo"/>
            <input placeholder='Pesquise aqui'/>
        </div>
    )
}