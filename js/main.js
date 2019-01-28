function dane() {
    var Name = document.getElementById("inpName");
    var Surname = document.getElementById("inpSurname");
    var Phone = document.getElementById("inpPhone");
    document.getElementById("name").innerHTML = "Twoje Imie to: " + Name.value;
    document.getElementById("surname").innerHTML = "Twoje Nazwisko to: " + Surname.value;
    document.getElementById("phone").innerHTML = "Numer Twojego telefonu: " + Phone.value;
};