console.log("working");

// 1.Write one example explaining how you can write a callback function ?
// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function call() {
    console.log('I am callback function');
}

// passing function 
greet('Raju', call);





//2."Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

const countingNumber = () => {

    setTimeout(() => {
        console.log(1);

        setTimeout(() => {
            console.log(2);

            setTimeout(() => {
                console.log(3);

                setTimeout(() => {
                    console.log(4);

                    setTimeout(() => {
                        console.log(5);

                        setTimeout(() => {
                            console.log(6);

                            setTimeout(() => {
                                console.log(7);
                            }, 7000);
                        }, 6000);
                    }, 5000);
                }, 4000);
            }, 3000);
        }, 2000);
    }, 1000);

}

countingNumber();




//3. "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
const promise = new Promise((resolve, reject) => {
    resolve()
})
promise.then(() => {
    setTimeout(() => {
        console.log("1");
    }, 1000);
})
promise.then(() => {
    setTimeout(() => {
        console.log("2");
    }, 2000);
})
promise.then(() => {
    setTimeout(() => {
        console.log("3");
    }, 3000);
})
promise.then(() => {
    setTimeout(() => {
        console.log("4");
    }, 4000);
})
promise.then(() => {
    setTimeout(() => {
        console.log("5");
    }, 5000);
})
promise.then(() => {
    setTimeout(() => {
        console.log("6");
    }, 6000);
})
promise.then(() => {
    setTimeout(() => {
        console.log("7");
    }, 7000);
})




//4. "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
const pass = new Promise((resolve, reject) => {
    let x = 0 //x is not equal to 0 then it will go to else and then caught by .catch() method                                                   
    if (x == 0) {
        resolve(x);
    } else {
        reject(err);
    }
})

pass
    .then((x) => {
        console.log("Passed")
    })
    .catch((err) => {
        console.log("Not passed");
    })




//5. Create examples to explain callback function
function greeting(name) {
    alert('Hello ' + name);
}

function userInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
}

userInput(greeting);





//6. Create examples to explain callback hell function
const getEmployeeID = () => {

    setTimeout(() => {
        console.log("Fetching the Employee details");
        let id = [1, 2, 3, 4, 5];
        console.log(id);

        setTimeout(() => {
            let employeeDetails = {
                name: "Arjun Kanungo",
                age: 34,
            }
            console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}`);

            setTimeout(() => {
                employeeDetails.gender = "Male",
                    console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender}`);

                setTimeout(() => {
                    employeeDetails.salary = 21000;
                    console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender} and the salary is ${employeeDetails.salary}`);
                }, 2000);

            }, 2000);

        }, 2000)

    }, 2000);
}
getEmployeeID();



//7. Create examples to explain promises function

const getEmployeeID1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let id = [1, 2, 3, 4, 5];
        resolve(id);
        // reject("The data ist't found");
    }, 2000);
})




// 8.Create examples to explain async await function

function resolve() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolve();
    console.log(result);
}

asyncCall();






//9. Create examples to explain promise.all function


let first_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved First after 1 second");
    }, 1000);
});

let second_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved First after 2 seconds");
    }, 2000);
});

let third_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved First after 3 seconds");
    }, 3000);
});

try {
    let result = Promise.all([first_promise, second_promise, third_promise]);
    result.then((data) => console.log(data));
} catch (error) {
    console.log(error);
}