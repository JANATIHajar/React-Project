import React from "react";
import "./menu.css";

const MenuVertical = () => {
    return (
        <nav className="vertical-navbar">
            <ul className="navbar">
                <li >
                    <a href="/" >
                        <img src="../icons/soccer-field.png" alt="   "/>
                    </a>
                </li>
                <li >
                    <a href="/client" >
                        <img src="../icons/clients.png" alt="   "/>
                    </a>
                </li>
                <li>
                    <a href="/résérvation" >
                        <img src="../icons/reservation.png" alt="   "/>
                    </a>
                </li>
                <li>
                    <a href="/calendrie" >
                        <img src="../icons/calendar.png" alt="   "/>
                    </a>
                </li>
                <li>
                    <a href="/revue" >
                        <img src="../icons/review.png" alt="   "/>
                    </a>
                </li>
                <li>
                    <a href="/statistique" >
                        <img src="../icons/graph.png" alt="   "/>
                    </a>
                </li>
                <li>
                    <a href="/abonnement">
                        <img src="../icons/money.png" alt="   "/>
                    </a>
                </li>
                <li>
                    <a href="/codeQR" >
                        <img src="../icons/qr-code.png" alt="   "/>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default MenuVertical;
