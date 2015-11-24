# What is GASUnit #
GASUnit is a simple unit test library for Google Apps Script.
Library is very poor for the moment, but it will grow soon.

It is fully integrated with Google spreadsheet :
  * tests run in Script Editor
  * results displayed in a dedicated sheet
  * specific assertions for actions on Spreadsheet like : cell content, cell background color, ...

# Sample #

Here is a sample. I want to test my object User.

```
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
```

So, I create a new file in my script editor, called sample-test.
The script must :
  * declare the GASUnit library
  * implement an test object
  * implement a method for test run

```
var gasunit = UrlFetchApp.fetch("http://gasunit.googlecode.com/svn/trunk/gasunit.js").getContentText();
eval(gasunit);

var userTest = {
  testIsAdult : function(){
    var user =  new User("Doe","John","19");
    assertTrue(user.isAdult());
  },
  testIsNotAdult : function(){
    var user =  new User("Doe","John","17");
    assertFalse(user.isAdult());
  }
};

function main(){  
  GSUnit.runTest(userTest);
}
```