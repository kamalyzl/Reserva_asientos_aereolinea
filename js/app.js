//Declarando un array que representara los asiento de nuestros avion
// con false indicando que estos estan vacios 

var airlineSeats = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
];

// Contador que nos ayudara rastrear el numero de asientos ocupados
var busySeats = 0;

var paintSeats = function (array) {
  var containerSeats = document.getElementById('seats');

  for (i = 0; i < array.length; i++) {
    var seat = document.createElement('div');
    seat.className = 'seats';

    //del primer elemento al cuarto, en nuestro arreglo va a ser Primera Clase,
    //que seria del indice 0 al indice 3, los vamos a representar de 
    //
    if (i < 4) {
      seat.style.background = 'purple';
    } else {
      seat.style.background = 'yellow';
    }
    containerSeats.appendChild(seat);
  }

};


var reserve = function () {
  var btn = document.getElementById('btn');
  btn.addEventListener('click', chooseZone);

};

var chooseZone = function () {
  var choice = prompt(
    'En que zona prefieres reservar \n 1. Primera Clase \n 2.Economica \n \n Por favor ingresa el numero de tu preferencia'
  );
  if (choice == 1) {
    checkFirstClassZone();
  } else if (choice == 2) {
    checkEconomicZone();
  } else {
    alert('Por favor ingresa un numero valido');
  }
};


var checkFirstClassZone = function () {
  var zone = 'Primera Clase';
  //Recorre del elemento  0 al elemento 3 y verifica cuales estan disponibles
  for (var i = 0; i < 4; i++) {
    if (airlineSeats[i] == false) {
      airlineSeats[i] = true;
      reserveSeat(i);
      paintTicket(i, zone);
      busySeats++;
      //Al reservar aun asiento no necesitamos seguir recorriendo nuestro arreglo
      //rompemos el for con break 
      break;
    } else if (i == 3 && airlineSeats[i] == true) {
      reasingEconomicZone(zone);
    }
  }
};

var checkEconomicZone = function () {
  var zone = 'Economica';
  for (i = 4; i < 10; i++) {
    if (airlineSeats[i] == false) {
      airlineSeats[i] = true;
      reserveSeat(i);
      paintTicket(i, zone);
      busySeats++;
      break;
    } else if (i == 0 && airlineSeats[i] == true) {
      reasingFirstClassZone(zone);
    }
  }
};

var reserveSeat = function (indexToPaint) {
  var seat = document.getElementsByClassName('seats');
  seat[indexToPaint].textContent = 'Ocupado';
};

var reasingEconomicZone = function (zone) {
  if (busySeats == 10) {
    noSeat();
    nextFlight();
  } else {
    var reasing = confirm('Ya no quedan asientos disponibles en ' + zone + ':(\n Quieres reservar en zona Economica?');
    if (reasing == true) {
      checkEconomicZone();
    } else {
      nextFlight();
    }
  }
};


var reasingFirstClassZone = function (zone) {
  if (busySeats == 10) {
    noSeat();
    nextFlight();
  } else {
    var reasing = confirm('Ya no quedan asientos disponibles en ' + zone + ':(\n Quieres reservar en Primera Clase?');
    if (reasing == true) {
      checkFirstClassZone();
    } else {
      nextFlight();
    }
  }
};

var paintTicket = function (i, zone) {
  var containerTicket = document.getElementById('tickets');
  var ticket = document.createElement('div');
  ticket.className = 'seats';
  var title = document.createElement('p');
  var reservedSeating = document.createElement('p');
  var zoneClass = document.createElement('p');
  title.textContent = 'Pase de Abordar';
  reservedSeating.textContent = 'No. de asiento: ' + (i + 1);
  zoneClass.textContent = zone;
  ticket.appendChild(title);
  ticket.appendChild(reservedSeating);
  ticket.appendChild(zoneClass);
  containerTicket.appendChild(ticket);
};

var nextFlight = function () {
  alert('Nuestro proximo vuelo sale en 3 horas')
};

var noSeat = function () {
  alert('Lo sentimos : ( \n Ya no quedan asientos disponibles en este avion.');
};

paintSeats(airlineSeats);
reserve();





