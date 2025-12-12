waitAndPrint = (message,interval) => {
    let count = 1;
    setInterval(() => {
        console.log(message + " " + "world ".repeat(count));
        count++;
    }, interval);
};

waitAndPrint("hello",3000);


