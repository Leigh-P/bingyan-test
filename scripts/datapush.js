    //创建数据对象
    function datapush(fooddata, Internetdata, topicclass, userimgclass, usernameclass, usermottoclass, titleclass, bodyclass, likeclass, reviewclass) {
        this.topic = document.getElementsByClassName(topicclass);
        this.userimg = document.getElementsByClassName(userimgclass);
        this.username = document.getElementsByClassName(usernameclass);
        this.usermotto = document.getElementsByClassName(usermottoclass);
        this.title = document.getElementsByClassName(titleclass);
        this.body = document.getElementsByClassName(bodyclass);
        this.review = document.getElementsByClassName(reviewclass);
        this.like = document.getElementsByClassName(likeclass);
        console.log(this.username);
        this.fooddata = food;
        this.Internetdata = Internet;

    }
    datapush.prototype = {
        init: function () {
            for (var i = 0; i < this.fooddata.length; i++) {
                this.topic[i].innerText = this.fooddata[i].topic;
                console.log(this.topic[i]);
                this.userimg[i].src = this.fooddata[i].user.img;
                // this.username.innerText = this.fooddata[i].user.name;
                this.usermotto[i].innerText = this.fooddata[i].user.motto;
                this.title[i].innerText = this.fooddata[i].passage.title;
                this.body[i].innerText = this.fooddata[i].passage.bodycoll;
                this.like[i].innerText = this.fooddata[i].vote;
                this.review[i].innerText = this.fooddata[i].review;
            }

        }
    }
    var data = new datapush(food, Internet, 'topic', 'userimg', 'username', 'usermotto', 'title', 'body', 'like', 'review');
    data.init();