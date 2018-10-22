var xmlhttp = new XMLHttpRequest();
var obj2 = new Array();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        var items = "";
        addCatNameTitle(myObj.lorkta[0].art);
        for (var a in myObj.lorkta[0].art) {
            items += mascard(myObj.lorkta[0].art[a]);
        }

        $(".mycard-data").html(items);

    }
};
xmlhttp.open("GET", "../Json/Data.json", false);
xmlhttp.send();

var ID




function getCardID(id) {
    alert(id);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            var items = "";

            for (var a in myObj.lorkta[0].art) {

                //console.log( myObj.lorkta[0].art[a].)
                items += mascard(myObj.lorkta[0].art[a]);
                var mdata = myObj.lorkta[0].art;
                console.log(mdata)
                var myID = Number(id) - 1
                console.log(myID)
                if (id == myObj.lorkta[0].art[a].id) {
                    console.log("ID" + id)
                   
                        var concate = `
               <div id="body-sub" class="row d-flex justify-content-center" style="width:65%;;background-color: rgba(197, 13, 84, 0);">

               <div class="col" style="width:65%;">

                       <div style="width:100%">
                           <video style="border-radius:5px" id="plyr-video" poster="../image/` + mdata[myID].img + `" controls>
                               <source src="../videos/kakun.mp4" type="video/mp4">
                           </video>
                       </div>
           
                       <div class="row-md-7 customecard-r2 cusbot-bar fontMetal customtitle" style="background-color: white; ">
                           <h4 >
                           ` + mdata[myID].title + `
                           </h4>
                           <div class="weswap-current ">
                              
                           ` + mdata[myID].fuldes + `
                  
                           </div>
                       </div>
                   </div>
           

       </div>
               `
                        // console.log(i)
                        // console.log(mdata[i].img)

                    }
                    //  console.log(i)
                    //  console.log(mdata)
              
            }

            concate += `<script src="../js/jquery-3.3.1.min.js"></script>
            <script src="../js/bootstrap.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            <script src="../js/plyr.js"></script>
            <script src="../js/detail-script.js"></script>
            <script src="../js/detail.js"></script>`;



            $(".mycard-data").html(concate);
        }
    };
    xmlhttp.open("GET", "../Json/Data.json", false);
    xmlhttp.send();



    // $(".mycard-data").html(a);

    ID = id;
}

function addCatNameTitle(obj) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            var item = myObj.lorkta[0].art;
            console.log(item[0].type);


            var concate = ` <div class="row px-3 d-flex justify-content-center">
                
                             <img class="mt-2" src="../image/` + item.img + `" alt="">
                             <h2><a href="#">` + item[0].type + `</a></h2>

                         </div>`;

            $(".catdata").html(concate);
        }
    };
    xmlhttp.open("GET", "../Json/Data.json", false);
    xmlhttp.send();
}


function mascard(obj) {

    var a =
        `<div class="row res-cat "  id='` + obj.id + `' onClick='getCardID(this.id)'>

                <div class="col-md-5 customecard-l" style="background-color: white;height: 250px;z-index:100;background-image: url('../image/` + obj.img + `');  ">
                <!-- place for image here -->
                </div>
                 <div class="col-md-7 customecard-r fontMetal" style="background-color: white;">
                    <h4 class="my-3 fontMoulpali">` + obj.title + `</h4>
                    <p>` + obj.des + `</p>
                </div>
             </div>`;



    return a;
}