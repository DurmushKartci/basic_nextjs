import Link from "next/link"

const Head = () =>{
    return(
        <>
            <div className="head">

                <div className="logo">
                    <img src="/images/amean_logo.png"/>
                </div>

                <div className="link-items">
                    <div className="item">
                        <Link href="/">
                            <a>AnaSayfa</a>
                        </Link>
                    </div>
                    <div className="item">
                        <Link href="/hesap-makinesi">
                            <a>Hesap Makinesi</a>
                        </Link>
                    </div>
                </div>

                <div className="space">

                </div>

                {/* <ul>
                    <li>
                        <Link href="/">
                            <a>AnaSayfa</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/hesap-makinesi">
                            <a>Hesap Makinesi</a>
                        </Link>
                    </li>
                </ul> */}
            </div>
        </>
    )
}

export default Head