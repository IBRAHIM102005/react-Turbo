import "./Header.css"
import { Link } from "react-router-dom"
export function Header() {
    return (
        <header className="header">
            <div className="logo"><Link to="/" > TURBO.AZ</Link></div>
            <ul className="nav-links">
                <li> <Link to="/autos" > Bütün elanlar</Link></li>
                <li>Dilerlər</li>
                <li>Avtokatalog</li>
                <li>Moto</li>
                <li>Ehtiyat hissələr və aksesuarlar</li>
                <li>İcarə</li>
                <li><form action=""><select name="cars" id="carSelect" className="selectCar">
                    <option value="all">Bütün maşınlar</option>
                    <option value="bmw">Əfsanələr</option>
                    <option value="audi">Audi</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="mercedes">Land Rover</option>
                    <option value="mercedes">Ferrari</option>
                </select></form> </li>
            </ul>
            <button className="new-ad-button">

                Yeni elan
            </button>
        </header>
    )

}