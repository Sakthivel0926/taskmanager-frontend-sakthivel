"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {

    const router = useRouter();

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const token = localStorage.getItem("access");

        // IF TOKEN NOT FOUND
        if (!token) {

            router.push("/login");

        } else {

            setLoading(false);
        }

    }, [router]);

    // LOADING SCREEN
    if (loading) {

        return (

            <div className="flex items-center justify-center min-h-screen">

                <h1 className="text-2xl font-bold">
                    Loading...
                </h1>

            </div>
        );
    }

    return children;
}