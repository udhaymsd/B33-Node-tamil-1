const fs = require("fs");

// const quote = " No beauty shine better than that of a good heart ";
// fs.writeFile("./awesome.html", quote, err => {
//     console.log("completed writing");
// });

// const [ , , noOFFiles ] = process.argv;
// console.log(noOFFiles);


// const quote2 = "Live more, worry less"

// for (let i = 1; i <=noOFFiles; i++) {
    
// fs.writeFile(`./backup/text-${i}.html`, quote2 , (err) =>
// {
//     console.log("completed writing");
// });
    
// }


// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//     if(err)  {
//         console.log("error",err);
//     } else {
//         console.log(data);
//     }
// });


const quote3 = "Dream without fear, love without limits";

fs.appendFile(".\fun.html", "/n" + quote3, (err) => {
        console.log("completed append");
});
    


fs.unlink("./delete-me.css", err => {
    if(err) {
        console.log("error", err);
    } else {
        console.log("completed deleting");
    }
});



//win + . = emoji