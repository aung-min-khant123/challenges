let myTime = setInterval(myClock, 1000)
        function myClock() {
          let currentTime = new Date();
          let day = currentTime.getDay();

          switch (day) {
            case 1:
              day = "Monday";
              break;
            case 2:
              day = "Tuesday";
              break;
            case 3:
               day = "Wednesday";
               break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturaday";
                break;
            default:
              day = "Sunday";
          }

          let h2Element = document.getElementById("clock");
          let pElement = document.getElementById("date");

          h2Element.innerHTML = currentTime.toLocaleTimeString();
          pElement.innerHTML = `${day}, ${currentTime.toLocaleDateString()}`;
        }