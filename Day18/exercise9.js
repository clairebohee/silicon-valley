var warrior_factory = function(name_arg, weapon_arg){
      return {
          name : name_arg,
          weapon : weapon_arg,
          attack : function(){
            console.log(this.name + "병사가 " + this.weapon+ "으로 공격합니다." );
          },
          adventure : function(){
            this.attack();
            this.attack();
            this.attack();
            this.attack();
            return this.name + "병사가 많은 경험을 쌓았습니다.";
          }
      };

    }

warrior_factory("Claire", "Coding");
console.log(warrior_factory.name);
