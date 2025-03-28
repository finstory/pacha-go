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

export function LoginForm() {
    return (
        <Card className="flex flex-col p-3 gap-4">
            <CardHeader className="">
                <CardTitle className="text-2xl">Sign in</CardTitle>
                <CardDescription>
                    Welcome back to <span className="text-primary">PachaGo</span>. Please login to continue.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
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
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>

                            </div>
                            <Input id="password" type="password" placeholder="********"
                                required />
                        </div>
                        <Button type="submit" className="w-full">
                            Login with Email
                        </Button>
                        <Button variant="secondary" className="w-full">
                            Login with Google
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm text-muted-foreground">
                        Don&apos;t have an account?{" "}
                        <Link to="/auth/sign_up" className="text-primary hover:underline ">
                            Create your account.
                        </Link>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
