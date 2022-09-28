import NavRouter from "../components/NavRouter";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404 = () => {
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
        title: "Not Found Resource",
        description: pageLang == 'ES' ? "Woops, parece que no hemos encontrado esta página, quizá se movió." : "Woops, we can't seem to find this page, maybe it has been moved.",
        image: undefined
    }
    return (
        <>
            <NavRouter headerprops={indexHeaderProps}>
                {pageLang == "ES" ?
                    (<>
                        <h2 className="error-title">Woops, parece que no hemos encontrado esta página, quizá se movió, volviendo al inicio...</h2>
                    </>) :
                    (<>
                        <h2 className="error-title">Woops, we can't seem to find this page, maybe it has been moved, back to the beginning...</h2>
                    </>)}
            </NavRouter>
        </>
    )

}

export default Custom404 