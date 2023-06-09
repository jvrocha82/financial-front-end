import { createContext, useEffect, useState } from "react";
import auth from "../api/auth"
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();

    const [authenticated, setAuthenticated] = useState(null);


  

    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("user_token")).token ;
        let userStorage = localStorage.getItem("user_db");
     
        (async function() {
            try {
          
                debugger
                if (await auth.verify(token)) {
                  let user = await auth.getUser(token)
                  setUser(user)
                }
            } catch (e) {
                console.error(e);
            }
        })();

     
        console.log(token)



    }, []);

    // const signinOld = (email, password) => {
    //     const userStorage = JSON.parse(localStorage.getItem("user_db"));

    //     const hasUser = userStorage?.filter((user) => user.email === email);

    //     if (hasUser?.length) {
    //         if (hasUser[0].email === email && hasUser[0].password === password) {
    //             const token = Math.random().toString(36).substring(2);
    //             localStorage.setItem("user_token", JSON.stringify({ email, token }));
    //            debugger
    //             login(JSON.stringify({ email, password }))
    //             setUser({ email, password });
    //             return;
    //         } else {
    //             return "E-mail ou senha incorretos";
    //         }
    //     } else {
    //         return "Usuário não cadastrado"
    //     }
    // };
    const signin = async (email, password) => {



        let res = await auth.login({ email, password })
        if (res.message == "Usuário ou senha inválidos") {
            return res.message

        } else {
            let token = res.token
            localStorage.setItem("user_token", JSON.stringify({ email, token }));


            setUser({ email, password });
        }
        return;


    };

    const signup = (email, password) => {

        let ret = auth.register({ email, password })
        return;
    }
    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    return <AuthContext.Provider
        value={{ user, signed: !!user, signin, signup, signout }}
    >
        {children}
    </AuthContext.Provider>
}; 