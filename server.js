let express = require('express');
let bodyparser = require('body-parser');

let app = express(); 

let questions = [
    {q:'How old are you?', type:'number'},
    {q:'Man or Woman?', type:'boolean'},
    {q:'Hobbies?', type:'text'}
];

app.use(express.static('.'));
app.use(bodyparser.json()); 

app.get('/questions', (req, res) =>{
    setTimeout(() => {
        res.end(JSON.stringify(questions));
    }, 2000); 
});

app.post('/questions', (req, res) =>{
    let newq = req.body;
    console.log(newq);
    questions.push(newq); 
    res.end(JSON.stringify(questions));
});

app.listen(3050, () => {
    console.log("listening");
}); 