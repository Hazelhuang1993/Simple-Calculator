
var record = [];  
var txtScreen = document.getElementsByClassName('screen')[0];   //屏幕的text是个数组
var twoBtnClick = document.getElementsByClassName('btn-click');
var btnClick = document.getElementsByClassName('btn');

for(var i = 0; i < twoBtnClick.length; i ++) {    
    twoBtnClick[i].onclick = function () {
        if (this.value == "AC") {             // 如果当前键入值是AC，就清空数组和屏幕
            record = [];
            txtScreen.value = "";        
        } else {                             // 如果当前键入值是DEL，就用substr（）方法，切割字符串，把最后一位给删掉
            txtScreen.value = txtScreen.value.substr(0, txtScreen.value.length - 1);
            }
        }
    }


for (var i = 0; i < btnClick.length; i ++) {     //遍历，给所有button绑定点击事件
    btnClick[i].onclick = function () {          //初始操作的时候，如果用户输入了个点，程序要默认为用户想输小数
        if (txtScreen.value == "" && this.value == ".") {
                txtScreen.value = "0.";
        } else {
            if (!isNaN(this.value) || this.value == ".") {    //如果当前输入值是数字或是点
                if (txtScreen.value.indexOf(".") != -1) {     //屏幕上查找，如果已经有点了
                    if (this.value != ".") {                  //当前值不是点，才可以添加进去
                        txtScreen.value += this.value;
                    }
                } else {
                    txtScreen.value += this.value;   //如果是数字，直接把当前值加进去
                }
            } else {
                if (this.value != "=") {                        //如果当前键入值不是 = 
                    record[record.length] = txtScreen.value;    // 把屏幕上的值存进数组
                    record[record.length] = this.value;         // 新输入的当前值也存进数组
                    txtScreen.value = "";                       // 并且清空屏幕
                } else {
                    record[record.length] = txtScreen.value;     // 如果是 =
                    txtScreen.value = eval(record.join(""));     // 把屏幕上的值存进数组，并且用eval（）方法进行运算，用join（）方法进行拼接
                    record = [];                                 //清空数组，等待下一轮新的计算
                }
            }
        }
    }
}