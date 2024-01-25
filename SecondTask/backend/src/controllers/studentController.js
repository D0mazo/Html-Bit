const { executeQuery } = require('../helpers')

module.exports = {
    all: async (req, res, next) => {
        //SQL uzklausa
        const sql = "SELECT * FROM student";
        //ivkdyta
        const [items, error] = await executeQuery(sql);
        //jeigu klaida
        if (error) {
            return next(error);
        }
        //saraso grazinimas
        res.json(items);
    },

    single: async (req, res, next) => {
        //req uzklausa
        const { id } = req.params;
        // SQL uzklausa
        const sql = "SELECT * FROM student WHERE id=?";
        //ivykdome
        const [items, error] = await executeQuery(sql, [id]);
        //jeigu klaida
        if (error) {
            return next(error);
        }
        //pirmo elemento grazinimas
        res.json(items[0]);
    },

    create: async (req, res, next) => {

        // duomenu paemimas
        const { firstname, lastname, email, created } = req.body;
        const argArr = [firstname, lastname, email, created];
        // SQl idejimas
        const sql = "INSERT INTO student (firstname, lastname, email, created) VALUES (?, ?, ?, ?)";

        // ivykdome
        const [items, error] = await executeQuery(sql, argArr);

        // jei klaida
        if (error) {
            return next(error);
        }
        

        // sekme
        res.json({ message: 'Student record created successfully', insertedId: items.insertId });

    },


    update: async (req, res, next) => {
        
            const { id } = req.params;
            const { firstname, lastname, email } = req.body;
    
            // SQL
            const sql = "UPDATE student SET firstname=?, lastname=?, email=? WHERE id=?";
    
            // ivykdyti
            const [result, error] = await executeQuery(sql, [firstname, lastname, email, id]);
    
            // tikrinti klaidas
            if (error) {
                return next(error);
            }
    
            // Check if the update was successful
            if (result.affectedRows !== 1) {
                res.status(404).json({ message: "Student not found" });
            } else {
                res.status(200).json({ message: "Update successful" });
            }
       
    },


    delete: async (req, res, next) => {
        try {
            const { id } = req.params;

            //SQL delete
            const sql = "DELETE FROM student WHERE id=?";

            // ivykdyti
            const [result, error] = await executeQuery(sql, [id]);

            // tikrinti del klaidu
            if (error) {
                return next(error);
            }

            // ar gerai istrinta
            if (result.affectedRows > 0) {
                res.status(200).json({ message: "Delete successful" });
            } else {
                res.status(404).json({ message: "Student not found" });
            }
        } catch (error) {
            next(error);
        }
    },
}