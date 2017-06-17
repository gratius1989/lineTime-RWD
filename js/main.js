
(function(){
	
var data = [["02.06.2015","Lorem ipsum dolor sit amet","fa-heart"],
            ["11.06.2015","Lorem ipsum dolor sit amet","fa-flask"],
            ["15.06.2015","Lorem ipsum dolor sit amet","fa-gavel"],
            ["22.06.2015","Lorem ipsum dolor sit amet","fa-graduation-cap"],
            ["30.06.2015","Lorem ipsum dolor sit amet","fa-trophy"],
];


function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}

function setCssIcon(str){
    return parseFloat(str.substring(0, 2));
}

var dateObj = new Date();
var day = dateObj.getDate()
var month = dateObj.getUTCMonth() + 1;
var year = dateObj.getUTCFullYear();
var days = daysInMonth(month,year);
var progressLine = (day/days) * 100;
progressLine2 = progressLine + "%";

$(".progress").css("width", progressLine2);


for (var i = 0; i <=  data.length - 1; i++){

    var dd = setCssIcon(data[i][0]);
    dd = (dd / days) * 100;
    var dd2 = dd + "%";

    $('<div>').addClass("mark icon"+i+"").css("left", "calc("+dd2+" - 21px )").appendTo('.progress-bar');
    $("<div>").addClass("tooltip t"+i+"").appendTo(".icon"+i+"");
    $("<i>").addClass("fa "+data[i][2]+"").appendTo(".icon"+i+"");
    $("<h3>").text(""+data[i][0]+"").appendTo(".t"+i+"");
    $("<span>").text(""+data[i][1]+"").appendTo(".t"+i+"");

    if( progressLine >= dd ){
        $("."+data[i][2]+"").addClass("i-check");
    }

}


})();







