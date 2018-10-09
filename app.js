var submit = document.getElementById('submit');
submit.addEventListener('click',maj,false)

function maj() {
    var nom = document.getElementById('nom').value;
    var pre = document.getElementById('prenom').value;
    var fil = document.getElementById('filiere').value;
    var mat = document.getElementById('matricule').value;
    var not1 = Number(document.getElementById('note1').value);
    var not2 = Number(document.getElementById('note2').value);

    var mg = Number((not1 + not2) / 2);

    var res ='';
    var table = document.getElementsByTagName('table')[0];

    var newRow = table.insertRow(1);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    var cel5 = newRow.insertCell(4);
    var cel6 = newRow.insertCell(5);

    cel1.innerHTML = nom + "-" + pre;
    cel2.innerHTML = fil;
    cel3.innerHTML = fil.substring(0, 3) + "-" + mat;
    cel4.innerHTML = not1;
    cel5.innerHTML = not2;
    cel6.innerHTML = mg;

    document.getElementById('nom').value = res;
    document.getElementById('prenom').value = res;
    document.getElementById('filiere').value = res;
    document.getElementById('matricule').value = res;
    document.getElementById('note1').value = res;
    document.getElementById('note2').value = res;


}