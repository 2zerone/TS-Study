"use strict";
var categoryEnum;
(function (categoryEnum) {
    categoryEnum["H"] = "H";
    categoryEnum["K"] = "K";
    categoryEnum["S"] = "S";
})(categoryEnum || (categoryEnum = {}));
var category = categoryEnum.H;
// web app
// base line
// server
function cate(category) {
    if (category === "H") {
        console.log("5% 할인");
    }
    else if (category === "K") {
        console.log("50% 할인");
    }
    else if (category === "S") {
        console.log("80% 할인");
    }
    else {
        console.log("server stop");
    }
}
cate(category);
