import Head from 'next/head'
import useLocalStorage from 'use-local-storage'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function NavRouter({ children, headerprops = null }) {
    const nxRouter = useRouter();
    const headerdefaults = {
        title: "Crihstian Molina",
        description: "Hello, my name is Crihstian Molina, I'm Software Developer with more than two years of experience in the field, and this is my website.",
        image: "https://crihstianmol.dev/static/images/banner-min.png"
    }
    const [theme, setTheme] = useLocalStorage('theme', 'dark');
    // const buttonTheme = () => {
    //     return theme === 'dark' ? '../static/images/logos/light.png' : '../static/images/logos/dark.png'
    // }
    const [buttonTheme, setbuttonTheme] = useState('../static/images/logos/light.png');
    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

    const [check, setcheck] = useState(false)
    const [loader, setloader] = useState(false)

    const changeCheckStatus = () => {
        setcheck(!check)
    }

    const changeRoute = (route) => {
        setloader(true)
        nxRouter.push(route).finally(
            () => {
                setloader(false)
            }
        )
    }
    const [pageLang, setPageLan] = useState('EN')
    useEffect(() => {
        if (navigator.language.includes('es')) {
            setPageLan('ES')
        } else {
            setPageLan('EN')
        }
        setTheme(window.localStorage.getItem('theme').includes('dark') ? 'dark' : 'light')
    }, []);

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        body.setAttribute("data-theme", theme)
        setbuttonTheme(theme === 'dark' ? '../static/images/logos/light.png' : '../static/images/logos/dark.png')
    }, [theme])

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=5.0" />
                <title>{headerprops != null ? (headerprops.title != null ? `${headerdefaults.title} - ${headerprops.title}` : headerdefaults.title) : headerdefaults.title}</title>
                <meta name="title" content={headerprops != null ? (headerprops.title != null ? `${headerdefaults.title} - ${headerprops.title}` : headerdefaults.title) : headerdefaults.title} />
                <meta name="description" content={headerprops != null ? (headerprops.description != null ? headerprops.description : headerdefaults.description) : headerdefaults.description} />
                <meta name="keywords" content="Crihstian Molina, Software Developer" />
                <meta name="author" content="Crihstian Molina" />
                <meta name="copyright" content="Crihstian Molina" />
                <meta name="robots" content="index,follow" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://crihstianmol.dev/" />
                <meta property="og:title" content={headerprops != null ? (headerprops.title != null ? `${headerdefaults.title} - ${headerprops.title}` : headerdefaults.title) : headerdefaults.title} />
                <meta property="og:description" content={headerprops != null ? (headerprops.description != null ? headerprops.description : headerdefaults.description) : headerdefaults.description} />
                <meta property="og:image" content={headerprops != null ? (headerprops.image != null ? headerprops.image : headerdefaults.image) : headerdefaults.image} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://crihstianmol.dev/" />
                <meta property="twitter:title" content={headerprops != null ? (headerprops.title != null ? `${headerdefaults.title} - ${headerprops.title}` : headerdefaults.title) : headerdefaults.title} />
                <meta property="twitter:description" content={headerprops != null ? (headerprops.description != null ? headerprops.description : headerdefaults.description) : headerdefaults.description} />
                <meta property="twitter:image" content={headerprops != null ? (headerprops.image != null ? headerprops.image : headerdefaults.image) : headerdefaults.image} />
                <link rel='shortcut icon' href='../static/images/fav.ico' type='image/x-icon' />
                <link rel="icon" href="../static/images/fav.ico" type='image/x-icon' />
                <link rel="image_src" href={headerprops != null ? (headerprops.image != null ? headerprops.image : headerdefaults.image) : headerdefaults.image} />
            </Head>
            {
                pageLang === 'ES' ? (
                    <header>
                        <nav className="nav-bar">
                            <div className="nav">
                                <label className="logo">
                                    <a onClick={() => { changeRoute("/") }} _href="/"><span className="logo-a"><span className="emoji" role="img" ><img width="19" height="19" alt="url" src="../static/images/logos/favicon.png"></img></span> </span></a>
                                    <a onClick={() => { changeRoute("/") }} _href="/"><span className="logo-a"><span className="ml">Crihstian Molina</span></span></a>
                                </label>
                                <input type="checkbox" checked={check} onChange={changeCheckStatus} id="btnMenu" className="nav-btn" />
                                <div className="links">
                                    <a onClick={() => { changeRoute("/blog") }} _href="/blog"><span className="emoji" role="img" ><img width="19" height="19" alt="url" src="../static/images/logos/blog.png"></img></span> Blog</a>
                                    <a onClick={() => { changeRoute("/curriculum") }} _href="/curriculum"><span className="emoji" role="img" ><img width="19" height="19" alt="url" src="../static/images/logos/curriculum.png"></img></span> Curriculum</a>
                                    <a onClick={() => { changeRoute("/contact") }} _href="/contact"><span className="emoji" role="img" ><img width="19" height="19" alt="url" src="../static/images/logos/phone.png"></img></span> Contacto</a>
                                </div>
                                <div className='nav-buttons-container'>
                                    <span className="emoji" role="img" onClick={switchTheme}>
                                        <img alt="theme" width="19" height="19" src={buttonTheme}></img>
                                    </span>
                                    <label htmlFor="btnMenu" className="nav-burger-btn">
                                        <svg className="menu bars-icon" viewBox="0 0 448 512" width="100" title="bars">
                                            <path
                                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                                            />
                                        </svg>
                                        <svg className="close bars-icon" viewBox="0 0 384 512" width="100" title="times">
                                            <path
                                                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                                            />
                                        </svg>
                                    </label>
                                </div>
                            </div>
                        </nav>
                    </header>
                ) : (
                    <header>
                        <nav className="nav-bar">
                            <div className="nav">
                                <label className="logo">
                                    <a onClick={() => { changeRoute("/") }} _href="/"><span className="logo-a"><span className="emoji" role="img" ><img width="19" height="19" alt="url" src="../static/images/logos/favicon.png"></img></span> </span></a>
                                    <a onClick={() => { changeRoute("/") }} _href="/"><span className="logo-a"><span className="ml">Crihstian Molina</span></span></a>
                                </label>
                                <input type="checkbox" checked={check} onChange={changeCheckStatus} id="btnMenu" className="nav-btn" />
                                <div className="links">
                                    <a onClick={() => { changeRoute("/blog") }} _href="/blog"><span className="emoji" role="img" ><img width="19" height="19" alt="url" src="../static/images/logos/blog.png"></img></span> Blog</a>
                                    <a onClick={() => { changeRoute("/curriculum") }} _href="/curriculum"><span className="emoji" role="img" ><img width="19" height="19" alt="url" src="../static/images/logos/curriculum.png"></img></span> Curriculum</a>
                                    <a onClick={() => { changeRoute("/contact") }} _href="/contact"><span className="emoji" role="img" ><img width="19" height="19" alt="url" src="../static/images/logos/phone.png"></img></span> Contact</a>
                                </div>
                                <div className='nav-buttons-container'>
                                    <span className="emoji" role="img" onClick={switchTheme}>
                                        <img alt="theme" width="19" height="19" src={buttonTheme}></img>
                                    </span>
                                    <label htmlFor="btnMenu" className="nav-burger-btn">
                                        <svg className="menu bars-icon" viewBox="0 0 448 512" width="100" title="bars">
                                            <path
                                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                                            />
                                        </svg>
                                        <svg className="close bars-icon" viewBox="0 0 384 512" width="100" title="times">
                                            <path
                                                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                                            />
                                        </svg>
                                    </label>
                                </div>
                            </div>
                        </nav>
                    </header>
                )
            }
            <main className="main mt-4 " >
                {loader ? (<div className='load-container'>
                    <div className='load-circle'></div>
                </div>) : (children)}
            </main>
            {
                pageLang === 'ES' ? (
                    <div className="footer mt">
                        <div className="footer-links-container" >
                            <div className="footer-links">
                                <a onClick={() => { changeRoute("/hobbies") }} _href="/hobbies"><span className="emoji" role="img" ><img width="19" height="19" alt="url" src="../static/images/logos/hobbies.png"></img></span> Hobbies</a>
                                <a href='https://www.paypal.com/donate/?hosted_button_id=WMJ939EWKVBVC' target='_blank' rel='noreferrer' ><span className="emoji" role="img" ><img width="19" height="19" alt="url" src="../static/images/logos/buy-coffe.png"></img></span> Donar</a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="footer mt">
                        <div className="footer-links-container" >
                            <div className="footer-links">
                                <a onClick={() => { changeRoute("/hobbies") }} _href="/hobbies"><span className="emoji" role="img" ><img width="19" height="19" alt="url" src="../static/images/logos/hobbies.png"></img></span> Hobbies</a>
                                <a href='https://www.paypal.com/donate/?hosted_button_id=WMJ939EWKVBVC' target='_blank' rel='noreferrer' ><span className="emoji" role="img" ><img width="19" height="19" alt="url" src="../static/images/logos/buy-coffe.png"></img></span> Donate</a>
                            </div>
                        </div>
                    </div>
                )
            }
            <script src="./static/js/getThumbs.js" data-pdfjs-src="./static/js/pdf.js"></script>
        </>
    );
}

export default NavRouter;
