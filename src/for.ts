let people:string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
for(let i = 0; i < people.length; i++){
    if(people[i].length >= 6){   
        console.log("สวัสดี คุณ " + people[i]);
    }else if(people[i].length <6){
        console.log("Hello " + people[i]);
    }

}

let color = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
for(const c of color){
    console.log(c);
}
for(const index in color){
    console.log(`Index: ${index} , Value: ${color[index]}`);
}