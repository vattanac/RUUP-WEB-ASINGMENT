

// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var myObj = JSON.parse(this.responseText);
//         var items = "";

//         for (var a in myObj.lorkta[0].art) {
//             //console.log( myObj.lorkta[0].art[a])
//             items = myObj.lorkta[0].art[a];
            

//                 var concate = `
//                <div id="body-sub" class="row d-flex justify-content-center" style="width:65%;;background-color: rgba(197, 13, 84, 0);">

//                <div class="col" style="width:65%;">

//                        <div style="width:100%">
//                            <video style="border-radius:5px" id="plyr-video" poster="../image/w2.jpg" controls>
//                                <source src="../videos/kakun.mp4" type="video/mp4">
//                            </video>
//                        </div>
           
//                        <div class="row-md-7 customecard-r2 cusbot-bar fontMetal customtitle" style="background-color: white; ">
//                            <h4 >ចោរ​បន្លំ​ចូល​ក្នុង​គណនី ​Facebook ​របស់​អ្នក​ប្រើ
//                                ​មិន​តិច​ជាង​៥០​លាន​គណនី</h4>
//                            <div class="weswap-current ">
                              
//                                វិបត្តិសន្តិសុខបច្ចេកវិទ្យា កំពុងតែធ្វើឲ្យរញ្ជួយក្រុមហ៊ុន Facebook ដែលជាក្រុមហ៊ុនបណ្តាញសង្គម
//                                ដ៏ធំជាងគេបំផុតលើលោក។ ពីស៊ីលីកូន វ៉ាឡេ រដ្ឋកាលីហ្វ័រញ៉ា កាលពីថ្ងៃសុក្រ ទី២៨កញ្ញា លោក Mark
//                                Zuckerberg អគ្គនាយកនៃអាណាចក្របណ្តាញសង្គមនេះ បានប្រកាសថា Facebook ទើបតែត្រូវបាន
//                                រងនូវការចូលបន្លំលុកលុយ ពីសំណាក់​ចោរ​ព័ត៌មានវិទ្យា។ មានគណនីFacebook យ៉ាងហោចណាស់ ៥០លាន​គណនី
//                                ដែលត្រូវបានចោរព័ត៌មានវិទ្យា បន្លំចូល និងប្រើប្រាស់។ ក្រុមហ៊ុនFacebook បានធ្វើការសូម​ទោស
//                                ទៅដល់អ្នកប្រើប្រាស់ទាំងអស់ ហើយបានសន្យា បំពេញកង្វះខាត ផ្នែកសន្តិសុខបច្ចេកវិទ្យា​នេះឲ្យបាន។
           
                              
//                            </div>
//                        </div>
//                    </div>
           

//        </div>
//                `

//             }
//         }

//         concate += `<script src="../js/jquery-3.3.1.min.js"></script>
//             <script src="../js/bootstrap.min.js"></script>
//             <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
//             <script src="../js/plyr.js"></script>
//             <script src="../js/detail-script.js"></script>
//             <script src="../js/detail.js"></script>`;



//         $(".mycard-data").html(concate);
//     }

// xmlhttp.open("GET", "../Json/home.json", false);
// xmlhttp.send();



// // $(".mycard-data").html(a);

// function addCatNameTitle(obj) {
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             var myObj = JSON.parse(this.responseText);
//             var item = myObj.lorkta[0].art;
//             console.log(item[0].type);


//             var concate = ` <div class="row px-3 d-flex justify-content-center">
                
//                              <img class="mt-2" src="../image/` + item.img + `" alt="">
//                              <h2><a href="#">` + item[0].type + `</a></h2>

//                          </div>`;

//             $(".catdata").html(concate);
//         }
//     };
//     xmlhttp.open("GET", "../Json/home.json", false);
//     xmlhttp.send();
// }