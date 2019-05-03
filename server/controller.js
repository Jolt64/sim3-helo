


module.exports = {
    registerUser: async (req, res) => {
        console.log('hit')       
        const { username, password } = req.body
        console.log(username, password)       
        const db = req.app.get('db');
        let newUser = await db.create_new_user(username, password)
        req.session.user = {...newUser}

        res.status(200).send({
            message: "user Created",
            loggedIn: true,
            user: req.session.user
        })
    }
}