// document.getElementById -> gibt Element der angegebenen ID wieder
// .value -> dadurch wird nur Wert des Inputs wiedergegeben
// Math.pow -> sorgt für die Potenz schreibweise, potenziert die Werte




function calc() {
    const conInWell = document.getElementById("conWell").value;
    const volInWell = document.getElementById("volWell").value;
    const volAdd = document.getElementById("volAdd").value;
    const volEppi = document.getElementById("volEppi").value;
    const molWeight = document.getElementById("mol").value;

    if (conInWell == "" || volInWell == "" || volAdd == "" || volEppi == "" || molWeight == "") {
        document.getElementById("mass").value = "";
        return;
    }

    const conInWellUnit = Math.pow(10, document.getElementById("conWellUnit").value);
    const volInWellUnit = Math.pow(10, document.getElementById("volWellUnit").value);
    const volAddUnit = Math.pow(10, document.getElementById("volAddUnit").value);
    const volEppiUnit = Math.pow(10, document.getElementById("volEppiUnit").value);
    const conEppiUnit = Math.pow(10, document.getElementById("conEppiUnit").value);
    const massUnit = Math.pow(10, document.getElementById("massUnit").value);

    const conEppi = ((conInWell*conInWellUnit) * (volInWell*volInWellUnit) / (volAdd*volAddUnit)/ conEppiUnit).toFixed(2);
    if (conEppi == "0.00") {
        document.getElementById("conEppi").value = "";
        alert("Unit of mass to big, please change to smaller unit!");
        return;
    }
    const mass = (conEppi * (volEppi*volEppiUnit) * molWeight / massUnit).toFixed(2);
    if (mass == "0.00") {
        document.getElementById("mass").value = "";
        alert("Unit of mass to big, please change to smaller unit!");
        return;
    }
    document.getElementById("conEppi").value = conEppi;
    document.getElementById("mass").value = mass;

}
