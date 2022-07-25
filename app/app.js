const express=require("express");
const app=express();

//앱 세팅            화면이 저장될 폴더
app.set("views","./src/views");
app.set("view engine","ejs");//  뷰엔진설정

const home=require("./src/routes/home");
app.use("/",home); // use->미들웨어를 등록해주는 메서드 "/" 경로로 들어오면 home으로 보내준다

module.exports=app;