const exceptionItems_ten_percent = ["book", "medicine", "food"];
export default function ProcessString(string, setString) {
  if (typeof string !== "string") return;
  const sentence = string.toLowerCase();

  function checkIfItemIsTenPercent(newSentence) {
    for (let i = 0; i < exceptionItems_ten_percent.length; i++)
      if (sentence.includes(exceptionItems_ten_percent[i])) return true;
    return false;
  }

  var amount = "";
  var rightPaneSentence = "";
  var i = 0;
  var tenPercentTax = 0;
  var fivePercentTax = 0;
  for (i = sentence.length - 1; i >= 0; i--) {
    if (sentence[i] !== " ") {
      amount = sentence[i] + amount;
    } else break;
  }
  amount = parseFloat(amount);
  if (!checkIfItemIsTenPercent(sentence)) {
    tenPercentTax = amount * 0.1;
    tenPercentTax = Math.round((tenPercentTax + Number.EPSILON) * 100) / 100;
  }
  if (sentence.includes("imported")) {
    fivePercentTax = amount * 0.05;
    fivePercentTax = Math.round((fivePercentTax + Number.EPSILON) * 100) / 100;
  }
  amount += fivePercentTax + tenPercentTax;
  for (let j = 0; j <= i; j++) rightPaneSentence += sentence[j];
  setString((prev) => {
    const newRightPaneSentence = rightPaneSentence + amount;
    const totalAmount =
      Math.round((prev[2] + amount + Number.EPSILON) * 100) / 100; //prev[2] + amount;
    const left = [...prev[0], sentence];
    const right = [...prev[1], newRightPaneSentence];

    return [left, right, totalAmount];
  });
}
