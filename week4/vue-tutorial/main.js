var app = new Vue ({
    el: "#app",
    data: {
        message: "Navid is cool",
        message2:"You loaded this data on " + new Date(),
        seen: false,
        students: [
            "Oskar",
            "Samuel",
            "Noor",
            "Ellis",
            "Johnathan",
            'Adeola',
            "Sharan",
            "Ambrose",
            "Kevin",
            "Joel",
            "Denzel",
            "Nick",
            "Nigel",
            "Jared",
            "Jason",
            "Anthony",
            "Abakir"
        ]
    },
    methods:{
        showDiv: function(){
            this.seen = !this.seen;
        }
    }
});

// Vue.component('high-school', {
//   props: ['high'],
//   template: '<li>{{ high.text }}</li>'
// })

// var app7 = new Vue({
//   el: '#app-7',
//   data: {
//     groceryList: [
//       { id: 0, text: 'Bronx Science' },
//       { id: 1, text: 'Stuyvesant' },
//       { id: 2, text: 'Manhattan Village' }
//     ]
//   }
// })

Vue.component('dream-schools', {
  // options
  template: "<div>A good school!</div>"
})

new Vue({
    el: "#universities"
})


var data = { counter: 0 }
Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // data is technically a function, so Vue won't
  // complain, but we return the same object
  // reference for each component instance
  data: function () {
    return {
        counter: 0
    }
  }
})
new Vue({
  el: '#example-2'
})

new Vue({
  el: '#demo',
  data: {
    show: true
  }
})