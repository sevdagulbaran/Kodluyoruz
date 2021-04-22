const input = document.getElementById('task');
const btn = document.getElementById('liveToastBtn');
const list = document.getElementById('list');
const toastSucces = document.getElementsByClassName('success')[0];
const toastError = document.getElementsByClassName('error')[0];

let itemArr = [];

btn.addEventListener('click', () => {

    let value = input.value.trim();

    // * Listeye boş eleman ekleme
    if (value === '') {
        toastError.classList.remove('hide');
        toastError.classList.add('show');
        setTimeout(() => {
            toastError.classList.remove('show');
            toastError.classList.add('hide');
        }, 3000);
    } else {
        // * Başarılı uyarı mesajı
        toastSucces.classList.remove('hide');
        toastSucces.classList.add('show');
        setTimeout(() => {
            toastSucces.classList.remove('show');
            toastSucces.classList.add('hide');
        }, 3000);
        // * İnput değerini boşatlma
        input.value = '';
        // * Değerleri diziye atama ve local storage fonksiyonuna gönderme
        itemArr.push(value);
        createLocalStorageItem(itemArr);
        getLocalStorageItem();
    }
})

list.addEventListener('click', (e) => {
    // * Yapıldı
    if ((e.target.tagName == 'LI') || (e.target.tagName === 'SPAN')){
        if(e.target.tagName == 'LI'){
            tamamlandı(e.target);
        }else{
            tamamlandı(e.target.parentElement)
        }
    }

    if (e.target.tagName == 'I') {
        silItem(e.target);
    }

})

// * Yapıldı fonksiyon
const tamamlandı = (element) => {
    element.classList.toggle('completed');
}

// * Silme fonksiyon
const silItem = (element) => {
    let value = element.previousElementSibling.textContent;
    let valueIndex = itemArr.indexOf(value);
    itemArr.splice(valueIndex, 1);
    createLocalStorageItem(itemArr);
    getLocalStorageItem();
}

// * Local Storage Set Item
const createLocalStorageItem = (itemArr) => {
    localStorage.setItem('Task List', itemArr);
}

// * Local Storage Get Item 
const getLocalStorageItem = () => {
    let items = localStorage.getItem('Task List');

    if(items) {
        let itemsArr = items.split(',');
        // * Sayfa yenilendiğinde var olan dizi değerlerini korumak için
        itemArr = itemsArr;
    
        let html = ``;
    
        itemsArr.map(item => {
            html += `
                <li>
                    <span>${item}</span>
                    <i class="fas fa-trash"></i>
                </li>
            `
        })
    
        list.innerHTML = html;
            
    }

}

getLocalStorageItem();

/* var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("task").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
} */