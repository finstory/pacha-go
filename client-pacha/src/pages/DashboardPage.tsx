import { DrawerDemo } from '@/components/drawer';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';


const DashboardPage = () => {
    return (

        <>
            <ModeToggle />
            <div className="flex items-center justify-center h-screen">
                <p>asdasdasd asd as</p>
                <Button variant="default">¡Hola, ShadCN!</Button>

                <DrawerDemo />
            </div>
        </>
    );
};

export default DashboardPage;