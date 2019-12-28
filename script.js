$('#save').clik(function () {
    $.post($("#content").attr("action"), data, function (info) {$("#result").html(info);});
});

$("#content").submit(function () {
    return false;

});