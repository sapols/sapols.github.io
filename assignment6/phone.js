$(document).ready(function() {       //Do this when the document is loaded
    $("#dialerContent").show();      //Show the element with ID ""
    $("#contactListContent").hide(); //Hide the element with ID "contactListContent"
    $("#addContactContent").hide();
    $("#aboutContent").hide();
    $("#dialerTab").addClass("current-tab");
});

//Tab functionality
$("#dialerTab").click(function() { //When "dialerTab" is clicked
    $("#dialerContent").show();
    $("#contactListContent").hide();
    $("#addContactContent").hide();
    $("#aboutContent").hide();

    $("#dialerTab").addClass("current-tab");
	$("#contactListTab").removeClass("current-tab");
	$("#addContactTab").removeClass("current-tab");
    $("#aboutTab").removeClass("current-tab");
});
$("#contactListTab").click(function() { //When "contactListTab" is clicked
    $("#contactListContent").show();
    $("#dialerContent").hide();
    $("#addContactContent").hide();
    $("#aboutContent").hide();

    $("#contactListTab").addClass("current-tab");
    $("#dialerTab").removeClass("current-tab");
    $("#addContactTab").removeClass("current-tab");
    $("#aboutTab").removeClass("current-tab");
});
$("#addContactTab").click(function() { //When "addContactTab" is clicked
    $("#addContactContent").show();
    $("#dialerContent").hide();
    $("#contactListContent").hide();
    $("#aboutContent").hide();

    $("#addContactTab").addClass("current-tab");
    $("#contactListTab").removeClass("current-tab");
    $("#dialerTab").removeClass("current-tab");
    $("#aboutTab").removeClass("current-tab");
});
$("#aboutTab").click(function() { //When "aboutTab" is clicked
    $("#aboutContent").show();
    $("#contactListContent").hide();
    $("#addContactContent").hide();
    $("#dialerContent").hide();

    $("#aboutTab").addClass("current-tab");
	$("#contactListTab").removeClass("current-tab");
	$("#addContactTab").removeClass("current-tab");
    $("#dialerTab").removeClass("current-tab");
});

//----"Backend" functionality---------------------------------------------------

//Dialer tab

function addNumberToPhoneNumber(num) {
    var phoneNumberStr = $("#dialNumberInput").val();
    phoneNumberStr = phoneNumberStr.concat(num);
    var formattedStr = formatPhoneNumber(phoneNumberStr);

    $("#dialNumberInput").val(formattedStr);
}

function formatPhoneNumber(phoneNum) {
    var length = phoneNum.length;
    var hasAsterisk = phoneNum.includes("*");
    var hasOctothorp = phoneNum.includes("#");

    if (!hasAsterisk && !hasOctothorp) {
        switch (length) {
            case 3:
                phoneNum = '('+phoneNum+')';
                break;
            case 6:
                phoneNum = phoneNum.substring(0, 5) + " " + phoneNum.substring(5, 6);
                break;
            case 10:
                phoneNum = phoneNum.substring(0, 9) + "-" + phoneNum.substring(9, 10);
                break;
        }
    }

    return phoneNum;
}

$(".one").click(function() {
    addNumberToPhoneNumber("1");
});
$(".two").click(function() {
    addNumberToPhoneNumber("2");
});
$(".three").click(function() {
    addNumberToPhoneNumber("3");
});
$(".four").click(function() {
    addNumberToPhoneNumber("4");
});
$(".five").click(function() {
    addNumberToPhoneNumber("5");
});
$(".six").click(function() {
    addNumberToPhoneNumber("6");
});
$(".seven").click(function() {
    addNumberToPhoneNumber("7");
});
$(".eight").click(function() {
    addNumberToPhoneNumber("8");
});
$(".nine").click(function() {
    addNumberToPhoneNumber("9");
});
$(".zero").click(function() {
    addNumberToPhoneNumber("0");
});
$(".asterisk").click(function() {
    addNumberToPhoneNumber("*");
});
$(".octothorp").click(function() {
    addNumberToPhoneNumber("#");
});

$(".clear").click(function() {
    $("#dialNumberInput").val("");
});
$(".dial").click(function() {
    var phoneNumberStr = $("#dialNumberInput").val();
    if (phoneNumberStr != "") {
        //Show "Dialing!" for only 3 seconds
        $("#dialNumberInput").val("Dialing!");
        setTimeout(function() {
            $("#dialNumberInput").val(phoneNumberStr);
        }, 2000);
    }
});

//Add Contact tab

$("#addContactButton").click(function() {
    var contactName = $("#nameInput").val();
    var contacts = document.getElementById("contactList");

    if (contactName != "") {
        var newDiv = document.createElement("div");
        var classAttr = document.createAttribute("class"); //Create a "class" attribute
        classAttr.value = "pure-button contact"; //Set the value of the class attribute
        newDiv.setAttributeNode(classAttr); //Add the class attribute to the new div
        var styleAttr = document.createAttribute("style")
        styleAttr.value = "margin: 5px 2px 5px 2px !important";
        newDiv.setAttributeNode(styleAttr);
        newDiv.innerHTML = contactName;

        contacts.appendChild(newDiv);

        //Show success message for 2 seconds
        $("#successMessage").css('visibility', 'visible');
        setTimeout(function() {
            $("#successMessage").css('visibility', 'hidden');
        }, 2000);
    }
});
$("#clearContactButton").click(function() {
    $("#nameInput").val("");
    $("#phoneNumberInput").val("");
    $("#emailAddressInput").val("");
});
