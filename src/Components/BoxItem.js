import '../Styles/boxItem.css'
import { AiOutlineStar } from 'react-icons/ai'
export default function BoxItem({ item }) {
    return (
        <div className="box-item"> 
            <div>
                {/* Imagen */}
                <img src={item.photo.replace("https://a0.muscache.com/im/pictures/", "").replace("?im_w=720", "")} alt="Imagen" />
                {/* Ubicacion */}
                <div className="ubicacionRating">
                    {/* Ubicacion */}
                    <p className='ubicacion'>{item.city}-{item.country}</p>
                    {/* Rating */}
                    <p className='rating'><AiOutlineStar />{item.rating} </p>
                </div>
                
            </div>
            <div className='tipoYcama'>
                {/* Tipo */}
                <p className='type'>{item.type} - </p>
                {/* Camas */}
                <p className='bed'>- Camas: {item.beds}</p>
            </div>
            {/* Titulo y super hsot*/}
            <div className="container">
                <p>{item.title}</p>
                {/* SuperHost */}
                <div className={`superHost ${item.superHost ? 'show' : ''}`}>
                    {item.superHost && <span>SUPER HOST</span>}
                </div>
            </div>

        </div>
    )
}