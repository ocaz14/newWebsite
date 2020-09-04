function numtoFixed(num, comma) {
  var numFixed = num.toFixed(comma);
  if (Math.abs(num - numFixed) > 0) {
    return num.toFixed(comma);
  } else {
    return num;
  }
}

function decimalTo(value, base) {
  var sisa = value;
  var result = "";
  var i = 0;
  while (sisa > 0) {
    var a = sisa % base;
    var sisa = Math.floor(sisa / base);
    result = a + result;
    //extra_space
    i++;
    // if (i % 4 == 0) {
    //   result = " " + result;
    // }
  }
  return result;
}

function decimalToHex(value) {
  var base = 16;
  var sisa = value;
  var result = "";
  var i = 0;
  var a = 0;
  while (sisa > 0) {
    a = sisa % base;
    if (a == 10) {
      a = "A";
    } else if (a == 11) {
      a = "B";
    } else if (a == 12) {
      a = "C";
    } else if (a == 13) {
      a = "D";
    } else if (a == 14) {
      a = "E";
    } else if (a == 15) {
      a = "F";
    }
    var sisa = Math.floor(sisa / base);
    result = a + result;
    //extra_space
    i++;
    // if (i % 2 == 0) {
    //   result = " " + result;
    // }
  }
  return result;
}

function binerToDecimal(value) {
  var digit = 0;
  var hasil = parseInt(value);
  var result = 0;
  while (Math.pow(10, digit) <= value) {
    sisa = hasil % 10;
    if (sisa != 0 && sisa != 1) {
      alert("Masukkan bilangan biner");
      result = "N/A";
      break;
    } else {
      result = result + sisa * Math.pow(2, digit);
      hasil = Math.floor(hasil / 10);
    }
    digit++;
  }
  return result;
}

function HexToDecimal(value) {
  var result = 0n;
  var inputArray = value.split("");
  var max = inputArray.length - 1;

  for (var i = 0; i < inputArray.length; i++) {
    var a = hexToNum(inputArray[max - i]);
    var hasil = a * Math.pow(16, i);
    result = result + BigInt(hasil);
  }
  return result;
}

function hexToNum(value) {
  var result = 0;
  if (value < 10) {
    result = value;
  } else if (value == "A" || value == "a") {
    result = 10;
  } else if (value == "B" || value == "b") {
    result = 11;
  } else if (value == "C" || value == "c") {
    result = 12;
  } else if (value == "D" || value == "d") {
    result = 13;
  } else if (value == "E" || value == "e") {
    result = 14;
  } else if (value == "F" || value == "f") {
    result = 15;
  } else {
    alert("masukkan bilangan heksadesimal");
  }
  return result;
}

function hexToBiner(value) {
  var result = "";
  var inputArray = value.split("");
  var max = inputArray.length - 1;

  for (var i = 0; i < inputArray.length; i++) {
    var a = hexToNum(inputArray[max - i]);
    if (a == 0) {
      var hasil = "0000";
    } else {
      var hasil = decimalTo(a, 2);
    }
    console.log(hasil);
    if (hasil.length == 1) {
      hasil = "000" + hasil;
    } else if (hasil.length == 2) {
      hasil = "00" + hasil;
    } else if (hasil.length == 3) {
      hasil = "0" + hasil;
    }
    result = hasil + " " + result;
  }
  return result;
}

function hexToOct(value) {
  var biner = "";
  var inputArray = value.split("");
  var max = inputArray.length - 1;

  for (var i = 0; i < inputArray.length; i++) {
    var a = hexToNum(inputArray[max - i]);
    if (a == 0) {
      var hasil = "0000";
    } else {
      var hasil = decimalTo(a, 2);
    }
    if (hasil.length == 1) {
      hasil = "000" + hasil;
    } else if (hasil.length == 2) {
      hasil = "00" + hasil;
    } else if (hasil.length == 3) {
      hasil = "0" + hasil;
    }
    biner = hasil + biner;
  }
  var result = binerToOctal(biner);
  return result;
}
function binerToOctal(biner) {
  var group = biner.length;
  if (group % 3 == 1) {
    biner = "00" + biner;
  } else if (group % 3 == 2) {
    biner = "0" + biner;
  }

  var iteration = Math.ceil(biner.length / 3);
  var result = "";
  for (var i = 0; i < iteration; i++) {
    var q = 0;
    var maxBiner = biner.length - 1;

    var a = biner[maxBiner - 0];
    var b = biner[maxBiner - 1];
    var c = biner[maxBiner - 2];

    q = q + a * Math.pow(2, 0);
    q = q + b * Math.pow(2, 1);
    q = q + c * Math.pow(2, 2);

    biner = biner.slice(0, biner.length - 1);
    biner = biner.slice(0, biner.length - 1);
    biner = biner.slice(0, biner.length - 1);

    result = q + result;
  }
  result = parseInt(result);
  return result;
}

