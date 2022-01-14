// var val1 = "var変数";
// console.log(val1);

// val1 = "val1を上書きしたよ！";

// console.log(val1);

// var val1 = "val1を再定義！！";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "letを上書き！";
// console.log(val2);

// // letは再定義できない！！
// // let val2 = "let再定義？？";

// // constは定数だが、オブジェクト、配列の場合は変更可！
// const val3 = "const変数";
// console.log(val3);

// const val4 = {
//   name: "せいこ",
//   age: 39
// };

// // val4.name = "tomihara";
// // val4.address = "okinawa";

// // console.log(val4);

// // const val5 = ["dog", "cat"];
// // console.log(val5);
// // val5[0] = "bird";
// // console.log(val5);
// // val5.push("monkey");
// // console.log(val5);

// // テンプレート文字列
// const name = "seiko";
// const age = 39;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// // console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// // ----
// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です！"));
// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です！！"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

// 分割代入
// const myProfile = {
//   name: "seiko",
//   age: 39
// };

// const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message3);

// const { name, age } = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳ですよ★`;
// console.log(message4);

// // デフォルト値、引数
// const sayHello = (name = "guest") => console.log(`こんにちは！${name}さん！！`);
// sayHello("seiko");

// //配列
// const arr1 = [1, 2];
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);

// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
// // コピーなので、コピー元に影響なし
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// //参照わたしになっている。arr8を変更すると、arr4も影響を受ける
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

const nameArr = ["tanaka", "yamada", "tomihara"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です！！`);
// }

const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2); //配列を受け取っている

nameArr.map((name) => console.log(`${name}です！`));

const numArr = [1, 2, 3, 4, 5];
//新しい配列生成される
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  //新しい配列生成される
  if (name === "tomihara") {
    return name;
  } else {
    return `${name}さん`;
  }
});

console.log(newNameArr);

// 三項演算子

const val11 = 1 < 0 ? "trueです" : "falseです";
console.log(val11);

const num = 1300;

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";

console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲です";
};

console.log(checkSum(50, 60));
//金額が設定されていなければメッセージ表示「金額未設定です」
const num22 = "";
const fee = num22 || "金額未設定です";
console.log(fee);

// 金額が設定されていなければnull,設定されていればメッセージ表示「何か設定されました！」
const num33 = 1000;
const fee2 = num33 && "何か設定されました！";
console.log(fee2);
