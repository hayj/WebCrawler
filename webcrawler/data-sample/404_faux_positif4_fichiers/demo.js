$i = jQuery.noConflict();
function setStateHtmlUC(total,cid, chunkid) {
    if (cid.value == "0") {
        alert('Choose City');
    }
    else {
        $i.ajax({
            type: 'POST',
            url: 'http://www.tribuneindia.com/home.aspx/bindDropDownData',
            data: "{'total_story': '" + total + "', 'cId': '" + cid.value + "'}",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function(msg) {
                //alert(msg.d);
                document.getElementById(chunkid).innerHTML = msg.d;
            },
            error: function(err) {
                alert(err.d);
            }
        });
    }
}
$i(function() {
    $i("img.more").click(function() {
        $i(this).after($i('#MoreCat-' + $i(this).attr("id")).slideDown("fast"));
        $i(this).hide();
        $i('#Minus-' + $i(this).attr("id")).show();
    });
    $i("span img.Less").click(function() {
        var moreid = $i(this).attr("id").split('-')[1];
        $i('#MoreCat-' + moreid).slideUp("fast");
        $i(this).hide();
        $i('#' + moreid).show();
    });
    $i("#plusicon").click(function() {
        if ($i("#fullart").is(":hidden")) {
            $i("#fullart").fadeIn("slow");
            $i("#synop").hide();
            $i(this).text('[ - ]');
        } else {
            $i("#fullart").hide();
            $i("#synop").slideDown("slow");
            $i(this).text('[ + read story ]');
        }
    });
});

//Email Validator
function ClientEmailCheck(q) {
    var theurl = document.getElementById(q).value;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(theurl) || theurl == "") {
        return (true)
    }
    return (false)
}

function chk_str(str) {
    var strblank = 1;
    for (i = 0; i <= str.length; i++) {
        if ((str.substr(i, 1) != " ") && (str.substr(i, 1) != "") && (str.substr(i, 1) != "\n") && (str.substr(i, 1) != "\r")) {
            strblank = 0;
            break;
        }
        else {
            strblank = 1;
            continue;
        }
    }
    return (strblank);
}

function check(pretext) {
    if (chk_str(document.getElementById(pretext + 'txtname').value) == 1) {
        alert('Please enter your name.');
        document.getElementById(pretext + 'txtname').focus();
        return false;
    }
    if (chk_str(document.getElementById(pretext + 'txtEmail').value) == 1 || !ClientEmailCheck(pretext + 'txtEmail')) {
        alert("Invalid E-mail Address! Please re-enter.")
        document.getElementById(pretext + 'txtEmail').focus();
        return false;
    }
    if (chk_str(document.getElementById(pretext + 'txtAdvtContent').value) == 1) {
        alert('Please enter Advertisement Content.');
        document.getElementById(pretext + 'txtAdvtContent').focus();
        return false;
    }
    if (chk_str(document.getElementById(pretext + 'txtphone').value) == 0 && isNaN(document.getElementById(pretext + 'txtphone').value) == true) {
        alert('Please enter Complete Phone Number in numeric form .');
        document.getElementById(pretext + 'txtphone').focus();
        return false;
    }

    chkflg = 'false';

    $i('input:checkbox').each(function() {
        if (this.checked)
            chkflg = 'true';
    });

    if (chkflg != 'true') {
        alert('You need to select at least one newspaper to be published in.');
        return false;
    }

    if (document.getElementById(pretext + 'CheckBox1').checked == true) {
        if (document.getElementById(pretext + 'TextBox1').value == "" || isNaN(document.getElementById(pretext + 'TextBox1').value) == true) {
            alert('No. of insertions for Online Edition should have a numeric value.');
            return false;
        }
    }

    if (document.getElementById(pretext + 'CheckBox2').checked == true) {
        if (document.getElementById(pretext + 'TextBox2').value == "" || isNaN(document.getElementById(pretext + 'TextBox2').value) == true) {
            alert('No. of insertions for The Tribune should have a numeric value.');
            return false;
        }
    }

    if (document.getElementById(pretext + 'CheckBox3').checked == true) {
        if (document.getElementById(pretext + 'TextBox3').value == "" || isNaN(document.getElementById(pretext + 'TextBox3').value) == true) {
            alert('No. of insertions for Punjabi Tribune should have a numeric value.');
            return false;
        }
    }

    if (document.getElementById(pretext + 'CheckBox4').checked == true) {
        if (document.getElementById(pretext + 'TextBox4').value == "" || isNaN(document.getElementById(pretext + 'TextBox4').value) == true) {
            alert('No. of insertions for Dainik Tribune should have a numeric value.');
            return false;
        }
    }

    if (document.getElementById(pretext + 'TextBox1').value != "") {
        if (!(document.getElementById(pretext + 'CheckBox1').checked)) {
            alert("Please select the check box for Online Edition.");
            return false;
        }
    }

    if (document.getElementById(pretext + 'TextBox2').value != "") {
        if (!(document.getElementById(pretext + 'CheckBox2').checked)) {
            alert("Please select the check box for The Tribune.");
            return false;
        }
    }
    if (document.getElementById(pretext + 'TextBox3').value != "") {
        if (!(document.getElementById(pretext + 'CheckBox3').checked)) {
            alert("Please select the check box for Punjabi Tribune.");
            return false;
        }
    }
    if (document.getElementById(pretext + 'TextBox4').value != "") {
        if (!(document.getElementById(pretext + 'CheckBox4').checked)) {
            alert("Please select the check box for Dainik Tribune.");
            return false;
        }
    }

    return true;

}



function setServicesHtmlUC(total, cid, chunkid) {
    if (cid.value == "0") {
        alert('Choose City');
    }
    else {
        $i.ajax({
            type: 'POST',
            url: 'http://www.tribuneindia.com/home.aspx/bindCityServices',
            data: "{'total_story': '" + total + "', 'cId': '" + cid.value + "'}",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function(msg) {
                //alert(msg.d);
                document.getElementById(chunkid).innerHTML = msg.d;
            },
            error: function(err) {
                alert(err.d);
            }
        });
    }
}