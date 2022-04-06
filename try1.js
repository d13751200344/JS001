function morning(name) {
    console.log(`Good morning, ${name}.`);
}

module.exports.morning = morning;
//上方第一個 morning 是指 module 裡的屬性；第二個 morning 則是指上方的 function