    function affair(affclass,qclass) {
        this.affbtn = document.getElementsByClassName(affclass);
    }
    affair.prototype = {
        act: function () {
            this.affbtn[0].addEventListener('click', function (e) {
                var btn = e.target.className;
                console.log(e.target.className);
                switch (btn) {
                    case "Q":window.location.href="question.html";
                    break;
                    case "A":;
                    break;
                    case "WP":;
                    break;
                    case "WI":;
                    break;
                }
            });
        },
        Question:function(){

        }
    }
    var myaffair = new affair("myaffair","question");
    myaffair.act();
