function User(string1, string2, number){
  this.lastName = string1;
  this.firstName = string2;
  this.age = number;
};

//Assume that we are adult after 18
User.prototype.isAdult = function(){
  if(this.age >= 18){
    return true;
  }else{
    return true;
  }
}