/*
document.addEventListener(
  "DOMContentLoaded",
  function () {
    nettoy.value = nettoyer(clair.value);
  },
  false
);

const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var cesar = (c, k) =>
  ALPHA[(1 + ALPHA.indexOf(k) + ALPHA.indexOf(c) + 26) % 26];
var coder = (txt, cle) =>
  [...txt].map((c, k) => cesar(c, cle[k % cle.length])).join("");
var decoupe = (txt, n) => [...txt].filter((c, k) => k % n == 0).join("");
var stats_lettres = (txt) =>
  [...txt].reduce((a, c) => a.set(c, (a.get(c) || 0) + 1), new Map());
var friedman = (txt) =>
  [...stats_lettres(txt).values()].reduce((a, v) => a + v * (v - 1), 0) /
  (txt.length * (txt.length - 1));

var decoder = (txt, cles) => {
  var code = nettoyer(txt);
  var indices = [];
  $("cles").innerText = null;
  for (var i = 1; i < 15; i++) {
    indices.push([i, friedman(decoupe(code, i))]);
  }
  indices.sort((a, b) => b[1] - a[1]);
  indices.forEach((v) => {
    var taille = v[0];
    var cle_clair = "";
    for (var i = 0; i < taille; i++) {
      var analyse = stats_lettres(decoupe(code.slice(i), taille));
      analyse = [...analyse.entries()].sort((a, b) => b[1] - a[1]);
      cle_clair += ALPHA[(ALPHA.indexOf(analyse[0][0]) + 21) % 26];
    }
    var option = document.createElement("option");
    option.text = cle_clair;
    $("cles").add(option);
  });
};

$("cles").addEventListener(
  "click",
  function () {
    dechiffre(code.value, this.value, sortie);
  },
  false
);
$("tester").addEventListener(
  "click",
  function () {
    dechiffre(code.value, nettoyer(motcle.value), sortie);
  },
  false
);
var inv = (cle) =>
  [...cle].map((c) => (c == "Z" ? c : ALPHA[24 - ALPHA.indexOf(c)]));
var dechiffre = (txt, cle, sortie) => {
  var cle_inv = inv(cle);
  sortie.innerHTML = [...txt]
    .map((c, i) => cesar(c, cle_inv[i % cle_inv.length]))
    .join("");
};*/

var $ = (id) => document.getElementById(id);
$("clair").addEventListener(
  "keyup",
  function () {
    nettoy.value = nettoyer(this.value);
  },
  false
);
$("coder").addEventListener(
  "click",
  function () {
    code.value = coder(nettoy.value, cle.value);
  },
  false
);
$("decoder").addEventListener(
  "click",
  function () {
    decoder(code.value, cles, sortie);
  },
  false
);
// $("cles").addEventListener(
//   "click",
//   function () {
//     decouvre(code.value, this.value, sortie);
//   },
//   false
// );
// $("tester").addEventListener(
//   "click",
//   function () {
//     decouvre(code.value, nettoyer(motcle.value), sortie);
//   },
//   false
// );

var nettoyer = (txt) => {
  var accents = "àâëéèêïîôüûç";
  var voyelles = "aaeeeeiiouuc";
  return [...txt.toLowerCase()]
    .map((c) => (accents.includes(c) ? voyelles[accents.indexOf(c)] : c))
    .join("")
    .replace(/[^a-z]/g, "")
    .toUpperCase();
};
const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var cesar = (c, k) =>
  ALPHA[(1 + ALPHA.indexOf(k) + ALPHA.indexOf(c) + 26) % 26];
var coder = (txt, cle) =>
  [...txt].map((c, k) => cesar(c, cle[k % cle.length])).join("");
var decoupe = (txt, n) => [...txt].filter((c, k) => k % n == 0).join("");
var stats_lettres = (txt) =>
  [...txt].reduce((a, c) => a.set(c, (a.get(c) || 0) + 1), new Map());
var friedman = (txt) =>
  [...stats_lettres(txt).values()].reduce((a, v) => a + v * (v - 1), 0) /
  (txt.length * (txt.length - 1));

var decoder = (txt, cles) => {
  var code = nettoyer(txt);
  var indices = [];
  $("cles").innerText = null;
  for (var i = 1; i < 15; i++) {
    indices.push([i, friedman(decoupe(code, i))]);
  }
  indices.sort((a, b) => b[1] - a[1]);
  indices.forEach((v) => {
    var taille = v[0];
    var cle_clair = "";
    for (var i = 0; i < taille; i++) {
      var analyse = stats_lettres(decoupe(code.slice(i), taille));
      analyse = [...analyse.entries()].sort((a, b) => b[1] - a[1]);
      cle_clair += ALPHA[(ALPHA.indexOf(analyse[0][0]) + 21) % 26];
    }
    var option = document.createElement("option");
    option.text = cle_clair;
    $("cles").add(option);

    $("cles").addEventListener(
      "click",
      function () {
        dechiffre(code.value, this.value, sortie);
      },
      false
    );
    $("tester").addEventListener(
      "click",
      function () {
        dechiffre(code.value, nettoyer(motcle.value), sortie);
      },
      false
    );
    var inv = (cle) =>
      [...cle].map((c) => (c == "Z" ? c : ALPHA[24 - ALPHA.indexOf(c)]));
    var dechiffre = (txt, cle, sortie) => {
      var cle_inv = inv(cle);
      sortie.innerHTML = [...txt]
        .map((c, i) => cesar(c, cle_inv[i % cle_inv.length]))
        .join("");
    };
  });
};
