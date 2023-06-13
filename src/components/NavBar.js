
export default function NavBar() {
    return (
    <nav className="navbar">
        <div className="logo">logo</div>
        <ul className="nav-items">
            <li className="nav-link">
                <a href="weather.html">Начало</a>
            </li>
            <li className="nav-link">
                <a href="#">Времето</a>
            </li>
            <li className="nav-link">
                <a href="#">Градина</a>
                <ul className="dropdown-menu">
                    <li><a href="index-1.html">Цветна градина</a></li>
                    <li><a href="index-2.html">Зеленчукова градина</a></li>
                    <li><a href="index-3.html">Овощна градина</a></li>
                </ul>
            </li>
            <li className="nav-link">
                <a href="#">Регистрация</a>
            </li>
            <li className="nav-link">
                <a href="#">Влез</a>
            </li>
            <li className="nav-link">
                <a href="#">Календар</a>
            </li>
        </ul>
    </nav>
    );
}