import User from "../models/user";

const login = (req,res) => {
    const { username, password } = req.body;

        // Check if the user credentials are valid
    const user = getUserDetails(username);

    if (user == null || !isValidCredentials(user,password)){

    }
    else{
        // Set the user session or generate a JWT token
        req.session.user = { username }; // Example of setting session data
        req.session.userId = user.id;
    }
}


async function getUserDetails(username){
    const user = await User.findOne({where:{user:username}});
    return user;
}

function isValidCredentials(user, password){
    return user.password == password;
}