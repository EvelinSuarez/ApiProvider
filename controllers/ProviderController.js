import Provider from '../models/provider.js'

//Get all documents from Vehicle
export async function getProvider(req, res){
    const providers = await Provider.find()
    res.json(providers)
}

//Post Create a document in the collection Vehicle
export async function  postProvider(req, res){
    const body = req.body //Get the body send from postman or a form
    let msg = 'Owner inserted succesful'
    try {
        const provider = new Provider(body)//create the object Vehicle in RAM
        await provider.save()//insert object at the collection 
    } catch (error) {
        msg = error
    }
    res.json({msg:msg})
}

export async function  putProvider(req,res){
    const {names, type, number, phone, company} = req.body //Destructuring
    let msg = 'Provider update succesful'
    try {
        await findByIdAndUpdate({_id:_id},{names:names,type:type,number,phone,company})
    } catch (error) {
        msg = error
    }
    res.json({msg:msg})
}

export async function deleteProvider(req,res){
    const _id = req.params.id //Get param _id
    try {
        await findByIdAndDelete({_id:_id})
        res.json('Provider deleted succesfully')
    } catch (error) {
        res.status(500).json(error,{msg:'There was problem deleting the provider'})
    }
}
