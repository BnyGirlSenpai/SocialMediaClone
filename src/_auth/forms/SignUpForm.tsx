import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Link } from "react-router-dom"
import {
  Form,FormControl,FormField,FormItem,FormLabel,FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { SignUpValidation } from "@/lib/validation"
import Loader from "@/components/ui/shared/Loader"
import { createUserAccount } from "@/lib/appwrite/api"

const SignUpForm = () => {

  const isLoading = false;

   // 1. Define your form.
   const form = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      name: "",

      email: "",
      username: "",
      password: "",

    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignUpValidation>) {
    const newUser= await createUserAccount(values);
    console.log(newUser)
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="/assets/images/cocktail.svg" alt="logo" className="w-64 h-64" />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Create a new account</h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">Enter your Account details</p>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" className="shad-input" {...field} />
                  </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" className="shad-input" {...field} />
                  </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" className="shad-input" {...field} />
                  </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary">
            {isLoading ? (
              <div className="flex-center gap-2">
                <Loader /> Loading...
              </div>
            ): "Sign up"}
          </Button>
          <p className="text-small-regular text-light-2 text-center mt-2">
            Allready have an Account? <Link to="/sign-in" className="text-primary-500 text-small-semibold">Log in</Link>
          </p>
        </form>
      </div>
  </Form>
  )
}

export default SignUpForm