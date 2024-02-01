const liczby = document.querySelectorAll(".liczba");
const operatory = document.querySelectorAll(".operator");
const wyczysc = document.querySelector(".wyczysc");
const usun = document.querySelector(".usun");
const rownosc = document.querySelector(".rownosc");
const wynikPoprzednie = document.querySelector(".poprzednie-dzialanie");
const wynikAktualne = document.querySelector(".aktualne-dzialanie");

let aktualneDzialanie = "";
let operacja = undefined;
let poprzednieDzialanie = "";

const oblicz = () => {
	let dzialanie;
	if (!poprzednieDzialanie || !aktualneDzialanie) {
		return;
	}

	const poprzednie = parseFloat(poprzednieDzialanie);
	const aktualne = parseFloat(aktualneDzialanie);

	if (isNaN(poprzednie) || isNaN(aktualne)) {
		return;
	}

	switch (operacja) {
		case "+":
			dzialanie = poprzednie + aktualne;
			break;
		case "-":
			dzialanie = poprzednie - aktualne;
			break;

		case "*":
			dzialanie = poprzednie * aktualne;
			break;

		case "÷":
		case "/":
			if (aktualne === 0) {
				wyczyscWynik();
				return;
			}

			dzialanie = poprzednie / aktualne;
			break;

		case "^":
			dzialanie = Math.pow(poprzednie, aktualne);
			break;

		case "%":
			dzialanie = (poprzednie / 100) * aktualne;
			break;

		case "√":
			dzialanie = Math.pow(poprzednie, 1 / aktualne);
			break;

		case "log":
			dzialanie = Math.log(poprzednie) / Math.log(aktualne);
			break;

		default:
			return;
	}
	aktualneDzialanie = dzialanie;
	operacja = undefined;
	poprzednieDzialanie = "";
};

const wybierzOperacje = (operator) => {
	if (aktualneDzialanie === "") {
		return;
	}
	if (poprzednieDzialanie !== "") {
		const poprzednie = wynikPoprzednie.innerText;
		if (
			aktualneDzialanie.toString() === "0" &&
			poprzednie[poprzednie.length - 1] === "÷"
		) {
			wyczyscWynik();
			return;
		}
		oblicz();
	}

	operacja = operator;
	poprzednieDzialanie = aktualneDzialanie;
	aktualneDzialanie = "";
};

const dodajLiczbe = (liczba) => {
	if (liczba === ".") {
		if (aktualneDzialanie.includes(".")) {
			return;
		}
		liczba = ".";
	}

	aktualneDzialanie = aktualneDzialanie.toString() + liczba.toString();
};

const usunLiczbe = () => {
	aktualneDzialanie = aktualneDzialanie.toString().slice(0, -1);
};

const zaktualizujWynik = () => {
	wynikAktualne.innerText = aktualneDzialanie;

	if (operacja != null) {
		wynikPoprzednie.innerText = poprzednieDzialanie + operacja;
	} else {
		wynikPoprzednie.innerText = "";
	}
};

const wyczyscWynik = () => {
	aktualneDzialanie = "";
	operacja = undefined;
	poprzednieDzialanie = "";
};

liczby.forEach((liczba) => {
	liczba.addEventListener("click", () => {
		dodajLiczbe(liczba.innerText);
		zaktualizujWynik();
	});
});

operatory.forEach((operator) => {
	operator.addEventListener("click", () => {
		wybierzOperacje(operator.innerText);
		zaktualizujWynik();
	});
});

rownosc.addEventListener("click", () => {
	oblicz();
	zaktualizujWynik();
});

usun.addEventListener("click", () => {
	usunLiczbe();
	zaktualizujWynik();
});

wyczysc.addEventListener("click", () => {
	wyczyscWynik();
	zaktualizujWynik();
});

