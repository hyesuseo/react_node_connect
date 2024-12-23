const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();
app.use( bodyParser.json())
app.use( cors() ) //하나의 서버에서 다른 서버로부터 데이터를 받아오려고 할때 보안 문제가 생김
// 보안문제를 허용해달라는 뜻=> 노드서버에서 외부 접근하는 서버로부터 데이터를 제공하는 것을 허용하겠다는 의미

let data_set = [ //가상의 데이터: DB 연동해서 가져온 것이라고 가정
    {id:"aaaB", pwd:"aaa", name:"홍길동DB", addr:"산골짜기"},
    {id:"bbbB", pwd:"bbb", name:"김개똥DB", addr:"개똥별"},
    {id:"cccB", pwd:"ccc", name:"고길동DB", addr:"마포구"}
]

app.get("/members", (req, res)=>{
    //res.send("회원목록") 
    res.json( data_set ) //data_set을 json 형식으로 반환한다

})
app.delete("/members/:id", (req,res)=>{
    console.log("back id:", req.params)
    data_set = data_set.filter (mem => mem.id !==req.params.id)
    res.json(1) //성공이면 1, 실패면 0
})


app.listen(4000, ()=>console.log("4000백 서버 실행"))