import User from "../models/user.js";

export const login = (req,res) => {
    console.log(req.body);

    const { username, password } = req.body;
     // Check if the user credentials are valid
    const user = getUserDetails(username);

    // if (user == null || !isValidCredentials(user,password)){
    //     res.status(401).json({ error: 'Invalid credentials' });
    // }
    // else{
    //     // Set the user session or generate a JWT token
    //     req.session.user = { username }; // Example of setting session data
    //     req.session.userId = user.id;
    // }

    res.json('hello');
}


async function getUserDetails(username){
    const user = await User.findOne({where:{username:username}});
    return user;
}

function isValidCredentials(user, password){
    return user.password == password;
}