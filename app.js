// create 10x10 grid
// create buttons (up, down, left, right)
// create a layout to see where the player is located on the grid (randomly generated)
// have a counter for gas
// have a score
// randomly generate passengers
//  when the player gets to designated passenger, they get 10 gas
// create a box for a username
// add event listener for every time player moves, they lose 1 fuel. 
// add listener if fuel === 0, console.log('game over' + final score)

// You should display: (x, y), username, fuel, score, and passenger position in
// the DOM but it does not need to look good.

let taxiModel = Backbone.Model.extend({
    defaults: {
        username: 'Player',
        playerLocation: [0, 0],
        fuel: 10,
        score: 0,
        passLocation: [(Math.floor(Math.random() * 10))], [(Math.floor(Math.random() * 10))],

    },
},

    movement: function (x, y) {
        this.set('playerLocation', [
            this.get('playerLocation')[0] + x,
            this.get('playerLocation')[0] + y,
        ]},

    fuel: function (number) {

    },


);

let taxiCollection = Backbone.Collection.extend({
    model: taxiModel,
});

let taxiView = Backbone.View.extend({
    initialize: function () {
        console.log('working');
        this.model.on('change', this.render, this);
    },
    events: {
        'click #upBtn': 'ups',
        'click #downBtn': 'downs',
        'click #leftBtn': 'lefts',
        'click #rightBtn': 'rights',
    },
    ups: function () {
        let upper = new taxiModel();
        this.model.set("fuel", this.get("fuel") - 1);
    },
    downs: function () {
        let downer = new taxiModel();
        this.model.set("fuel", this.get("fuel") - 1);
    },
    lefts: function () {
        let lefter = new taxiModel();
        this.model.set("fuel", this.get("fuel") - 1);
    },
    rights: function () {
        let righter = new taxiModel();
        this.model.set("fuel", this.get("fuel") - 1);
    },
    render: function () {
        let parent = this.el.querySelector('#user-info');
        prent.innerHTML = '';
        for (let i = 0; i < this.model.length; i++) {
            let username = this.model.at(i).get('username');
            let score = this.model.at(i).get('score');
            let playerLocation = this.model.at(i).get('playerLocation');
            let passLocation = this.model.at(i).get('passLocation');

            let container = document.createElement('div');
            container.innerHTML = '<h3>' + username + '</h3><h4>' + score + '</h4><h5>' + playerLocation + '</h5><h5>' + passLocation + '</h5><h5>' + fuel + '</h5>';
            parent.appendChild(container);
        }
    }
});



window.addEventListener('load', function () {
    let actualModel = new taxiCollection();
    let actualView = new taxiView({
        el: document.querySelector('body'),
        model: actualModel,
    });
});