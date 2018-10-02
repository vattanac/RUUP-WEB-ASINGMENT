// $(document).ready(function () {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            var items = "";
            // var i=0;
            for (var a in myObj.art) {
              // items += mascard(myObj.art[a]);
                // i++
                console.log(myObj);
                
            }
            $(".mycard-data").html(items);
        }
    };
    xmlhttp.open("GET", "../Json/test.json", false);
    xmlhttp.send();
    
    // });
    var ID
    function getCardID(id){
        alert(id);
        ID = id;
    }
    
    function mascard(art) {
    
            var a =
            `<div class="col" style="width:65%;">

            <div style="width:100%">
                <video style="border-radius:5px" id="plyr-video" poster="../image/w2.jpg" controls>
                    <source src="../videos/kakun.mp4" type="video/mp4">
                </video>
            </div>

            <div class="row-md-7 customecard-r2 cusbot-bar fontMetal customtitle" style="background-color: white; ">
                <h4 >ចោរ​បន្លំ​ចូល​ក្នុង​គណនី ​Facebook ​របស់​អ្នក​ប្រើ
                    ​មិន​តិច​ជាង​៥០​លាន​គណនី</h4>
                <div class="weswap-current ">
                   
                    វិបត្តិសន្តិសុខបច្ចេកវិទ្យា កំពុងតែធ្វើឲ្យរញ្ជួយក្រុមហ៊ុន Facebook ដែលជាក្រុមហ៊ុនបណ្តាញសង្គម
                    ដ៏ធំជាងគេបំផុតលើលោក។ ពីស៊ីលីកូន វ៉ាឡេ រដ្ឋកាលីហ្វ័រញ៉ា កាលពីថ្ងៃសុក្រ ទី២៨កញ្ញា លោក Mark
                    Zuckerberg អគ្គនាយកនៃអាណាចក្របណ្តាញសង្គមនេះ បានប្រកាសថា Facebook ទើបតែត្រូវបាន
                    រងនូវការចូលបន្លំលុកលុយ ពីសំណាក់​ចោរ​ព័ត៌មានវិទ្យា។ មានគណនីFacebook យ៉ាងហោចណាស់ ៥០លាន​គណនី
                    ដែលត្រូវបានចោរព័ត៌មានវិទ្យា បន្លំចូល និងប្រើប្រាស់។ ក្រុមហ៊ុនFacebook បានធ្វើការសូម​ទោស
                    ទៅដល់អ្នកប្រើប្រាស់ទាំងអស់ ហើយបានសន្យា បំពេញកង្វះខាត ផ្នែកសន្តិសុខបច្ចេកវិទ្យា​នេះឲ្យបាន។

                   
                </div>
            </div>
        </div>

       `
        
            
        return a;
    }