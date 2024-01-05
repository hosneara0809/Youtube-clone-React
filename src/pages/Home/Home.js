import Layout from "../../components/Layout/Layout";
import CategorySection from "./_CategorySection";
import SliderMovieSection from "./_SliderMovieSection";

function Home() {
    return (
        <>
            <Layout>
                <CategorySection />

                {/* <SliderMovieSection type="now_playing" />

                <SliderMovieSection type="popular" />

                <SliderMovieSection type="top_rated" />

                <SliderMovieSection type="upcoming" /> */}

                {['now-playing', 'popular', 'top-rated', 'upcoming'].map((type) => (
                    <SliderMovieSection key={type} type={type} />
                ))}
            </Layout>
        </>
    );
}

export default Home;
