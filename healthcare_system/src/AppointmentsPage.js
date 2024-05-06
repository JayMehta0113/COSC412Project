import react from 'react';

const AppointmentsPage = () =>{

    return(
        <div class= "apptBody">
    <div class="navbar">
        <img src="CO.Name.png" class="Logo"></img>
        <ul>
            <li><a href="LandingPage.html">Home</a></li>
            <li><a href="appointmentsPage.html">Appointments</a></li>
            <li><a href="notifsPage.html">Notifications</a></li>
            <li><a href="messagesPage.html">Messages</a></li>
            <li><a href="accountPage.html">Account</a></li>
        </ul>
    </div>
    <div class="content">
        <div class="apptWrapper">
          <header>
            <p class="current-date"></p>
          </header>
          <div class="calendar">
            <ul class="weeks">
              <li>Sun</li>
              <li>Mon</li>
              <li>Tue</li>
              <li>Wed</li>
              <li>Thu</li>
              <li>Fri</li>
              <li>Sat</li>
            </ul>
            <ul class="days"></ul>
          </div>
        </div>
        </div>
          </div>

    );
}

export default AppointmentsPage();