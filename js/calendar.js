const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");
// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// Event Storage Here

const events = {
    "2025-02-02": ["National Anthem @ Women's BBall Game"],
    "2025-03-21": ["A Cappella Palooza!!"],
    "2025-04-06": ["Spring Concert with MU and NBT!"],
    "2025-09-02" : ["A Cappella BBQ on South Campus!"],
    "2025-09-05" : ["Auditions!"],
    "2025-09-06" : ["Callbacks!"],
    "2026-03-20" : ["A Cappella Palooza 2026!!"],
    "2026-04-10" : ["Spring Concert with Measure Up!"],
    "2026-11-06" : ["National Anthem at MBB game!"],
    "2026-11-08" : ["Fall Concert!!"],
    "2026-11-20" : ["MP Boston Tour!"],
    "2026-11-21" : ["MP Boston Tour!"],
    "2026-11-22" : ["MP Boston Tour!"],
};

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        let fullDate = `${currYear}-${String(currMonth + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        let hasEvent = events[fullDate] ? "event-day" : ""; // Check if date has event
    
        liTag += `<li class="${isToday} ${hasEvent}" data-date="${fullDate}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();
prevNextIcon.forEach(icon => {
    icon.addEventListener("click", (e) => {
        let target = e.target.closest("span"); // Ensure the click is handled on <span>
        if (!target) return;

        currMonth = target.id === "prev" ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar(); // Update calendar
    });
});


document.querySelector(".days").addEventListener("click", (e) => {
    if (e.target.tagName === "LI" && e.target.dataset.date) {
        let clickedDate = e.target.dataset.date;
        let eventList = events[clickedDate] || ["No events"];
        alert(`Events on ${clickedDate}:\n- ${eventList.join("\n- ")}`);
    }
});
