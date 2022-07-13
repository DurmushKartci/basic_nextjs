import Link from 'next/link'
import {useState} from "react"


const HesapMakinesi = () => {
    const [result,setResult] = useState()

    const topla = (event) =>{
        event.preventDefault();
        let n1 = parseInt(event.target.n1.value)
        let n2 = parseInt(event.target.n2.value)

        setResult(n1+n2)
    }
  return (
    <>
        <form onSubmit={topla} action="#" method="POST" autoComplete="off">
            <input type="number" name="n1" placeholder="ilk sayı"/> 
            <span>+</span>
            <input type="number" name="n2"  placeholder="ikinci sayı"/>  
            <span>=</span>
            <span>{result}</span>
            <button type="submit">
                Topla
            </button>
        </form>
    </>
  )
}


export default HesapMakinesi