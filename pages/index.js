import About from '../components/Home/About/About'
import Blogs from '../components/Home/Blogs/Blogs'
import Destinations from '../components/Home/Destinations/Destinations'
import Feedbacks from '../components/Home/Feedbacks/Feedbacks'
import Info from '../components/Home/Info/Info'
import Services from '../components/Home/Services/Services'
import Tours from '../components/Home/Tours/Tours'
import Layout from '../components/Layout/Layout'

export default function Home({ tours }) {

  return (
    <div>

      <Layout>

        <About />

        <Tours tours={tours} />

        <Info />

        <Services />

        <Destinations />

        <Feedbacks />

        {/* <Blogs /> */}

      </Layout>
    </div>
  )
}

Home.getInitialProps = async () => {
  const url = 'http://127.0.0.1:8000';
  try {
    const res = await fetch(`${url}/api/tours`);
    const tours = await res.json();
    return {
      tours
    }
  } catch {
    return {
      tours: []
    }
  }
}