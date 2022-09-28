import NavRouter from "../components/NavRouter";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom500 = () => {
    const nxRouter = useRouter();
    const [pageLang, setPageLan] = useState('EN')
    useEffect(() => {
        if (navigator.language.includes('es')) {
            setPageLan('ES')
        } else {
            setPageLan('EN')
        }
        setTimeout(() => {
            nxRouter.push("/")
        }, 5000);
    }, []);

    const indexHeaderProps = {
        title: "Internal Server Error",
        description: pageLang == 'ES' ? "Woops, parece que hemos tenido problemas técnicos con tu solicitud." : "Woops, it seems that we had technical problems with your request.",
        image: undefined
    }
    return (
        <>
            <NavRouter headerprops={indexHeaderProps}>
                {pageLang == "ES" ?
                    (<>
                        <h2 className="error-title">Woops, parece que hemos tenido problemas técnicos con tu solicitud, volviendo al inicio...</h2>
                    </>) :
                    (<>
                        <h2 className="error-title">Woops, it seems that we had technical problems with your request, back to the beginning...</h2>
                    </>)}
            </NavRouter>
        </>
    )

}

export default Custom500 