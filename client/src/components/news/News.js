import './news.css'
import NewsCard from "./NewsCard";
import news1 from '../../resources/news/news-1.jpg'
import news2 from '../../resources/news/news-2.jpg'
import news3 from '../../resources/news/news-3.jpg'
import news4 from '../../resources/news/news-4.jpg'
function news () {
    return(
        <div className="news-container">
            <div className="heading-and-subheading">
                <p className="news-heading">LATEST NEWS</p>
                <p className="news-subHeading">INTEGER CONGUE ELIT</p>
            </div>
            <div className="news-card-container">
                <NewsCard image = {news1}
                    heading="CURABITUR LOREM USIM QUIS"
                    description="Pellentesque habitant morbi tristique
                sene ctus eft netus elf malesuada fames turpis egestas.
                Aenean donec..."/>

                <NewsCard image = {news2}
                    heading="CURABITUR LOREM USIM QUIS"
                    description="Pellentesque habitant morbi tristique
                sene ctus eft netus elf malesuada fames turpis egestas.
                Aenean donec..."/>

                <NewsCard image = {news3}
                    heading="CURABITUR LOREM USIM QUIS"
                    description="Pellentesque habitant morbi tristique
                sene ctus eft netus elf malesuada fames turpis egestas.
                Aenean donec..."/>

                <NewsCard image = {news4}
                    heading="CURABITUR LOREM USIM QUIS"
                    description="Pellentesque habitant morbi tristique
                sene ctus eft netus elf malesuada fames turpis egestas.
                Aenean donec..."/>

            </div>
        </div>
    )
}

export default news