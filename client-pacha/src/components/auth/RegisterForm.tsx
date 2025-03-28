import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Checkbox } from "../ui/checkbox"

export function RegisterForm() {
    const [acceptedTerms, setAcceptedTerms] = useState(false)

    const handleCheckboxChange = () => {
        setAcceptedTerms(!acceptedTerms)
    }

    return (
        <Card className="flex flex-col p-3 gap-4">

            <CardHeader>
                <CardTitle className="text-2xl">Create an account</CardTitle>
                <CardDescription>
                    Welcome to <span className="text-primary">PachaGo</span>. It will only take a minutes.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Owner's name</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="email@pachago.com"
                                required
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="********"
                                required
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="confirm-password">Confirm Password</Label>
                            <Input
                                id="confirm-password"
                                type="password"
                                placeholder="********"
                                required
                            />
                        </div>

                        <div className="items-top flex space-x-2">
                            <Checkbox id="terms" checked={acceptedTerms} className="hover:cursor-pointer" onClick={handleCheckboxChange} />
                            <div className="grid gap-1.5 leading-none">
                                <label
                                    htmlFor="terms1"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70
                                    hover:text-primary hover:underline hover:cursor-pointer
                                    "
                                    onClick={handleCheckboxChange}
                                >
                                    Accept terms and conditions
                                </label>
                                <p className="text-sm text-muted-foreground">
                                    Please read and accept our <span className="text-primary hover:underline hover:cursor-pointer" onClick={() => {
                                        window.open('https://pachago.com/privacy')
                                    }}>terms and conditions
                                    </span> before proceeding.
                                </p>
                              
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={!acceptedTerms}
                        >
                            Get started
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link to="/auth/login" className="text-primary hover:underline">
                            Login here.
                        </Link>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