function OctToDecimal(value) {
  var result = 0n;
  var inputArray = value.split("");
  var max = inputArray.length - 1;
  var hasil = "";

  for (var i = 0; i < inputArray.length; i++) {
    var a = inputArray[max - i];
    if (a < 8) {
      var hasil = a * Math.pow(8, i);
    } else {
      alert("Masukkan bilangan Oktal");
      break;
    }
    result = result + BigInt(hasil);
  }
  return result;
}

function OctToBiner(value) {
  var result = "";
  var inputArray = value.split("");
  var max = inputArray.length - 1;
  var hasil = "";

  for (var i = 0; i < inputArray.length; i++) {
    var a = inputArray[max - i];
    if (a == 0) {
      var hasil = "000";
    } else {
      if (a < 8) {
        var hasil = decimalTo(a, 2);
      } else {
        alert("Masukkan bilangan Oktal");
        break;
      }
    }
    if (hasil.length == 1) {
      hasil = "00" + hasil;
    } else if (hasil.length == 2) {
      hasil = "0" + hasil;
    }
    result = hasil + "" + result;
  }
  return result;
}

function OctToHex(value) {
  var biner = "";
  var inputArray = value.split("");
  var max = inputArray.length - 1;
  var hasil = "";

  for (var i = 0; i < inputArray.length; i++) {
    var a = inputArray[max - i];
    if (a == 0) {
      var hasil = "000";
    } else {
      if (a < 8) {
        var hasil = decimalTo(a, 2);
      } else {
        alert("Masukkan bilangan Oktal");
        break;
      }
    }
    if (hasil.length == 1) {
      hasil = "00" + hasil;
    } else if (hasil.length == 2) {
      hasil = "0" + hasil;
    }
    biner = hasil + "" + biner;
  }
  var result = binerToHex(biner);
  return result;
}

function binerToHex(biner) {
  var group = biner.length;
  if (group % 4 == 1) {
    biner = "000" + biner;
  } else if (group % 4 == 2) {
    biner = "00" + biner;
  } else if (group % 4 == 3) {
    biner = "0" + biner;
  }

  var iteration = Math.ceil(biner.length / 4);
  var result = "";
  for (var i = 0; i < iteration; i++) {
    var q = 0;
    var maxBiner = biner.length - 1;

    var a = biner[maxBiner - 0];
    var b = biner[maxBiner - 1];
    var c = biner[maxBiner - 2];
    var d = biner[maxBiner - 3];

    q = q + a * Math.pow(2, 0);
    q = q + b * Math.pow(2, 1);
    q = q + c * Math.pow(2, 2);
    q = q + d * Math.pow(2, 3);

    biner = biner.slice(0, biner.length - 1);
    biner = biner.slice(0, biner.length - 1);
    biner = biner.slice(0, biner.length - 1);
    biner = biner.slice(0, biner.length - 1);

    if (q == 0) {
      var hasil = "0";
    } else {
      var hasil = decimalToHex(q);
    }
    result = hasil + result;
  }
  return result;
}

//konversi kecepatan km/jam ke m/s
function KmphToMps(value) {
  var result = (value / 3600) * 1000;
  return result;
}
function MpsToKmph(value) {
  var result = (value / 1000) * 3600;
  return result;
}

//Waktu
function SecToMin(value) {
  var result = value / 60;
  return result;
}
function SecToHour(value) {
  var result = value / 3600;
  return result;
}
function SecToDay(value) {
  var result = value / (3600 * 24);
  return result;
}
function SecToWeek(value) {
  var result = value / (3600 * 24 * 7);
  return result;
}
function MinToSec(value) {
  var result = value * 60;
  return result;
}
function MinToHour(value) {
  var result = value / 60;
  return result;
}
function MinToDay(value) {
  var result = value / (60 * 24);
  return result;
}
function MinToWeek(value) {
  var result = value / (60 * 24 * 7);
  return result;
}
function HourToSec(value) {
  var result = value * 3600;
  return result;
}
function HourToMin(value) {
  var result = value * 60;
  return result;
}
function HourToDay(value) {
  var result = value / 24;
  return result;
}
function HourToWeek(value) {
  var result = value / (24 * 7);
  return result;
}
function DayToSec(value) {
  var result = value * (24 * 3600);
  return result;
}
function DayToMin(value) {
  var result = value * (24 * 60);
  return result;
}
function DayToHour(value) {
  var result = value * 24;
  return result;
}
function DayToWeek(value) {
  var result = value / 7;
  return result;
}
function WeekToSec(value) {
  var result = value * (7 * 24 * 3600);
  return result;
}
function WeekToMin(value) {
  var result = value * (7 * 24 * 60);
  return result;
}
function WeekToHour(value) {
  var result = value * (7 * 24);
  return result;
}
function WeekToDay(value) {
  var result = value * 7;
  return result;
}
