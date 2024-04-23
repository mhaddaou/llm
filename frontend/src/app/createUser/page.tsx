'use client'
import { FormEvent } from "react";


export default function createUser () {
    async function onSubmit(event : FormEvent<HTMLFormElement>){
        event.preventDefault();
        try{
            const formData = new FormData(event.currentTarget)
            // const {data} = await getClient().mutate({mutation: CREATE_USER})
            // const {data} = await getClient().mutate({mutation: CREATE_USER})
            // const {data, errors} = await getClient().mutate({mutation : CREATE_USER, variables:{
            //     input:{
            //         firstName: formData.get('firstName'),
            //         lastName: formData.get('lastName'),
            //         age : formData.get('age'),
            //         hobies: ["one", "two", "three", "foor"]
            //     }
            // }} )
            // if (data)
            //     console.log("success")
            // if (errors)
            //     console.log("errors")
            
            console.log(formData.get('hobies'));
        }catch(e : any){
            console.log(e.message)
        }
    }
    return(
        <div className="w-screen h-screen container mx-auto pt-8">
    <form onSubmit={onSubmit}>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input name="firstName" type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input name="lastName" type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
            <input name="age" type="number" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
        </div>  
        
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">hobies</label>
            <input name="hobies" type="text" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required />
        </div>
       
    </div>
   
    
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
        </div>
    ) 

} 