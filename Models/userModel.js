import mongoose from "mongoose";
import bcrypt from "bcrypt";


const UserSchema=mongoose.Schema({
    FirstName:String,
    LastName:String,
    Email:{
        type: String,
        unique: true,
    },
    MobileNumber:{
        type: Number,
        unique: true,
    },
    Address:String,
    Password:String,





    createdAt:{
        type:Date,
        default:new Date(),   
    },
    
    
   
});


UserSchema.pre('save',async function(next){


    

    this.Password=await bcrypt.hash(this.Password,10); 
    

})


const userModel=mongoose.model('Users',UserSchema);






export default userModel;


