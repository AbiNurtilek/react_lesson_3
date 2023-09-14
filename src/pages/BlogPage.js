import Header from "../components/Header";
import Blogentry from "../components/Blogentry";
import AboutCard from "../components/AboutCard";
import { Posts } from "../components/Posts";
import { Labelstags } from "../components/Labels tags";
import { Footer } from "../components/Footer";
function BlogPage () {
    return (
        <div class="w3-row">
            <Header/>
            <Blogentry />
            <AboutCard />
            <Posts />
            <Labelstags />
            <Footer />
        </div>
    )
}


export default BlogPage