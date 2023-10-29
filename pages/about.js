import Link from 'next/link'
import ContactPage from '../components/ContactPage'
import Layout from '../components/Layout'
export default () => (


<div className='container'>
    <Layout>
        <div className='container'>
            {/* displays info on how contact me */}
            <ContactPage></ContactPage>
        </div>
        
    </Layout>
</div>
)
