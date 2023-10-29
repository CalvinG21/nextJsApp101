import Link from "next/link"
import Layout from "../components/Layout"
import Projects from "../components/Projects"

let projects=()=>{
    return(<>
         <div className='container'>
            <Layout>
                <Projects></Projects>
            </Layout>
            <style jsx>{`
            h3 {
            color: blue;
            }
            div {
            background: white;
            }
            @media (max-width: 600px) {
            
            }
            `}</style>
            <style global jsx>{`
            body {
            background: lightgrey;
            }
            `}</style>
         </div>
            </>)
}

export default projects