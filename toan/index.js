// toan tu + - * /

var isRightPosition = 0;
// mang gom co phep tinh, vi tri dung, vi tri nguoi dung chon
var data = []
var isChooseQuestion = 0;
function end(){
    let point = 0
    let notDo = ""
    for(let i=0;i<data.length;i++){
        if(data[i].userChoose!==-1){
            if(data[i].positionRightAnswer === data[i].userChoose){
                point+=1
            }
        }else{
            notDo += i + " "
        }
        
    }
    if(notDo === ""){
        alert("Diem So Cua Ban La: "+ point)
    }else{
        alert("Con mot so cau chua hoang thanh: "+ notDo)
    }
    
}

function changeStyle (choose){
    if(choose ===0){
        document.getElementById("buttonClickA").style.background = "green";
        document.getElementById("buttonClickB").style.background = "white";
        document.getElementById("buttonClickC").style.background = "white";
        document.getElementById("buttonClickD").style.background = "white";
    }
    if(choose ===1){
        document.getElementById("buttonClickA").style.background = "white";
        document.getElementById("buttonClickB").style.background = "green";
        document.getElementById("buttonClickC").style.background = "white";
        document.getElementById("buttonClickD").style.background = "white";
    }
    if(choose ===2){
        document.getElementById("buttonClickA").style.background = "white";
        document.getElementById("buttonClickB").style.background = "white";
        document.getElementById("buttonClickC").style.background = "green";
        document.getElementById("buttonClickD").style.background = "white";
    }
    if(choose ===3){
        document.getElementById("buttonClickA").style.background = "white";
        document.getElementById("buttonClickB").style.background = "white";
        document.getElementById("buttonClickC").style.background = "white";
        document.getElementById("buttonClickD").style.background = "green";
    }
}


function nextQuestion() {
    console.log("vi tri dung",)
    let operate = ["+", "-", "*", "/"];

    let number1 = parseInt(Math.random() * 1000); // 0 -> 1, 0,65456 =>6 %4 =>2
    let number2 = parseInt(Math.random() * 1000);
    
    let positionOperate = parseInt(number1 * 10 % 4);

    let positionRightAnswer =parseInt(Math.random()*10)%4;
    

    //  a:7 b:8 c:9 d:10
    // a: 57 b:67 c:77 d:87
    let question = number1 + operate[positionOperate] + number2
    let isAnswer = eval(question)

    isRightPosition = positionRightAnswer // 0 1 2 3

    answers = [0, 0, 0, 0]
    answers[positionRightAnswer] = isAnswer
    // 4
    console.log(positionRightAnswer)
    console.log(answers)
    for (let i = 0; i < 4; i++) {
        if (i != positionRightAnswer) {
            answers[i] = isAnswer - positionRightAnswer * 10 + i * 10
            // 2   =10
            // 0 1 2 3
            // 8 9 10 11
        }

    }
    console.log(answers)


    console.log(isAnswer)

    document.getElementById("question").innerHTML = question
    document.getElementById("buttonClickA").innerHTML = answers[0]
    document.getElementById("buttonClickB").innerHTML = answers[1]
    document.getElementById("buttonClickC").innerHTML = answers[2]
    document.getElementById("buttonClickD").innerHTML = answers[3]
}


function createCaulator() {
    let operate = ["+", "-", "*", "/"];

    let number1 = parseInt(Math.random() * 1000); // 0 -> 1, 0,65456 =>6 %4 =>2
    let number2 = parseInt(Math.random() * 1000);

    let positionOperate = parseInt(number1 * 10 % 4);

    let positionRightAnswer = parseInt(Math.random()*10)%4;

    let question = number1 + operate[positionOperate] + number2

    let itemQuestion = { caulate: question, positionRightAnswer: positionRightAnswer, userChoose: -1 };
    return itemQuestion;

}

function checkAnswer(choose) {
    
    // console.log("vi tri dung cua cau hoi ",data[isChooseQuestion].positionRightAnswer)
    // if (choose == data[isChooseQuestion].positionRightAnswer) {
    //     document.getElementById("result").innerHTML = "Right";
    // } else {
    //     document.getElementById("result").innerHTML = "False";
    // }
    changeStyle(choose)    
    data[isChooseQuestion].userChoose = choose
    console.log(data)


}

function changeQuestion(index){
    document.getElementById("result").innerHTML = "";
    isChooseQuestion = index
    console.log(index)
    let positionRightAnswer = data[index].positionRightAnswer
    let isAnswer = eval(data[index].caulate) // ket qua cua phet tinh
    let answers = []
    answers[positionRightAnswer] = isAnswer
    for (let i = 0; i < 4; i++) {
        if (i != positionRightAnswer) {
            answers[i] = isAnswer - positionRightAnswer * 10 + i * 10            
        }

    }
    // cap nhap style
    let userChoose =  data[index].userChoose
    if(userChoose === -1){
        document.getElementById("buttonClickA").style.background = "white";
        document.getElementById("buttonClickB").style.background = "white";
        document.getElementById("buttonClickC").style.background = "white";
        document.getElementById("buttonClickD").style.background = "white";  
    }else{
        changeStyle(userChoose)
    }

    

    // cap nhap dap an
    document.getElementById("question").innerHTML = data[index].caulate
    document.getElementById("buttonClickA").innerHTML = answers[0]
    document.getElementById("buttonClickB").innerHTML = answers[1]
    document.getElementById("buttonClickC").innerHTML = answers[2]
    document.getElementById("buttonClickD").innerHTML = answers[3]
}




for (let i = 0; i < 10; i++) {
    let dataItem = createCaulator()
    data.push(dataItem)
}
console.log(data)

const buttonComponet = value => {
    // truyen kieu tham tri  
    
    return `<button onclick="changeQuestion(${value})" >Cau ${value + 1}</button>`
}

let stringRederComponet = ""

for(let i=0;i<data.length;i++){
    stringRederComponet += buttonComponet(i)
}

changeQuestion(0)

document.getElementById("list").innerHTML = stringRederComponet;

// 1 => 23
// 22 23 24 25

// 2

// 21 22 23 24
