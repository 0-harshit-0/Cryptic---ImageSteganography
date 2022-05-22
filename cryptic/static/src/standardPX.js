
let standards=[["88 x 31"],["120 x 60"],["120 x 90"],["120 x 150"],["120 x 240"],["120 x 450"],["120 x 600"],["125 x 125"],["160 x 600"],["180 x 150"],["234 x 60"],["240 x 400"],["250 x 250"],["300 x 250"],["300 x 600"],["336 x 280"],["468 x 40"],["468 x 60"],["468 x 240"],["468 x 336"],["728 x 90"],["438 x 625"],["1050 x 1500"],["500 x 500"],["1200 x 1200"],["500 x 625"],["1200 x 1500"],["500 x 750"],["1200 x 1800"],["500 x 1000"],["1200 x 2400"],["500 x 1125"],["1200 x 2700"],["500 x 1500"],["1200 x 3600"],["625 x 625"],["1500 x 1500"],["625 x 875"],["1500 x 2100"],["625 x 1250"],["1500 x 3000"],["625 x 1875"],["1500 x 4500"],["750 x 1000"],["1800 x 2400"],["750 x 1125"],["1800 x 2700"],["875 x 1250"],["2100 x 3000"],["1000 x 1000"],["2400 x 2400"],["1000 x 1250"],["2400 x 3000"],["1000 x 1500"],["2400 x 3600"],["1000 x 2000"],["2400 x 4800"],["1000 x 2500"],["2400 x 6000"],["1000 x 3000"],["2400 x 7200"],["1063 x 1375"],["2550 x 3300"],["1125 x 1500"],["2700 x 3600"],["1250 x 1250"],["3000 x 3000"],["1250 x 1500"],["3000 x 3600"],["1250 x 1625"],["3000 x 3900"],["1250 x 1750"],["3000 x 4200"],["1250 x 1875"],["3000 x 4500"],["1250 x 2000"],["3000 x 4800"],["1250 x 2500"],["3000 x 6000"],["1250 x 3250"],["3000 x 7800"],["1250 x 3750"],["3000 x 9000"],["1375 x 1750"],["3300 x 4200"],["1375 x 2125"],["3300 x 5100"],["1500 x 1500"],["3600 x 3600"],["1500 x 2000"],["3600 x 4800"],["1500 x 2250"],["3600 x 5400"],["1500 x 2500"],["3600 x 6000"],["1500 x 3000"],["3600 x 7200"],["1500 x 4500"],["3600 x 10800"],["1625 x 2500"],["3900 x 6000"],["1750 x 1750"],["4200 x 4200"],["1750 x 2750"],["4200 x 6600"],["1875 x 3750"],["4500 x 9000"],["2000 x 2000"],["4800 x 4800"],["2000 x 2500"],["4800 x 6000"],["2000 x 3000"],["4800 x 7200"],["2250 x 3000"],["5400 x 7200"],["2500 x 2500"],["6000 x 6000"],["2500 x 3000"],["6000 x 7200"],["2500 x 3750"],["6000 x 9000"],["2500 x 5000"],["6000 x 12000"],["2750 x 3500"],["6600 x 8400"],["3000 x 3000"],["7200 x 7200"],["3000 x 3750"],["7200 x 9000"],["3000 x 4500"],["7200 x 10800"],["3750 x 3750"],["9000 x 9000"],["3750 x 5000"],["9000 x 12000"],["3750 x 5625"]["9000 x 13500"]];
//console.log(standards)
function find(s) {
  for (var i = 0; i < standards.length; i++) {
    let z = standards[i];
    let temp = z[0].split(" x ");
    if(temp[0]*temp[1] > s){
      return temp.join("x");
      break;
    }
  }
}