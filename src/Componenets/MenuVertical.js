import React from "react";


const MenuVertical = () => {
    return (
        <div className="fixed top-0">
            <div className=" h-screen sticky min-w-[70px] px-2 py-3 flex flex-col bg-white border-r">
                <ul className="flex-1 flex flex-col justify-around items-center">
                    <li>
                        <a href="/terrain" >
                            <img  src="../icons/soccer-field.png" class="h-7 object-contain" alt="   "/>
                        </a>
                    </li>
                    <li >
                        <a href="/client" >
                            <img  src="../icons/clients.png"  class="h-7 object-contain" alt="   "/>
                        </a>
                    </li><li >
                    <a href="/reservation" >
                        <img  src="../icons/reservation.png" class="h-7 object-contain" alt="   "/>
                    </a>
                </li><li >
                    <a href="/calendrie" >
                        <img  src="../icons/calendar.png" class="h-7 object-contain" alt="   "/>
                    </a>
                </li><li >
                    <a href="/revue" >
                        <img  src="../icons/review.png" class="h-7 object-contain" alt="   "/>
                    </a>
                </li><li >
                    <a href="/statistiquee" >
                        <img  src="../icons/graph.png"class="h-7 object-contain"  alt="   "/>
                    </a>
                </li><li >
                    <a href="/abonnements" >
                        <img  src="../icons/money.png" class="h-7 object-contain" alt="   "/>
                    </a>
                </li><li >
                    <a href="/codeQR" >
                        <img  src="../icons/qr-code.png" class="h-7 object-contain" alt="   "/>
                    </a>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default MenuVertical;
