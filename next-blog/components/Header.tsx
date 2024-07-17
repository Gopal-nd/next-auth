'use client'
import { GetUser } from "@/utils/user"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"

const Header = () => {
    const session = useSession();
    // console.log(JSON.stringify(session.data?.user))
    const user = session.data?.user?.email
    console.log(user)

    const [open, setOpen] = useState<boolean>(false)
    return (
        <div className=" mx-auto content-center bg-blue-500 flex px-4 py-4 justify-between items-center">
            <div className="flex gap-3 items-center">
                <Menu className=" md:hidden" onClick={() => setOpen(!open)} />
                <Link href={'/'}>Blog</Link>{user}
                {open && (
                    <div onClick={() => setOpen(!open)} className=" absolute w-screen h-screen  bg-black/50 top-0 left-0">
                        <div className="flex px-4 py-4   items-start flex-col justify-between  relative left-0 bg-slate-200 w-56 h-screen">


                            <div className="flex flex-col z-30 gap-6">
                                <div className="flex justify-between px-2  items-center mb-24">
                                    <h1><Link href={'/'}>Blog</Link></h1>
                                    <X size={24} className=" ml-28" />
                                </div>
                                {
                                    user ? (
                                        <div className="flex gap-4 flex-col items-center">
                                            <p><Link href={'/create'}>Create</Link></p>
                                            <Button onClick={() => signOut()}>Logout</Button>
                                        </div>
                                    ) : (
                                        <p> <Link href={'/api/auth/signin'}>SignIn</Link> </p>

                                    )
                                }
                            </div>

                        </div>
                    </div>
                )}
            </div>
            <div className=" hidden gap-4 md:flex">
                {
                    user ? (
                        <div className="flex gap-4  items-center">
                            <p><Link href={'/create'}>Create</Link></p>
                            <Button onClick={() => signOut()}>Logout</Button>
                        </div>
                    ) : (
                        <p> <Link href={'/api/auth/signin'}>SignIn</Link> </p>

                    )
                }
            </div>
        </div>
    )
}

export default Header