import React, { useState } from "react";

const User = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [submittedData, setSubmittedData] = useState(null);
    const[login,setLogin]=useState(false)

    const createUsers = (e) => {
        e.preventDefault();

        const newUser = { username, email, password, confirmPassword };
        setSubmittedData(newUser);
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        
        if (password===confirmPassword){
            console.log("Sucessfully Login")
            setLogin(true)

        }else{
            console.log("Enter correct password")
            setLogin(false)
        }
    };

    return (
        <div>
            <form onSubmit={createUsers}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <input type="submit" value="Create user" />
            </form>
            <div>
                {login ? "successfully login"
                 : "Enter right Password"}
            </div>

            {submittedData && login &&
             (
                <div>
                    <h2>Submitted Data:</h2>
                    <p>Username: {submittedData.username}</p>
                    <p>Email: {submittedData.email}</p>
                    
                </div>
            )}
        </div>
    );
};

export default User;
