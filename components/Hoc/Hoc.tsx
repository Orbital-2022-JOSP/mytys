import { useSession } from 'next-auth/react';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import { Unauthenticated } from '../Unauthenticated/Unauthenticated';

type HocProps = {
    loadedComponent: React.ReactNode;
    protect: boolean
}

export const Hoc: React.FC<HocProps> = ({ loadedComponent, protect }) => {
    const { status } = useSession();

    return (
        <>
            {
                status == "loading"
                    ? <LoadingComponent />
                    : protect
                        ? status == "authenticated"
                            ? loadedComponent
                            : <Unauthenticated />
                        : loadedComponent
            }
        </>
    )
}