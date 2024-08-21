import { model, Schema } from 'mongoose'

const ProviderSchema = new Schema({
    names: {
        type: String,
        required:[true, 'The field names is required'],
        minLength :[3, 'Min 3 characters'],
    },
    type: {
        type: String,
        required:[true, 'The field name is required'],
        minLength :[2, 'Min 2 characters'],
    },
    number: {
        type: String,
        unique:true,
        required:[true, 'The field number is required'],
        maxLength :[11,'Max 11 characters'],
        minLength :[6, 'Min 6 characters'],
    },
    phone: {
        type: String,
        required:[true, 'The field phone is required'],
        maxLength :[10,'Max 10 characters'],
        minLength :[10, 'Min 10 characters'],
    },
    company: {
        type: String,
        unique:true,
        required:[true, 'The field company is required'],
    }
}) 

export default model('Provider',ProviderSchema,'provider')//primero define la clase, el segundo al nombre de la esquema, tercero nombre de la collection