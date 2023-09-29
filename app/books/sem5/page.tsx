    import * as React from "react";
    import { useRouter } from "next/navigation";
    import Link from "next/link";
    import { Button } from "@/components/ui/button";
    import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    } from "@/components/ui/card";
    import { Header } from "@/app/Header";
    import Footer from "@/app/Footer";


    export default function Sem5() {

    return (
        <>
        <Header />

        <div className="flex flex-col items-center h-screen pt-16">

            <div className="flex-grow">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 lg:gap-40 mx-auto">

                <Card className="w-[350px]">
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                    <Link legacyBehavior href="https://drive.google.com/file/d/1PLGOhNFt7onB6Fl1F9coaP4LUvRia94k/view?usp=sharing">
                    <Button size={"lg"}>
                        Theoretical Computer Science (TCS)
                    </Button>
                    </Link>
                </CardFooter>
                </Card>

                <Card className="w-[350px]">
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                    <Link legacyBehavior href="https://drive.google.com/drive/folders/1lKhwXy7WVjox_NZtEfyxrPig25VCvvoe?usp=drive_link">
                    <Button size={"lg"}>
                        Software Engineering (SE)
                    </Button>
                    </Link>
                </CardFooter>
                </Card>

                <Card className="w-[350px]">
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                    <Link legacyBehavior href="https://drive.google.com/file/d/1MG3QysmzKBWvarkW5dRg7FaBQEkpILIJ/view?usp=sharing">
                    <Button size={"lg"}>
                        Computer Networks (CN)
                    </Button>
                    </Link>
                </CardFooter>
                </Card>

                <Card className="w-[350px]">
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                    <Link legacyBehavior href="https://drive.google.com/drive/folders/198il1hTudXtdV5UF9Xw4jnAWd92uTF9u?usp=drive_link" >
                    <Button size={"lg"}>
                        Data Warehousing & Mining (DWM)
                    </Button>
                    </Link>
                </CardFooter>
                </Card>

                <Card className="w-[350px]">
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                    <Link legacyBehavior href="https://drive.google.com/file/d/1yhM8XdAqdQVcmPZ15ohth65Y_pMi0_ry/view?usp=sharing">
                    <Button size={"lg"}>
                        Internet Programming (IP)
                    </Button>
                    </Link>
                </CardFooter>
                </Card>

                <Card className="w-[350px]">
                <CardContent></CardContent>
                <CardFooter className="flex justify-center">
                    <Link legacyBehavior href="">
                    <Button size={"lg"}>
                        Advance Database Management System (ADBMS)
                    </Button>
                    </Link>
                </CardFooter>
                </Card>
            </div>

            </div>

            <footer className="xl:absolute bottom-0 left-0 right-0">
            <Footer />
            </footer>

        </div>

        </>
    );

    }