document.addEventListener("DOMContentLoaded", function () {
	const darkModeSwitch = document.getElementById("darkModeSwitch");
	const body = document.body;

	darkModeSwitch.addEventListener("change", function () {
		body.classList.toggle("dark-mode", this.checked);
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

// if (true){
//   console.log("prawda")
// }
// if(10 > 9){
//   console.log("większe")
// }

// let result = ((12 + 8) * 2 ) < 100;  // TRUE
//   if (result) {
//     console.log("mniejsze od 100")

//   }

//   let a = 14;
//   let b = 7;
//   if (a > b){
//     console.log("więlsze jest a")
//   }
//   if (a != 15){
//     console.log("a nie jest równe 14");
//   }

// let a = 12;
// let b = 7;
// if(a > 7){
//   console.log("12 jest większe")
// }

// let c = 60;
// let d = 90;
// if(c < d){
//   console.log("60 jest mniejsze")
// }

// let aa = 5;
// let bb = 10;
// if(aa > bb){
//   console.log("5 jest mniejsze ")
// }

// let data = 4;
// if(data == 3){
//   console.log("nie jest równe")
// }

// let num = 9;
// if (num == 8){
//   console.log("num to 8");
// }else{
//   console.log("num nie jest 8");
// }

// let age = 28;
// if(age == 18){
//   console.log("osoba jest dorosła");
// }else if (age == 19){
//   console.log("wiek to 19")
// }else if (age == 20){
//   console.log("osoba ma 20");
// }else if (age == 21){
//   console.log("osoba ma 21");
// }else{
//   console.log("wiek to :", age);
// }

// let nun = 65;
// if (nun > 85){
//   console.log("nun jest większe od 85")
// }else{
//   console.log("num jest mniejsze ");
// }

// let num = 65;
// if (num < 65){
//   console.log("num jest mniejsze od 65")
// }else if (num == 65){
//   console.log("num jest równe 65")
// }else if (num < 100){
//   console.log("num jest mniejsze od 100")
// }else{
//   console.log("num jest większe lub równe 100")
// }
//  Instrukacja SWITCH

// let num = 22;
// switch (num){
//   case 5: console.log("nun jest równe 5")
//   break;
//   case 12 :
//     console.log("jest 12")
//     break;
//     case 18:
//       console.log("jest 18")
//       break;
//       case 22 :
//         console.log("num jest równe 22");
//         break;
//         case 26:
//           console.log("num jest 26");
//           break;
//           default:
//             console.log("Domyslny kod ");
// }

// let txt = "kasia";
// switch (txt) {
//   case "ola":
//     console.log("txt to ola");
//     break;
//   case "asia":
//     console.log("txt jest asia");
//     break;
//   case "kasia":
//     console.log("txt to kasia");
//     break;
//     default :
//     console.log("domyslny kod ");

// }

// let n = 3;
// switch (n){
//   case 0:
//   case 2:
//   case 4:
//   case 6:
//   case 8:
//     console.log(n, "jest parzyste");
//     break;
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 9:
//     console.log(n, "jest nieparzyste")
//     break;
// }

// let temp = ;
// switch (temp) {
//   case-10, -5:
//   console.log("zima");
//   break;
//   case 0:
//     console.log("zamarzanie wody");
//     break;
//   case 5:
//     console.log("przedwiośnie");
//     break;
//   case 10:
//     console.log("wiosna");
//     break;
//    case 20:
//     console.log("lato")
//     break;
//     default:console.log("zienzna temperatura");
// }

// let i = 0;
// while (i < 4) {
// 	console.log(i);
// 	i = i + 1;

//  const names = ["ola", "kasia", "adam", "barbara"];
//  let b = 0;
//  while (b < names.length){
//      console.log(names[b]);
//      b++;
//  }
//  const nums = [1,2,3,4,5];
//  let c = 0;
//  while (c < nums.length){
//   nums[c] = nums[c] + 10;
//   c++;
//   console.log(nums);
//  }
 

// let d = 0;
// do{

// }while()
                //PĘTLA
// let c = -6;
// while(c < 7){
//   console.log(c)
//   c++;
// }

// let i = 90;
// while(i > 74){
//   console.log(i)
//   i--;
// }

// const arr = [1,2,3,4,5,6,7,8,9,10,11,12];
// let i = 0;
// let sum = 0;
// while(i < arr.length){
//   const el = arr[i];
//   if (el > 5) sum = sum + el;
//   i++;
//   console.log("sum:", sum)
// }

// for (let i = 0; i < 4; i++){
// 	console.log(i);
// }
// const arr = [1,2,3,4,5];
// for(let a = 0; a < arr.length; a++){
// 	console.log(arr[a] * 2);
// }



		//PĘTLA FOR DO OGARNIĘCIA BO NIE ROZUMIEM WSZYSTKIEGO 


// const arr = [-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6];
// let sum = 0;
// for (let i = 0; i < arr.length;i++){
// 	let num = arr[i];
// 	sum = sum + num;
// 	if (num > 0) console.log(num);
// }
// console.log("sum:",sum);

// let a = 10;

// a += 2;
// console.log(a); // to samo co a = a + 2

// a -= 6; //6

// a *= 3; //18
// a /= 9; //2
// a **=3;//8
// console.log(a);


// console.log(10 % 4 );  // 2
// console.log(43 % 3)// 1
// console.log(43 % 43);//0 bo parzysta liczba 

// const arr = [-3,-2,-1,0,1,2,3,4,5,6,7,8];

// for (let i = 0; i < arr.length; i++){
// 	const n = arr[1];
// 	if ((n % 2)== 0){
// 		console.log("n to liczba parzysta ");

// 	}else {
// 		console.log("nie parzysta")
// 	}
// }
					//PĘTLA FOR Z TABLICĄ SPRAWDZAJĄCA KTÓRA LICZBA JEST PARZYSTA 

// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
// 	const n = arr [i];
// 	if ((n % 2)== 0 ){
// 		sum += n;
// 		console.log("parzysta");
// 	}else{
// 		console.log("nie parzysta")
// 	}
// }
// console.log("suma:",sum);

// let n = 10;
// n++;
// console.log(n++); // wynik 11 najpierw wyświetla a później dodaje 1
// console.log(n);// wynik 12

// n = 11;
// console.log(++n);// najpierw dodaje 1 i wtedy wyswietla

// n = 20;
// console.log(n--); // wynik 20 
// console.log(n); //wynik 19 ponieważ wyżej najpierw wyświetlilo i później odjeło 1 

// n = 20;
// console.log(--n); // wynik 19 ponieważ najpierw odejmuje 1 od zmiennej n
// console.log(n); // 19 




// let speed = 150;
// if(speed > 200){
// 	console.log("szybko");
// }else{
// 	console.log("wolno");
// }
//////////////SKRÓCOWA WERSJA KODY WYZEJ 
				// let result = speed > 200 ?"szybko" : "wolno";
				// console.log(result);

// let num = 23;
// let result = num > 20 ?"wieksza" : "mniejsza";
// console.log(result);

// if (num > 23){
// 	console.log("mniejszy")
// }else{
// 	console.log("większy");
// }

// console.log(6 > 1);// true 
// console.log(6 < 1);// false 

// /////////////////////////PĘTLA IF ELSE IF SPRAWDZAJĄCA TEMPERATURE 
// let temp = 5;
// if(temp <= 0){
// 	console.log("Zimno i slisko");
// }else if (temp <=8){
// 	console.log("wczesna wiosna");
// }else if (temp <=15){
// 	console.log("wiosna");
// }else if (temp < 25) {
// 	console.log("lato")
// }


// let a = 10;//10
// let b = a;//10
// b++;// teraz b to 11 ponieważ inkrementacja dodaje 1

// console.log("a:", a);// 10
// console.log("b:",b) // 11

// let obj = {a: 10};
// let data = obj; // data i obj wzkazuja na to samo miejsce w pamięci 
// obj.a++;
// console.log("obj.a:",obj.a);//11
// console.log("data.a:", data.a);// tez 11

// if (obj == data){
// 	// czy obj wskazuje na to samo co data 
// 	console.log("wskazuja na to samo miejsce w pamięci ");
// }else {
// 	console.log("nie wskazują na to samo miejsce ");
// }

// let info = {a:12, b:15};
// if (obj == info){
// 	console.log("wskazuja na to samo miejsce w pamięci ")
// }else {
// 	console.log("nie wskazują na to samo miejsce w pamięci ")
// }

/////////////////////////////SCISŁE PORÓWNANIE ===
// console.log( 4 == 4); //true
// console.log( 4 == "4");// true ponieważ nie sprawdza typu /string/number

// console.log( 4 === "4"); //false nie zgadza się typ "4" to string a nie liczba  
// console.log(4 === 4);//true wszystko się zgadaza 
// console.log(5 !== 5); //false sprawdza czy NIE są równe (w tym przypadku są równe więc jest falce )
// console.log(5 !== "5");// true ponieważ nie są równe bo jest "5" string 
// console.log(5 !== 4);//true poniewaz się nie zgadza  



// let a = 7, b = 10;
// console.log(b);//10   dwie zmienne za jednym razem

// for (let i = 0, j = 5; i < 8; i++, j--){
// 	console.log(i,j);
// }

// console.log( true && true);// true 
// console.log( true && false);// false
// console.log( false && false );//false 
// console.log( false && true);//false
// console.log( 5 >= 5 && 1 < 4);



// if ( true && true) console.log("#1");// true 
// if ( true && false) console.log("#2"); //false
// if ( false && true) console.log("#3");//false
// if (false && false) console.log("#4"); // false
// if (4 == 4 && 3 > 1)//#5 true
// if (8 < 0 && 4 < 5)//#6 false 
// if ( 1 == 1 && 3 >= 2 && 1 > 0); //#7 true 
// id ( 10 != 6 && 2 <= 5)//#8 true

// console.log( true || true);// true 
// console.log( false || true );//true
// console.log( true || false)//true
// console.log(false || false );// FALSE
// //true zawsze fdy jest przynajmniej jedna PRAWDA a FALSE tylko wtedy jesli są dwa razy FALSE 

// if (true || false);//true
// if (false || false);//false
// if (false || false ||true);//true
// if ( 11 == 11 || 3 >= 0 );//true
// if(14 <= 21 || 3 != 3);//true 
// if ("kasia" == "kasia" || 7 < 1);//true
// if (3 < 0 || 9 == 5 || 3 > 5);//false

// console.log( !true );
// // console.log(!false);
// if (!(6 >= 2)) console.log("test");
// let emailSent = false;

// if (emailSent === false){
// 	console.log("trzeba wysłać email")
// }
// if (!emailSent === false){
// 	console.log(" wysłać email")
// }

// if (!false);// true
// if (!true);//false

// if (!(6 >=4))console.log("#3");//false
// if (!(12 == 12)) console.log("#4");//false

// let flag = false;
// if (flag);// false
// if (!flag);//true

// let n = 8;
// n++;
// n--;

// let data = { a:12, b:15 ,c:17};
// delete data.b;
// console.log(data);

// let result = "15" + 20;
// console.log(result);//1520

// result = +"15" + 20;
// console.log(result);//35

// result = -"15" + 20 ;
// console.log(result);// 5

// let obj = {
// 	a:14 , b:14, c:15
// }
// console.log( "a" in obj );//true ponieważ jest w objekcie 
// console.log( "d" in obj );// false ponieważ nie ma tego w tablicy 

// const arr = [1,2,3,4,5];
// console.log(3 in arr);//true
// console.log(8 in arr);//false


// const date = new Date(2030, 12, 15);
// console.log(date);

// if ( date instanceof Date) console.log("prawidłowa data");

// console.log( typeof 20);// number
// console.log( typeof "sad");//string
// console.log( typeof "54");//string
// console.log( 1231231231n);

// let data = 'kasia';
// if ( typeof data === "number"){
// 	console.log("data to liczba");
// }else if ( typeof data === "string"){
// 	console.log(data, "jest string" )
// }

// console.log(!1);//false
// console.log(!-1);//false
// console.log(!0);//true

// console.log(!!1)