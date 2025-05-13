import employeeModel from "../models/employee.js"


export const loginControl = async (req, res) => {
    const { email, password } = req.body;
    console.log('Received login:', email, password); // <--- Log inputs

    try {
        const user = await employeeModel.findOne({ email });
        if (!user) {
            console.log("User not found");
            return res.json({ message: "User not found" });
        }

        const isMatch = password === user.password; // or bcrypt.compare if using bcrypt
        if (!isMatch) {
            console.log("Incorrect password");
            return res.json({ message: "Incorrect password" });
        }

        res.send("Success!!");
    } catch (error) {
        console.error("Login route error:", error);
        res.status(500).json({ message: error.message });
    }
};


export const signUpControl =   (req, res) => {
    const { email, username } =  req.body;

     employeeModel.findOne({ email })
        .then(user => {
            if (user) {
                // You could also check username uniqueness here if needed
                if (user.username === username || user.email === email) {
                    return res.json("Existing User");
                }
            }

            employeeModel.create(req.body)
                .then(employees => res.json("Success!!"))
                .catch(err => res.status(500).json({ message: "Error creating user", error: err }));
        })
        .catch(err => res.status(500).json({ message: "Database error", error: err }));
}