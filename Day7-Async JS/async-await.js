// Async await :

const data = [
    {
        name: "Shubham",
        profession: "Full Stack Developer"
    },
    {
        name: "SSR",
        profession: "Survey Progrrammer"
    }
];
function getData() {
      setTimeout(() => {
        let output = [];
    data.forEach((data, index) => {
        console.log(output = data.name);
    })
    }, 0);
}

function createData(newdata) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            data.push(newdata);
            let issue = false;
            if(!issue){
                resolve();
            }else {
                reject("kuch to gadbad hai daya..")
            }
        }, 3000);
    })
    }
    async function start(){
        await createData({name: "Ansh", profession: "Developer"})
        getData();
    }
    start();