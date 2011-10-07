var GSUnit = {
  runTest : function(testClass){
    var outPut = new GSUnit.Output();
    outPut.initOutPut();
    var numberOfTests = 0;
    for(var methode in testClass){
      numberOfTests++;
    }
    outPut.setNumberOfTests(numberOfTests);
    
    for(var methode in testClass){
      try{
        testClass[methode]();
        outPut.increaseSuccessTest();
        outPut.addSuccessTestLine(methode);
      }catch(e){
        outPut.increaseFailedTests();
        outPut.addFailedTestLine(methode,e);
      }
    }
  }
};

GSUnit.Output = function(){
  var sheetName = "GSUnit";
  var sheet = null;
  var nbTests = 0;
  var nbSuccessTests = 0;
  var nbFailedTests = 0;
  var nbErrorTests = 0;
  var startRow = 6;
  
  this.initOutPut = function(){
    sheet = createOrEraseSheet();
    sheet.getRange("A1").setValue("Number of tests");
    sheet.getRange("A2").setValue("Succes tests");
    sheet.getRange("A3").setValue("Failed tests");
    sheet.getRange("A4").setValue("Error tests");
    
    sheet.getRange("B1").setValue(0);
    sheet.getRange("B2").setValue(0);
    sheet.getRange("B3").setValue(0);
    sheet.getRange("B4").setValue(0);
  }
  
  this.setNumberOfTests = function(number){
    nbTests = number;   
    sheet.getRange("B1").setValue(number);
  };
  
  this.increaseSuccessTest = function(){
    nbSuccessTests++;   
    sheet.getRange("B2").setValue(nbSuccessTests);
  };
  
  this.increaseFailedTests = function(){
    nbFailedTests++;   
    sheet.getRange("B3").setValue(nbFailedTests);
  };
  
  this.addSuccessTestLine = function(methode){
    var line = addLine("SUCCESS",methode);
    line.setBackgroundColor("green");
  };
    
  this.addFailedTestLine = function(methode,message){
    var line = addLine("FAILED",methode,message);
    line.setBackgroundColor("red");
  }
  
  function createOrEraseSheet(){
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    if(sheet == null){
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(sheetName);
    }
    SpreadsheetApp.getActiveSpreadsheet().setActiveSheet(sheet);
    sheet.clear();
    
    return sheet;
  }
  
  function addLine(col1,col2,col3){
    var range = sheet.getRange(startRow,1,1,3);
    range.getCell(1, 1).setValue(col1);
    range.getCell(1, 2).setValue(col2);
    if(col3 != undefined)
      range.getCell(1, 3).setValue(col3);
    startRow++;
    return range;
  }
    
}
    
function assertTrue(expression){
  if(true != expression){
    throw("Not true");
  }
}

function assertFalse(expression){
  if(false != expression){
    throw("Not false");
  }
}