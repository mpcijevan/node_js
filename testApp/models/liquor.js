/**
 * Created by artak on 11/5/13.
 */

exports.liquor = function()
{
    var id;
    var name;
    var brand;
    var size;
    var price;
    var is_alcohol;//0: false, 1: true


     this.get_name = function(){
        return this.name;
     }

    this.set_name = function(name){
        this.name = name;
    }

    this.brand = function(){
        return this.brand;
    }

    this.set_brand = function(brand){
        this.brand = brand;
    }

    this.get_size = function(){
        return this.size;
    }

    this.set_size = function(size){
        this.size = size;
    }

    this.get_price = function(){
        return this.price;
    }

    this.set_price = function(price){
        this.price = price;
    }

    this.set_id = function(id){
        this.ID = id;
    }

    this.get_id = function(){
        return this.ID;
    }

    this.get_is_alcohol = function(){
        return this.is_alcohol;
    }

    this.set_is_alcohol = function(is_alcohol){
        this.is_alcohol = is_alcohol;
}


};


