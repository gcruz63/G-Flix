import './Home.css'
import Row from '../components/row/Row';
import requests from '../requests';
import { NavBar } from '../components/nav/NavBar';

function Home() {
    return (
        <div className='home'>
            <h1>GFlix</h1>
            <Row sectionTitle="Trending Now" fetchURL={requests.trending} />
            <Row sectionTitle="Top Rated" fetchURL={requests.topRated} />
            <Row sectionTitle="Popular" fetchURL={requests.popular} />
        </div>
    )
}

export default Home
