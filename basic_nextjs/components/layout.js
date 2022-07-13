import Head from "./head"

const Layout = ({children}) =>{
    return(
        <>
            <Head/>
            {children}
        </>
    )
}

export default Layout