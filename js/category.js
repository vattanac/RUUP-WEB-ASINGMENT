// $(document).ready(function () {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            var items = "";
            for (var c in myObj.category) {
                items += mascard(myObj.category[c]);
                // $(".mycarousel").append(mascard(myObj.category[c]));

            }
            $(".mycarousel").html(items);


        }
    };
    xmlhttp.open("GET", "../Json/category.json", false);
    xmlhttp.send();

// });


function mascard(category) {
    var c =
        `<div class="carousel-cell " style="background-image: url('` + category.img + `'); background-size: 100% 100%;">
<div class="rgba-black-strong">
    <!-- Content -->
    <div class="text-white text-center" id="card-content">
        <div class="">
            <h3 class="card-title pt-2 fontMoulpali"><strong><a href="" style="color:#ffffff;">` + category.type + `</a></strong></h3>
            <div id="border1"></div>
            <p ><small>មាសមិនអាចកាត់ថ្លៃបាន</small></p>

        </div>
    </div>
  
</div>
</div>`
    return c;
}