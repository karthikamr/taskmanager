const express = require('express')
const app = express()
const path = require('path');
const publicDirPath = path.join(__dirname, "../public");
const viewPath = path. join(__dirname, "../template/views");

app.set("view engine", "hbs");
app.set("views", viewPath);
app.use(express.static(publicDirPath));



app.get('/tasks/add', function (req, res) {
    res.render('addTask', {
        title:"Add Task"
    });
})

app.get('/tasks/edit', function (req, res) {
    res.render('addTask', {
        title: "Edit Task"
    });
})


app.get('/users', function (req, res) {
    res.render('user');
})

app.get('/users/add', function (req, res) {
    res.render('addUser', {
        title:"Add User"
    });
})

app.get('/users/edit', function (req, res) {
    res.render('addUser', {
        title:"Edit User"
    });
})



app.get('/tasks', function (req, res) {
    res.render('tasks');
})


app.get('/reg', function (req, res) {
    res.render('register');
})

app.get('/login', function (req, res) {
    res.render('login');
})

app.listen(7000, function(){
    console.log("the server is upon port 7000")
})