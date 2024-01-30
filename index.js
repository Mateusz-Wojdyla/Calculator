const liczby = document.querySelectorAll('.liczba')
const operatory = document.querySelectorAll('.operator')
const wyczysc = document.querySelector('.wyczysc')
const usun = document.querySelector('.usun')
const rownosc = document.querySelector('.rownosc')
const wynikPoprzednie = document.querySelector('.poprzednie-dzialanie')
const wynikAktualne = document.querySelector('.aktualne-dzialanie')


let aktualneDzialanie = ''
let operacja = undefined
let poprzednieDzialanie = ''

const oblicz = () => {
  let dzialanie
  if(!poprzednieDzialanie || !aktualneDzialanie) {
    return
  }

  const poprzednie = parseFloat(poprzednieDzialanie)
  const aktualne = parseFloat(aktualneDzialanie)

  if(isNaN(poprzednie) || isNaN(aktualne)) {
    return
  }

  switch (operacja) {
    case '+':
      dzialanie = poprzednie + aktualne
      break
      case '-':
        dzialanie = poprzednie - aktualne
      break

      case '*':
        dzialanie = poprzednie * aktualne
      break

      case '÷':
      case "/":
        
      if(aktualne === 0)
      {
        wyczyscWynik()
        return
      }
      
        dzialanie = poprzednie / aktualne
      break

      case '^':
    dzialanie = Math.pow(poprzednie, aktualne);
    break;

      case '%':
      
        dzialanie = poprzednie / 100 * aktualne
      break

      case '√':
        dzialanie = Math.pow(poprzednie, 1 / aktualne)
      break

      case 'log':
        dzialanie = Math.log(poprzednie) / Math.log(aktualne)
      break

    default:
      return
  }
  aktualneDzialanie = dzialanie
  operacja = undefined
  poprzednieDzialanie = ''

}

const wybierzOperacje = (operator) => {
  if(aktualneDzialanie === '') {
    return
  }
  if(poprzednieDzialanie !== '') {
    const poprzednie = wynikPoprzednie.innerText
    if(aktualneDzialanie.toString() === '0' &&  poprzednie[poprzednie.length - 1] === '÷') {
      wyczyscWynik()
      return
    }
    oblicz()
  }

  operacja = operator
  poprzednieDzialanie = aktualneDzialanie
  aktualneDzialanie = ''
}

const dodajLiczbe = (liczba) => {
  if(liczba === '.') {
    if(aktualneDzialanie.includes('.')) {
      return
    }
    liczba = '.'
  }

  aktualneDzialanie = aktualneDzialanie.toString() + liczba.toString()
}

const usunLiczbe = () => {
  aktualneDzialanie = aktualneDzialanie.toString().slice(0, -1)
}

const zaktualizujWynik = () => {
  wynikAktualne.innerText = aktualneDzialanie

  if(operacja != null) {
  wynikPoprzednie.innerText = poprzednieDzialanie + operacja
  } else {
    wynikPoprzednie.innerText = ''
  }
}

const wyczyscWynik = () => {
  aktualneDzialanie = ''
  operacja = undefined
  poprzednieDzialanie = ''
}

liczby.forEach((liczba) => {
  liczba.addEventListener('click', () => {
    dodajLiczbe(liczba.innerText)
    zaktualizujWynik()
  })
})

operatory.forEach((operator) => {
  operator.addEventListener('click', () => {
    wybierzOperacje(operator.innerText)
    zaktualizujWynik()
  })
})

rownosc.addEventListener('click', () => {
  oblicz()
  zaktualizujWynik()
})

usun.addEventListener('click', () => {
  usunLiczbe()
  zaktualizujWynik()
})

wyczysc.addEventListener('click', () => {
  wyczyscWynik()
  zaktualizujWynik()
})


document.addEventListener('DOMContentLoaded', function () {
  const darkModeSwitch = document.getElementById('darkModeSwitch');
  const body = document.body;

  darkModeSwitch.addEventListener('change', function () {
      body.classList.toggle('dark-mode', this.checked);
  });
});












// let srt = "Hello World";
// console.log(srt);

// let srt2 = srt + " and hello again!";
// console.log(srt2);
// console.log(srt2.length);

// console.log(srt2[0]);
// console.log(srt2[1]);
// console.log(srt2[7]);
// console.log(srt2[ srt2.length - 1]);

// let text = "acccążłę";


// let a = "Gdyby kuzka nie skakała toby nózki nie złamała"
// console.log(a);
// console.log(a[0]);
// console.log(a[a.length - 1])
// let txt = "🐐";

// let result = a + txt;
// console.log(result);

// let str = "raz dwa trzy";

// let animal = "psa";
// let txt = `ola ma kota,
// natomiast kasia ma ${animal}`;
// console.log(txt);


// let city = "Madrycie"
// let txt = `życie jak w ${city}`
// console.log(txt);

// let msgSent = false;
//  msgSent = true;

//  let b1 = 14 > 7;
//  console.log(b1)

//  let b2 = 12 > 15;
//  console.log(b2)

//  let b3 = 10 == 10;
//  console.log(b3);

//  let b4 = 10 != 21;
//  console.log(b4)

//  let b5 = 5 != 5;
//  console.log(b5)

// let b1 = 213123123123123123123123123123123n;
// let result = b1 + 123123123n;
// console.log(result)

// let data;
// console.log(data);
// data = 10;


// let currentTask = "task #1";
// currentTask = null;

// currentTask = "Task #2"

// let txt = "Kasia";
// let num = 23;
// let bool = true;
// let bigInt =121312312312312312n;
// let data; // undefined

// txt = null; // pusta wartość 

// let uniqueSymbol = symbol(); // symbol

// let countryName = "Poland";
// let countryPopulation = 30_000_000;

// let country = {
//   name: "Poland",
//   population: 38_000_000,
//   continent: "Europe",
//   cities: ["warszawa", "Kraków","Poznań"],
//   capital:{
//     name:"Warszawa",
//     population: 2000000
//   }
// };
// // wyjmowanie poszczegulnych wartości z obiektu 
// console.log(country);
// console.log(country.name); // Poland 
// console.log(country.population);// 38000000
// console.log(country.capital.name); // Warszawa
// console.log(country.capital.population);// 2000000

// let obj = {};// pusty obiekt

// let carInformation = {
//   Brand: "Porshe",
//   Model: 911,
//   Engine: 3.6,
//   maxSpeed: 280,
//   color: "Black",

// };
// console.log(carInformation);

// carInformation.Brand = "Audi";
// console.log(carInformation);

  //TABLICE
// let brands = ["sony", "lenowo","google","dell"];
// console.log(brands);
// console.log(brands[0]);// Sony
// console.log(brands[1]);//Lenowao
// console.log(brands[2]); //Google
// console.log(brands.length);//4

// brands[3] = "acer";  //ZMIANA NAZWY 3 nazwa w tabeli na acer
// console.log(brands);
// let data = [1, 2, true, "Asia", a{a:12, b:15}];


// let arrObjects = [
//   {name:"Kasia", age: 28, favColor: "red"},
//   {name: "Ola", age: 22, favColor: "yellow"},
//   {name: "Adam", age: 44, favColor: "black"},
// ];
//   console.log(arrObjects);

// const array = ["string", "number", "bigInt", "boolean", "null", "undefinded", "symbol"];
// console.log(array);
// console.log(array[0]);
// console.log(array[array.length - 1]);
// array [1] = "number!";
// console.log(array);
