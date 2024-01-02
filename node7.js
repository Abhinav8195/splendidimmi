const exp =require("express")
const app=exp()
const path=require("path")

require("./connect.js")
const{abhinavb}=require("./schema.js")
app.use(exp.static(path.join(__dirname,"views")));
app.use(exp.urlencoded({ extended: true }));
app.use(exp.json())
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.post('/adddata',async function(req,res){
    let val = req.body;
    // console.log(val)
    console.log(req)
    console.log(val.name)
    console.log(val.email)
    console.log(val.subject)
    console.log(val.message)


    
    await abhinavb.create({
        name: val.name,
        email: val.email,
        subject: val.subject,
        message: val.message
    })
    res.send({success:true,message:'data saved successfully'})
})



app.delete('/deletedata/:id', async function (req, res){
    try {
        const id = req.params.id;

        // console.log(id)
        // Check if the ID is valid (you might want to add more validation)
        if (!id) {
            return res.status(400).json({ success: false, message: 'Invalid ID.' });
        }

        // Delete the document from the database
        const deletedData = await abhinavb.findByIdAndDelete(id);

        if (!deletedData) {
            return res.status(404).json({ success: false, message: 'Data not found.' });
        }

        res.json({ success: true, message: 'Data deleted successfully', data: deletedData });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});


app.patch('/updatedata/:id', async function (req, res) {
    try {
        const id = req.params.id;
        const updateFields = req.body;

        // Check if the ID is valid (you might want to add more validation)
        if (!id) {
            return res.status(400).json({ success: false, message: 'Invalid ID.' });
        }

        // Update the document in the database
        const updatedData = await abhinavb.findByIdAndUpdate(id, updateFields, { new: true });

        if (!updatedData) {
            return res.status(404).json({ success: false, message: 'Data not found.' });
        }

        res.json({ success: true, message: 'Data updated successfully', data: updatedData });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});



app.get("/data",async function(req,res){
    const show =await abhinavb.find({});
    res.json({show})
})
app.get("/user/:id",async function(req,res){
    const id = req.params.id;
    // const data = await userdaa.deleteById({id});
    // const show =await userdaa.find({});
})
app.listen(4000,()=>{
    console.log("server listen 4000")
})