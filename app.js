const btn = document.getElementById("btn");
var nameInp = document.getElementById("nameInp");
var markInp = document.getElementById("markInp");
var prixInp = document.getElementById("prixInp");
var dateInp = document.getElementById("dateInp");
let all = document.querySelector(".all");
const select = document.getElementById("types");
const nameP = document.getElementById("nameP");
const typeP = document.getElementById("typeP");
const prixP = document.getElementById("prixP");
const markP = document.getElementById("markP");
const dateP = document.getElementById("dateP");
const output = document.getElementById("output");
//=====================
//====event listners =========
//=====================
btn.addEventListener("click", check);

//=====================
//==== function check   =========
//=====================
function check(e) {
  //=====================
  //====stop reload =========
  //=====================
  e.preventDefault();
  //=====================
  //====variables  =========
  //=====================
  var validNom = false;
  var validprix = false;
  var validDate = false;
  var validType = false;
  var validPromo = false;

  let name = nameInp.value;
  let mark = markInp.value;
  //=====================
  //====check name & mark  =========
  //=====================
  let regex = /[!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;
  if (
    name.match(regex) ||
    mark.match(regex) ||
    name.length === 0 ||
    mark.length === 0 ||
    name.length > 30 ||
    mark.length > 30
  ) {
    nameP.innerHTML = "*  saisir valid nom max 30";
    markP.innerHTML = "*  saisir valid nom max 30";
    nameP.style.color = "#FF1E1E";
    markP.style.color = "#FF1E1E";
    nameInp.style.color = "#FF1E1E ";
    markInp.style.color = "#FF1E1E ";
    nameInp.style.borderBottom = "2px #FF1E1E solid";
    markInp.style.borderBottom = "2px #FF1E1E solid";
    validNom = false;
  } else {
    nameP.style.color = "#00FFF6";
    markP.style.color = "#00FFF6";
    nameInp.style.borderBottom = "2px #00FFF6 solid";
    markInp.style.borderBottom = "2px #00FFF6 solid";
    nameInp.style.color = "#00FFF6 ";
    markInp.style.color = "#00FFF6";
    nameP.innerHTML = "";
    markP.innerHTML = "";
    validNom = true;
  }
  //=====================
  //====check Price  =========
  //=====================
  let numExp =
    /[a-z\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/gi;
  let prix = prixInp.value;
  if (prix.match(numExp)) {
    console.log("its must be just numbers");
    prixP.style.color = "red";
    prixP.innerHTML = "*  saisir valid  prix";
    prixInp.style.borderBottom = "1px red solid";
    validprix = false;
  } else if (prix.length === 0 || prix > 10000) {
    validprix = false;
    prixInp.style.borderBottom = "2px #FF1E1E solid";
    prixInp.style.color = "#FF1E1E ";
    prixP.style.color = "#FF1E1E";
    prixP.innerHTML = "*  saisir valid prix";
  } else {
    prixP.innerHTML = "";
    prixInp.style.borderBottom = "2px #00FFF6 solid";
    prixInp.style.color = "#00FFF6";
    validprix = true;
  }
  //=====================
  //====check date  =========
  //=====================
  let date = dateInp.value;
  date = date.split("-").reverse().join("-");
  if (date.length === 0) {
    dateP.innerHTML = "*  saisir valid date";
    dateP.style.color = "#FF1E1E";
    dateInp.style.color = "#FF1E1E ";
    dateInp.style.borderBottom = "2px #FF1E1E solid";
    validDate = false;
  } else {
    dateP.innerHTML = "";
    dateP.style.color = "#00FFF6";
    dateInp.style.color = "#00FFF6 ";
    dateInp.style.borderBottom = "2px #00FFF6 solid";
    validDate = true;
  }
  //=====================
  //====check type  =========
  //=====================
  for (let i = 0; i < select.options.length; i++) {
    if (select.options[0].selected) {
      typeP.innerHTML = "*  saisir valid type";
      typeP.style.color = "#FF1E1E";
      select.style.color = "#FF1E1E ";
      select.style.borderBottom = "2px #FF1E1E solid";
      validType = false;
    } else {
      typeP.innerHTML = "";
      typeP.style.color = "#00FFF6";
      select.style.color = "#00FFF6 ";
      select.style.borderBottom = "2px #00FFF6 solid";
      validType = true;
    }
  }
  //=====================
  //====check promotion  =========
  //=====================
  var ouiInp = document.getElementById("ouiInp");
  var noInp = document.getElementById("no");
  let promoP = document.getElementById("promoP");
  let ouiLable = document.getElementById("ouiLable");
  let nonLable = document.getElementById("nonLable");
  let promoHead = document.getElementById("promoHead");

  if (ouiInp.checked) {
    promoP.innerHTML = "";
    promoP.style.color = "#00FFF6";
    promoHead.style.color = "#00FFF6";
    ouiLable.style.color = "#00FFF6";
    validPromo = true;
  } else if (noInp.checked) {
    promoP.innerHTML = "";
    promoP.style.color = "#00FFF6";
    promoHead.style.color = "#00FFF6";
    nonLable.style.color = "#00FFF6";
    validPromo = true;
  } else {
    promoP.innerHTML = "select a promotion";
    promoP.style.color = "#FF1E1E";
    promoHead.style.color = "#FF1E1E";
    validPromo = false;
  }
  //=====================
  //====check form is validate  =========
  //=====================
  if (
    validNom === true &&
    validprix === true &&
    validDate === true &&
    validType === true &&
    validPromo === true
  ) {
    let table = document.querySelector(".table");
    let cart = document.querySelector(".cart");
    let tbody = document.getElementById("tbody");
    let newLine = document.querySelector(".newLine");

    //=====================
    //====Add TR  =========
    //=====================

    var line = document.createElement("tr");
    line.classList.add("titles");
    tbody.append(line);

    //=====================
    //====Add new th  =========
    //=====================
    var ProductName = document.createElement("th");
    line.append(ProductName);
    ProductName.innerHTML = name;
    //=====================
    //====Add mark  =========
    //=====================
    var ProductMark = document.createElement("th");
    line.append(ProductMark);
    ProductMark.innerHTML = mark;
    //=====================
    //====Add price  =========
    //=====================
    var ProductPrice = document.createElement("th");
    line.append(ProductPrice);
    ProductPrice.innerHTML = prix;
    //=====================
    //====Add date  =========
    //=====================
    var ProductDat = document.createElement("th");
    line.append(ProductDat);
    ProductDat.innerHTML = date;
    //=====================
    //====Add type  =========
    //=====================
    var ProductType = document.createElement("th");
    line.append(ProductType);
    for (var j = 0; j < select.length; j++) {
      if (select.options[j].selected) {
        ProductType.innerHTML = select.options[j].value;
      }
    }
    //=====================
    //====Add Date  =========
    //=====================
    var ProductPromotion = document.createElement("th");
    line.append(ProductPromotion);
    if (ouiInp.checked) {
      ProductPromotion.innerHTML = ouiLable.innerHTML;
    } else if (noInp.checked) {
      ProductPromotion.innerHTML = nonLable.innerHTML;
    }
    //=====================
    //====Add edit btn  ===
    //=====================

    var editBtn = document.createElement("button");
    editBtn.classList.add("editBtn");
    line.append(editBtn);
    editBtn.innerHTML = "EDIT";

    //=====================
    //====Add Delete btn  =
    //=====================
    var deletBtn = document.createElement("button");
    deletBtn.classList.add("deletBtn");
    line.append(deletBtn);
    deletBtn.innerHTML = "Delete";
    //=====================
    //==== Delete btn  ====
    //=====================

    deletBtn.addEventListener("click", deleteFun);

    function deleteFun() {
      //create popUp
      let popUp = document.createElement("div");
      popUp.classList.add("popUp");
      all.append(popUp);
      let alertMsg = document.createElement("p");
      alertMsg.classList.add("alertMsg");
      alertMsg.innerHTML = "Voulez vous supprimer cette ligne?";
      popUp.append(alertMsg);
      //creat delet button
      let newDeleteBtn = document.createElement("button");
      newDeleteBtn.classList.add("newDeleteBtn");
      newDeleteBtn.innerHTML = "delete";
      popUp.append(newDeleteBtn);
      //creat delet button
      let DontDelete = document.createElement("button");
      DontDelete.classList.add("DontDelete");
      DontDelete.innerHTML = "Annuler";
      popUp.append(DontDelete);
      //delete function
      newDeleteBtn.addEventListener("click", lastDelete);
      function lastDelete() {
        popUp.style.display = "none";
        line.remove();
      }
      DontDelete.addEventListener("click", backFun);
      function backFun() {
        popUp.style.display = "none";
      }
    }

    //==== edit btn   ==============================================================================================================
    clearInp();
    //edit function
    editBtn.onclick = editFun;
    function editFun() {
      // date = date.split("/").reverse().join("/");
      nameInp.value = table.rows[line.rowIndex].cells[0].innerHTML;
      markInp.value = table.rows[line.rowIndex].cells[1].innerHTML;
      prixInp.value = table.rows[line.rowIndex].cells[2].innerHTML;
      dateInp.value = table.rows[line.rowIndex].cells[3].innerHTML
        .split("-")
        .reverse()
        .join("-");
      document.getElementById("types").value =
        table.rows[line.rowIndex].cells[4].innerHTML;
      //check which inp is chekced
      if (ProductPromotion.innerHTML == "Oui") {
        ouiInp.checked = true;
      }
      if (ProductPromotion.innerHTML == "Non") {
        noInp.checked = true;
      }
      var ModifyBtn = document.getElementById("edit");
      ModifyBtn.style.display = "block";
      btn.style.display = "none";
      //last modify
      ModifyBtn.onclick = modify;
      function modify(e) {
        e.preventDefault();
        ModifyBtn.style.display = "none";
        btn.style.display = "block";
        table.rows[line.rowIndex].cells[0].innerHTML = nameInp.value;
        table.rows[line.rowIndex].cells[1].innerHTML = markInp.value;
        table.rows[line.rowIndex].cells[2].innerHTML = prixInp.value;
        table.rows[line.rowIndex].cells[3].innerHTML = dateInp.value
          .split("-")
          .reverse()
          .join("-");
        table.rows[line.rowIndex].cells[4].innerHTML =
          document.getElementById("types").value;
        //check which inp is chekced
        if (ouiInp.checked) {
          table.rows[line.rowIndex].cells[5].innerHTML = ouiInp.value;
        }
        if (noInp.checked) {
          table.rows[line.rowIndex].cells[5].innerHTML = noInp.value;
        }
        clearInp();
      }
    }
  }
}
function clearInp(e) {
  nameInp.value = "";
  markInp.value = "";
  prixInp.value = "";
  dateInp.value = "";
  document.getElementById("types").value = select.options[0].selected;
  document.getElementById("no").checked = false;
  ouiInp.checked = false;
}
