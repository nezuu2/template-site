$(function(){
  $("#check-jquery").text("このサイトにはJQueryが導入されています。");

  $("#button").on('click', function() {
    $("#text").text("buttonが押されました。");
  });

  $("#btn").on('click', function() {
    alert("作者のTwitterのリンクへ飛びます。\nお問い合わせはDMへお願いします。");
  });

  $("#button-a").on('click', function() {
    alert("click!");
  });
});