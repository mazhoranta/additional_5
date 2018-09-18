module.exports = function check(str, bracketsConfig) {
  var brackets = str.split("");
  var bracketsStack = [];
  
  outer:
  for (var i = 0; i < brackets.length; i++) {
    for (var j = 0; j < bracketsConfig.length; j++) {
      var configElement = bracketsConfig[j];
      if (brackets[i] == configElement[0] && !~bracketsStack.indexOf(configElement[1])) {
        bracketsStack.push(brackets[i]);
        continue outer;
      } 
      if (brackets[i] == configElement[1]) {
        if (bracketsStack.pop() == configElement[0])
          continue outer;
        else
          return false;
      }
    }
  }

  if (bracketsStack.length > 0)
    return false;

  return true;
}
