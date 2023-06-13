var points = Number(localStorage.getItem("points")) || 0;
var skins = [
  { id: "mangoti", price: 0 },
  { id: "clickti", price: 100 },
  { id: "clicktiplus", price: 300 },
  { id: "ispiman", price: 1000 },
  { id: "ultramangoti", price: 9500 }
];

for (var i = 0; i < skins.length; i++) {
  var skin = skins[i];
  var btn = document.querySelectorAll("#aninb")[i];
  btn.innerHTML = "Buy for " + skin.price + " points";
  btn.disabled = points < skin.price;

  btn.addEventListener('click', function() {
    var skinIndex = i;
    var skin = skins[skinIndex];
    if (points < skin.price) {
      alert("Not enough points to buy this skin!");
      return;
    }
    points -= skin.price;
    localStorage.setItem("points", points);
    alert("Skin bought successfully!");
    btn.innerHTML = "Equip";
    btn.removeEventListener('click', arguments.callee);
    btn.addEventListener('click', function() {
      localStorage.setItem("equippedSkin", skin.id);
      alert("Skin equipped successfully!");
    });
  });
}

var equippedSkinId = localStorage.getItem("equippedSkin") || "mangoti";
var equippedSkin = document.getElementById(equippedSkinId);
equippedSkin.classList.add("equipped");

var unequipBtn = document.createElement("button");
unequipBtn.innerHTML = "Un-Equip";
unequipBtn.disabled = equippedSkinId === "mangoti";
unequipBtn.addEventListener('click', function() {
  localStorage.removeItem("equippedSkin");
  equippedSkinId = "mangoti";
  equippedSkin = document.getElementById(equippedSkinId);
  equippedSkin.classList.add("equipped");
  unequipBtn.disabled = true;
  alert("Skin un-equipped successfully!");
});

var cards = document.querySelectorAll(".card");
for (var i = 0; i < cards.length; i++) {
  var card = cards[i];
  card.addEventListener('click', function() {
    equippedSkin.classList.remove("equipped");
    equippedSkinId = this.querySelector("img").id;
    equippedSkin = this.querySelector("img");
    equippedSkin.classList.add("equipped");
    unequipBtn.disabled = false;
    alert("Skin equipped successfully!");
    localStorage.setItem("equippedSkin", equippedSkinId);
  });
}

var container = document.querySelector(".i-container");
container.appendChild(unequipBtn);