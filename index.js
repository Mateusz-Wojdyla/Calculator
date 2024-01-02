const liczby = document.querySelectorAll(".liczba")
const operator = document.querySelectorAll(".operator")
const wyczysc = document.querySelector(".wyczysc")
const usun = document.querySelector(".usun")
const rownosc = document.querySelector(".rownosc")
const wynikPoprzedni = document.querySelector(".poprzednie-dzialanie")
const wynikAktualne = document.querySelector(".aktualne-dzialanie")

let aktualneDzialanie = ""

let poprzednieDzialanie = ""

let operacja = undefined

const zaktualizujWynik = () => {
    wynikAktualne.innerText = aktualneDzialanie
    wynikPoprzedni.inerText = poprzednieDzialanie
}

const dodajLiczbe = (liczba) => {
    aktualneDzialanie = aktualneDzialanie.toString() + liczba.toString()
}

liczby.forEach(liczba => {
    liczba.addEventListener("click", () => {
        dodajLiczbe(liczba.innerText);
        zaktualizujWynik();
    });
});