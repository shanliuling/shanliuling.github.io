var now1 = new Date()

function createtime1 () {
  var grt = new Date("01/02/2023 00:00:00") //此处修改你的建站时间或者网站上线时间
  now1.setTime(now1.getTime() + 250)
  var days = (now1 - grt) / 1000 / 60 / 60 / 24
  var dnum = Math.floor(days)

  var ascll = [
    `欢迎来到江承泰👦の小窝!`,
    `Future is now 🍭🍭🍭`,
    `
    
    
    888 ,e,                                     888                                88P'888'Y88         ,e, 
    888  "   ,"Y88b 888 8e   e88 888    e88'888 888 ee   ,e e,  888 8e   e88 888   P'  888  'Y  ,"Y88b  "  
    888 888 "8" 888 888 88b d888 888   d888  '8 888 88b d88 88b 888 88b d888 888       888     "8" 888 888 
 e  88P 888 ,ee 888 888 888 Y888 888   Y888   , 888 888 888   , 888 888 Y888 888       888     ,ee 888 888 
"8",P'  888 "88 888 888 888  "88 888    "88,e8' 888 888  "YeeP" 888 888  "88 888       888     "88 888 888 
                              ,  88P                                      ,  88P                           
                             "8",P"                                      "8",P"   
                                                 
    `
    ,
    "小站已经苟活",
    dnum,
    "天啦!",
    "©2023 By Fomalhaut",
  ]

  setTimeout(
    console.log.bind(
      console,
      `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
      "color:#39c5bb",
      "",
      "color:#39c5bb",
      "color:#39c5bb",
      "",
      "color:#39c5bb",
      ""
    )
  )
}

createtime1()

function createtime2 () {
  var ascll2 = [`NCC2-036`, `调用前置摄像头拍照成功，识别为「大傻逼」`, `Photo captured: `, ` 🤪 `]

  setTimeout(
    console.log.bind(
      console,
      `%c ${ascll2[0]} %c ${ascll2[1]} %c \n${ascll2[2]} %c\n${ascll2[3]}`,
      "color:white; background-color:#10bcc0",
      "",
      "",
      'background:url("https://unpkg.zhimg.com/anzhiyu-assets@latest/image/common/tinggge.gif") no-repeat;font-size:450%'
    )
  )

  setTimeout(console.log.bind(console, "%c WELCOME %c 欢迎光临，大傻逼", "color:white; background-color:#23c682", ""))

  setTimeout(
    console.warn.bind(
      console,
      "%c ⚡ Powered by Fomalhaut🥝 %c 你正在访问 江承泰👦の小窝",
      "color:white; background-color:#f0ad4e",
      ""
    )
  )

  setTimeout(console.log.bind(console, "%c W23-12 %c 系统监测到你已打开控制台", "color:white; background-color:#4f90d9", ""))
  setTimeout(
    console.warn.bind(console, "%c S013-782 %c 你现在正处于监控中", "color:white; background-color:#d9534f", "")
  )
}
createtime2()

// 重写console方法
console.log = function () { }
console.error = function () { }
console.warn = function () { }