        var app = new Vue({
            el: '#app',
            data: {
                posts: {},
                authors: {}
            },
            mounted: function () {
                // GET /Posts
                this.$http.get('http://maqe.github.io/json/posts.json').then(response => {

                    // get body data
                    this.posts = response.body;

                }, response => {
                    // error callback
                });
                // GET /Authors
                this.$http.get('http://maqe.github.io/json/authors.json').then(response => {

                    // get body data
                    this.authors = response.body;


                }, response => {
                    // error callback
                });


            },
            methods: {
                init: function () {

                },
                getAuthor: function (id) {

                    var data = this.authors.filter(function (item) {
                        return item.id == id;
                    });


                    return data[0] || {};
                }
            }
        })