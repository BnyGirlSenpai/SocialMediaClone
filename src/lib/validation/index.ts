import * as z from "zod"

export const SignUpValidation = z.object({
    name: z.string().min(1,{message: "Too short!"}).max(50),
    email: z.string().email({message:"Invalid email!"}),
    username:  z.string().min(2,{message: "Too short!"}).max(50),
    password: z.string().min(8,{message:"Must be atleast 8 characters!"}).max(50),
})