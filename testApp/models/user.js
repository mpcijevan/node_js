/**
 * Created by artak on 11/5/13.
 */

exports.user = function()
{
    var ID;
    var username;
    var surname;
    var age;
    var nationality;


     this.get_user_name = function(){
        return this.username;
     }

    this.set_username = function(name){
        this.username = name;
    }

    this.get_surname = function(){
        return this.surname;
    }

    this.set_surname = function(surname){
        this.surname = surname;
    }

    this.get_age = function(){
        return this.age;
    }

    this.set_age = function(age){
        this.age = age;
    }

    this.get_nationality = function(){
        return this.nationality;
    }

    this.set_nationality = function(nation){
        this.nationality = nation;
    }

    this.set_id = function(id){
        this.ID = id;
    }

    this.get_id = function(){
        return this.ID;
    }

};


