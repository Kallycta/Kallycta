class UserService {
    constructor(username) {
        this.username = username;



    }
    
    password() {
     throw new Error ('ошибка');
    }

    static consoleInfo() {
        console.log(this.username);
        return true;
    }
}
let a =  new UserService("alex").consoleInfo();
 console.log(a);

// if ( a == true) {
//     console.log('okey')
// } else {
//     console.log('ne okey');
// }


