new Vue({
    el:'#app',
    data:{
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods:{
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function(){
            var damage = this.calculaDamage(3, 10);
            if(this.checkWin()){
                return;
            }
        },
        calculaDamage: function(){
            var max = 10;
            var min = 3;
            var damage = Math.max(Math.floor(Math.random() *max) + 1, min)
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });
        },
        checkWin: function(){
            
        },
        specialAttack: function(){
          var max = 20;
          var min = 10;
          var damage = Math.random()*max +1, min;
          this.monsterHealth -= damage;
          this.turns.unshift({
              isPlayer : true,
              text: 'Player specialAttack Monster for ' + damage
          });    
        },
        heal: function(){

        },
        giveUp: function(){
            
        }
    }
})