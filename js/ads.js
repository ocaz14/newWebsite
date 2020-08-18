var ads_160x600 = [
  "//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=audiblegiftmemberships&banner=0EDEB3T66XHZ92QWGBR2&f=ifr&linkID=7df018aa14bc6354fd7761a0b5de8086&t=sanaabil-20&tracking_id=sanaabil-20"
];

var ads_728x90 = [
  "//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=audiblegiftmemberships&banner=0H19Q7AG4V8GED6WJ9G2&f=ifr&linkID=50e8babce88f9cd4e6e5a71d8d6cde66&t=sanaabil-20&tracking_id=sanaabil-20",
  "//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=primemain&banner=1FM3MKXZNJ0PPEBRV2R2&f=ifr&linkID=b6c8d01d368fbe01a13d0afdd3ad6a15&t=sanaabil-20&tracking_id=sanaabil-20"
];

var ads_468x60 = [
  "//rcm-na.amazon-adsystem.com/e/cm?o=1&p=26&l=ur1&category=audiblegiftmemberships&banner=0MTVS34VEYK5230XYAR2&f=ifr&linkID=98207c31d126ffb860979b7a3500c0cd&t=sanaabil-20&tracking_id=sanaabil-20",
  "//rcm-na.amazon-adsystem.com/e/cm?o=1&p=13&l=ur1&category=primemain&banner=0NVA2PKRAY588CJNAYG2&f=ifr&linkID=60a19154eaab14da9d562903349be8ea&t=sanaabil-20&tracking_id=sanaabil-20"
];

var ads_start =
  "<div class='ads-start'>" +
  //
  "<div class='ads-1'><iframe src='" +
  ads_160x600[0] +
  "' width='160' height='600' scrolling='no' border='0' marginwidth='0' style='border:none;' frameborder='0'></iframe></div>" +
  //
  "<div class='ads-2'><iframe src='" +
  ads_728x90[0] +
  "' width='728' height='90' scrolling='no' border='0' marginwidth='0' style='border:none;' frameborder='0'></iframe></div>" +
  //
  "<div class='ads-3'><iframe src='" +
  ads_468x60[0] +
  "' width='468' height='60' scrolling='no' border='0' marginwidth='0' style='border:none;' frameborder='0'></iframe></div>" +
  //
  "</div>";

var ads_end =
  "<div class='ads-end'>" +
  //
  "<div class='ads-1'><iframe src='" +
  ads_728x90[1] +
  "' width='728' height='90' scrolling='no' border='0' marginwidth='0' style='border:none;' frameborder='0' ></iframe></div>" +
  //
  "<div class='ads-2'><iframe src='" +
  ads_728x90[1] +
  "' width='728' height='90' scrolling='no' border='0' marginwidth='0' style='border:none;' frameborder='0' ></iframe></div>" +
  //
  "<div class='ads-3'><iframe src='" +
  ads_468x60[1] +
  "' width='468' height='60' scrolling='no' border='0' marginwidth='0' style='border:none;' frameborder='0'></iframe></div>" +
  //
  "</div>";

document.getElementById("ads-start").innerHTML = ads_start;
document.getElementById("ads-end").innerHTML = ads_end;
