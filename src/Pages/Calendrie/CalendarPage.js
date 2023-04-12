import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import NavbarHorizental from "../../Componenets/NavbarHorizental";
import MenuVertical from "../../Componenets/MenuVertical";


const locales = {

    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});
const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2023, 6, 1),
        end: new Date(2023, 6, 23),
    },
    {
        title: "Vacation",
        start: new Date(2023, 4, 7),
        end: new Date(2023, 4, 10),
    },
    {
        title: "Conference",
        start: new Date(2023, 6, 20),
        end: new Date(2023, 6, 23),
    },
];
function CalendarPage() {
    const [forceOpen, setForceOpen] = useState(false);
    const onSelectEvent = (e: any) => {
        console.log(e);
        // setValue("title", e.title);
        // setValue("startDate", timestampToDatetimeInputString(e.start.getTime()));
        // setValue("endDate", timestampToDatetimeInputString(e.end.getTime()));
        // setForceOpen(true);
    };
    return(
        <>  <main className="contents">
            <NavbarHorizental/>
            <MenuVertical/>

            <div className="py-12 px-5 container mt-5 ">

                <Calendar
                    localizer={localizer}
                    selectable
                    messages={{
                        month: "Mois",
                        week: "Semaine",
                        day: "Jour",
                        today: "Aujourd'hui",
                        next: "Suivant",
                        previous: "Arrière",
                        tomorrow: "Demain",
                        yesterday: "Hier",
                    }}
                    onSelectEvent={onSelectEvent}
                    // onSelectSlot={onSelectSlot}
                    culture="fr"
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{color:"green",
                        height: "90vh" }}
                />

            </div>

        </main>
        </>
    );
}

export default CalendarPage;