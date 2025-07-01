import { ReactNode } from "react";

interface ProfilContainerProps {
    children: React.ReactNode;
    title?: string;
}

export default function ProfilContainer({ children, title }: ProfilContainerProps) {
    return (
        <div className="bg-white border-8 text-center rounded-2xl py-10 border-amber-400 space-y-10">
            <div className="text-3xl font-bold">
                <h1>{title}</h1>
            </div>
            <hr />
            {children}
        </div>
    );
}