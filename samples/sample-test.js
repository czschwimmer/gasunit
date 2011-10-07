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