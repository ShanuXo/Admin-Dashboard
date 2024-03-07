import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            min : 2,
            max : 100,
        },
        email : {
            type : String,
            required : true,
            unique : true,
        },
        password : {
            type : String,
            required : true,
            min : 6,
        },
        city : String,
        state : String,
        country : String,
        occupation : String,
        phoneNumber : String,
        transcations : Array,
        role : {
            type : String,
            enum : ["user", "admin", "superadmin"],
            default : "admin"
        },
    },
    { timestamps : true }
);

const User = mongoose.model("User", UserSchema);
export default User;