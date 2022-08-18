// Async js programming
Callbacks, Promises, Async, Await;

Callback:

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

function createData(newdata, callback) {
    setTimeout(()=>{
        data.push(newdata);
        callback();
    }, 0);
    }
    createData({name: "Ansh", profession: "Developer"}, getData)


