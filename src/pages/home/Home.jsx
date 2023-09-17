import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../services/products";
import { Link } from "react-router-dom";
import ProductsSec from "../../components/dynamic/ProductsSec";
import RecommendedProduct from "../../components/dynamic/RecommendedProduct";





function Home() {
    const { data, isLoading, isError } = useGetProductsQuery((undefined, {
        pollingInterval: 3000,
        refetchOnMountOrArgChange: true,
        skip: false,
      }));

    const [filteredData, setFilteredData] = useState([]);
    const [active, setActive] = useState('');
    const [allActive, setAllActive] = useState(true);


console.log('data:::', data)



    useEffect(() => {
        setFilteredData(data)
    }, [data])




    const filterDataByCat = (category) => {
        setAllActive(false)

        setActive(category);
        const newCate = data?.filter((cat) => {
            return cat?.category === category
        })

        setFilteredData(newCate)
    }

    const getAllData = () => {
        setAllActive(true)
        setActive('')
        setFilteredData(data)
    }




return (
        <>
            <main>

               

                <section className="featured-posts-grid">
                    <div className="container">
                        <div className="row row-8">

                            <div className="col-lg-6">

                                <div className="featured-posts-grid__item featured-posts-grid__item--sm">
                                    <article className="entry card post-list featured-posts-grid__entry">
                                        <div className="entry__img-holder post-list__img-holder card__img-holder"
                                            style={{
                                                backgroundImage: `url(${`/img/content/hero/hero_post_1.jpg`})`,
                                            }}
                                        >                      <Link to="/single-product" className="thumb-url"></Link>
                                            <img src="/img/content/hero/hero_post_1.jpg" alt="" className="entry__img d-none" />
                                            <a href="categories.html" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--violet">World</a>
                                        </div>

                                        <div className="entry__body post-list__body card__body">
                                            <h2 className="entry__title">
                                                <Link to="/single-product">3 Founders With Booming Businesses Share Stories About Their Difficult Early</Link>
                                            </h2>
                                            <ul className="entry__meta">
                                                <li className="entry__meta-author">
                                                    <span>by</span>
                                                    <a href="#">DeoThemes</a>
                                                </li>
                                                <li className="entry__meta-date">
                                                    Jan 21, 2018
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                </div>

                                <div className="featured-posts-grid__item featured-posts-grid__item--sm">
                                    <article className="entry card post-list featured-posts-grid__entry">
                                        <div className="entry__img-holder post-list__img-holder card__img-holder"
                                            style={{
                                                backgroundImage: `url(${'/img/content/hero/hero_post_2.jpg'})`,
                                            }}

                                        >                      <Link to="single-product" className="thumb-url"></Link>
                                            <img src="/img/content/hero/hero_post_2.jpg" alt="" className="entry__img d-none" />
                                            <a href="categories.html" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--purple">Fashion</a>
                                        </div>

                                        <div className="entry__body post-list__body card__body">
                                            <h2 className="entry__title">
                                                <Link to="/single-product">3 Things You Can Do to Get Your Customers Talking About Your Business</Link>
                                            </h2>
                                            <ul className="entry__meta">
                                                <li className="entry__meta-author">
                                                    <span>by</span>
                                                    <a href="#">DeoThemes</a>
                                                </li>
                                                <li className="entry__meta-date">
                                                    Jan 21, 2018
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                </div>

                                <div className="featured-posts-grid__item featured-posts-grid__item--sm">
                                    <article className="entry card post-list featured-posts-grid__entry">
                                        <div className="entry__img-holder post-list__img-holder card__img-holder"
                                            style={{
                                                backgroundImage: `url(${'/img/content/hero/hero_post_3.jpg'})`,
                                                /* Other CSS properties can be added here */
                                            }}
                                        >                      <Link href="/single-product" className="thumb-url"></Link>
                                            <img src="/img/content/hero/hero_post_3.jpg" alt="" className="entry__img d-none" />
                                            <a href="categories.html" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--blue">Business</a>
                                        </div>

                                        <div className="entry__body post-list__body card__body">
                                            <h2 className="entry__title">
                                                             <Link href="/single-product" >
                                        These Are the 20 Best Places to Work in 2018
                                        </Link>

                                            </h2>
                                            <ul className="entry__meta">
                                                <li className="entry__meta-author">
                                                    <span>by</span>
                                                    <a href="#">DeoThemes</a>
                                                </li>
                                                <li className="entry__meta-date">
                                                    Jan 21, 2018
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                </div>

                            </div>

                            <div className="col-lg-6">


                                <div className="featured-posts-grid__item featured-posts-grid__item--lg">
                                    <article className="entry card featured-posts-grid__entry">
                                        <div className="entry__img-holder card__img-holder">
                                            <Link to="single-product">
                                                <img src="/img/content/hero/hero_post_4.jpg" alt="" className="entry__img" />
                                            </Link>
                                            <a href="categories.html" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--green">Lifestyle</a>
                                        </div>

                                        <div className="entry__body card__body">
                                            <h2 className="entry__title">
                                                <Link to="single-product">What Days and Hours are PH Online Shoppers Most Likely to Buy?</Link>
                                            </h2>
                                            <ul className="entry__meta">
                                                <li className="entry__meta-author">
                                                    <span>by</span>
                                                    <a href="#">DeoThemes</a>
                                                </li>
                                                <li className="entry__meta-date">
                                                    Jan 21, 2018
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <div className="main-container container pt-24" id="main-container">

                    <div className="row">

                      <ProductsSec 
                      allActive={allActive} getAllData={getAllData} isLoading={isLoading} data={data} active={active} filterDataByCat={filterDataByCat} filteredData={filteredData} isError={isError}
                      />

                    </div>

                    <div className="text-center pb-48">
                        <a href="#">
                            <img src="/img/content/placeholder_728.jpg" alt="" />
                        </a>
                    </div>

                    <section className="section mb-0">
                        <div className="title-wrap title-wrap--line title-wrap--pr">
                            <h3 className="section-title">editors picks</h3>
                        </div>

                        <div id="owl-posts" className="owl-carousel owl-theme owl-carousel--arrows-outside">
                            <article className="entry thumb thumb--size-1">
                                <div className="entry__img-holder thumb__img-holder"
                                    style={{
                                        backgroundImage: "url('/img/content/carousel/carousel_post_1.jpg')",
                                    }}
                                >
                                    <div className="bottom-gradient"></div>
                                    <div className="thumb-text-holder">
                                        <h2 className="thumb-entry-title">
                                            <Link to="/single-product">9 Things to Consider Before Accepting a New Job</Link>
                                        </h2>
                                    </div>
                                    <Link to="/single-product" className="thumb-url"></Link>
                                </div>
                            </article>
                            <article className="entry thumb thumb--size-1">
                                <div className="entry__img-holder thumb__img-holder"
                                    style={{
                                        backgroundImage: `url(${'/img/content/carousel/carousel_post_2.jpg'})`,
                                    }}
                                >
                                    <div className="bottom-gradient"></div>
                                    <div className="thumb-text-holder">
                                        <h2 className="thumb-entry-title">
                                            <Link to="/single-product">Gov’t Toughens Rules to Ensure 3rd Telco Player Doesn’t Slack Off</Link>
                                        </h2>
                                    </div>
                                    <a to="/single-product" className="thumb-url"></a>
                                </div>
                            </article>
                            <article className="entry thumb thumb--size-1">
                                <div className="entry__img-holder thumb__img-holder"
                                    style={{
                                        backgroundImage: `url(${'/img/content/carousel/carousel_post_3.jpg'})`,
                                    }}
                                >                  <div className="bottom-gradient"></div>
                                    <div className="thumb-text-holder">
                                        <h2 className="thumb-entry-title">
                                            <Link to="/single-product">(Infographic) Is Work-Life Balance Even Possible?</Link>
                                        </h2>
                                    </div>
                                    <Link to="/single-product" className="thumb-url"></Link>
                                </div>
                            </article>
                            <article className="entry thumb thumb--size-1">
                                <div className="entry__img-holder thumb__img-holder"
                                    style={{
                                        backgroundImage: `url(${'/img/content/carousel/carousel_post_4.jpg'})`,
                                    }}
                                >                  <div className="bottom-gradient"></div>
                                    <div className="thumb-text-holder">
                                        <h2 className="thumb-entry-title">
                                            <Link to="/single-product">Is Uber Considering To Sell its Southeast Asia Business to Grab?</Link>
                                        </h2>
                                    </div>
                                    <a to="/single-product" className="thumb-url"></a>
                                </div>
                            </article>
                            <article className="entry thumb thumb--size-1">
                                <div className="entry__img-holder thumb__img-holder"
                                    style={{
                                        backgroundImage: `url(${'/img/content/carousel/carousel_post_2.jpg'})`,
                                    }}
                                >                  <div className="bottom-gradient"></div>
                                    <div className="thumb-text-holder">
                                        <h2 className="thumb-entry-title">
                                            <a to="/single-product">Gov’t Toughens Rules to Ensure 3rd Telco Player Doesn’t Slack Off</a>
                                        </h2>
                                    </div>
                                    <a to="/single-product" className="thumb-url"></a>
                                </div>
                            </article>
                        </div>

                    </section>


                    <section className="section mb-0">
                        <div className="row">

                            <div className="col-md-6">
                                <div className="title-wrap title-wrap--line">
                                    <h3 className="section-title">technology</h3>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <article className="entry thumb thumb--size-2">
                                            <div className="entry__img-holder thumb__img-holder"
                                                style={{
                                                    backgroundImage: `url(${'/img/content/thumb/thumb_post_1.jpg'})`,
                                                }}
                                            >                        <div className="bottom-gradient"></div>
                                                <div className="thumb-text-holder thumb-text-holder--1">
                                                    <h2 className="thumb-entry-title">
                                                        <a to="/single-product">Gov’t Toughens Rules to Ensure 3rd Telco Player Doesn’t Slack Off</a>
                                                    </h2>
                                                    <ul className="entry__meta">
                                                        <li className="entry__meta-author">
                                                            <span>by</span>
                                                            <a to="#">DeoThemes</a>
                                                        </li>
                                                        <li className="entry__meta-date">
                                                            Jan 21, 2018
                                                        </li>
                                                    </ul>
                                                </div>
                                                <a to="/single-product" className="thumb-url"></a>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="post-list-small post-list-small--dividers post-list-small--arrows mb-24">
                                            <li className="post-list-small__item">
                                                <article className="post-list-small__entry">
                                                    <div className="post-list-small__body">
                                                        <h3 className="post-list-small__entry-title">
                                                            <a to="/single-product">Need a Website for Your Business? Google Can Help</a>
                                                        </h3>
                                                    </div>
                                                </article>
                                            </li>
                                            <li className="post-list-small__item">
                                                <article className="post-list-small__entry">
                                                    <div className="post-list-small__body">
                                                        <h3 className="post-list-small__entry-title">
                                                            <a to="/single-product">Here Are Ways You Can Earn From the Sharing Economy</a>
                                                        </h3>
                                                    </div>
                                                </article>
                                            </li>
                                            <li className="post-list-small__item">
                                                <article className="post-list-small__entry">
                                                    <div className="post-list-small__body">
                                                        <h3 className="post-list-small__entry-title">
                                                            <a to="/single-product">19 Crazy Facts You Probably Didnt Know About Google</a>
                                                        </h3>
                                                    </div>
                                                </article>
                                            </li>
                                            <li className="post-list-small__item">
                                                <article className="post-list-small__entry">
                                                    <div className="post-list-small__body">
                                                        <h3 className="post-list-small__entry-title">
                                                            <a to="/single-product">What Household Chores Would Filipinos Love to Assign to Robots?</a>
                                                        </h3>
                                                    </div>
                                                </article>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="title-wrap title-wrap--line">
                                    <h3 className="section-title">travel</h3>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <article className="entry thumb thumb--size-2">
                                            <div className="entry__img-holder thumb__img-holder"
                                                style={{
                                                    backgroundImage: `url(${'/img/content/thumb/thumb_post_2.jpg'})`,
                                                }}
                                            >                        <div className="bottom-gradient"></div>
                                                <div className="thumb-text-holder thumb-text-holder--1">
                                                    <h2 className="thumb-entry-title">
                                                        <a to="/single-product">4 credit card tips to make business travel easier</a>
                                                    </h2>
                                                    <ul className="entry__meta">
                                                        <li className="entry__meta-author">
                                                            <span>by</span>
                                                            <a to="#">DeoThemes</a>
                                                        </li>
                                                        <li className="entry__meta-date">
                                                            Jan 21, 2018
                                                        </li>
                                                    </ul>
                                                </div>
                                                <a to="/single-product" className="thumb-url"></a>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="post-list-small post-list-small--dividers post-list-small--arrows mb-24">
                                            <li className="post-list-small__item">
                                                <article className="post-list-small__entry">
                                                    <div className="post-list-small__body">
                                                        <h3 className="post-list-small__entry-title">
                                                            <a to="/single-product">5 deadliest luxury vacation spots on Earth</a>
                                                        </h3>
                                                    </div>
                                                </article>
                                            </li>
                                            <li className="post-list-small__item">
                                                <article className="post-list-small__entry">
                                                    <div className="post-list-small__body">
                                                        <h3 className="post-list-small__entry-title">
                                                            <a to="/single-product">These 4 startups can send you to work and travel abroad</a>
                                                        </h3>
                                                    </div>
                                                </article>
                                            </li>
                                            <li className="post-list-small__item">
                                                <article className="post-list-small__entry">
                                                    <div className="post-list-small__body">
                                                        <h3 className="post-list-small__entry-title">
                                                            <a to="/single-product">9 mind-blowing travel destinations for adventure seekers</a>
                                                        </h3>
                                                    </div>
                                                </article>
                                            </li>
                                            <li className="post-list-small__item">
                                                <article className="post-list-small__entry">
                                                    <div className="post-list-small__body">
                                                        <h3 className="post-list-small__entry-title">
                                                            <a to="/single-product">These Small Business Ideas Are Great for Entrepreneurial Children</a>
                                                        </h3>
                                                    </div>
                                                </article>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="title-wrap title-wrap--line">
                                    <h3 className="section-title">Cryptocurrency</h3>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <article className="entry thumb thumb--size-2">
                                            <div className="entry__img-holder thumb__img-holder"
                                                style={{
                                                    backgroundImage: `url(${'/img/content/thumb/thumb_post_3.jpg'})`,
                                                }}
                                            >                        <div className="bottom-gradient"></div>
                                                <div className="thumb-text-holder thumb-text-holder--1">
                                                    <h2 className="thumb-entry-title">
                                                        <a to="/single-product">UN’s WFP Building Up Blockchain-Based Payments System</a>
                                                    </h2>
                                                    <ul className="entry__meta">
                                                        <li className="entry__meta-author">
                                                            <span>by</span>
                                                            <a to="#">DeoThemes</a>
                                                        </li>
                                                        <li className="entry__meta-date">
                                                            Jan 21, 2018
                                                        </li>
                                                    </ul>
                                                </div>
                                                <a to="/single-product" className="thumb-url"></a>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="post-list-small post-list-small--dividers post-list-small--arrows mb-24">
                                            <li className="post-list-small__item">
                                                <article className="post-list-small__entry">
                                                    <div className="post-list-small__body">
                                                        <h3 className="post-list-small__entry-title">
                                                            <a to="/single-product">Cryptocurrency Markets: Weekly Trading Overview (06-13 October)</a>
                                                        </h3>
                                                    </div>
                                                </article>
                                            </li>
                                            <li className="post-list-small__item">
                                                <article className="post-list-small__entry">
                                                    <div className="post-list-small__body">
                                                        <h3 className="post-list-small__entry-title">
                                                            <a to="/single-product">MyEtherWallet Opens the Ethereum Universe for You</a>
                                                        </h3>
                                                    </div>
                                                </article>
                                            </li>
                                            <li className="post-list-small__item">
                                                <article className="post-list-small__entry">
                                                    <div className="post-list-small__body">
                                                        <h3 className="post-list-small__entry-title">
                                                            <a to="/single-product">Put Your Money Where Your Marketing Is</a>
                                                        </h3>
                                                    </div>
                                                </article>
                                            </li>
                                            <li className="post-list-small__item">
                                                <article className="post-list-small__entry">
                                                    <div className="post-list-small__body">
                                                        <h3 className="post-list-small__entry-title">
                                                            <a to="/single-product">3 ways for startups to master the art of emailing</a>
                                                        </h3>
                                                    </div>
                                                </article>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="title-wrap title-wrap--line">
                                    <h3 className="section-title">Investment</h3>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <article className="entry thumb thumb--size-2">
                                            <div className="entry__img-holder thumb__img-holder"
                                                style={{
                                                    backgroundImage: `url(${'/img/content/thumb/thumb_post_4.jpg'})`,
                                                }}
                                            >                        <div className="bottom-gradient"></div>
                                                <div className="thumb-text-holder thumb-text-holder--1">
                                                    <h2 className="thumb-entry-title">
                                                        <a to="/single-product">14 easy, low-cost ways authors can promote their books</a>
                                                    </h2>
                                                    <ul className="entry__meta">
                                                        <li className="entry__meta-author">
                                                            <span>by</span>
                                                            <a to="#">DeoThemes</a>
                                                        </li>
                                                        <li className="entry__meta-date">
                                                            Jan 21, 2018
                                                        </li>
                                                    </ul>
                                                </div>
                                                <a to="/single-product" className="thumb-url"></a>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="post-list-small post-list-small--dividers post-list-small--arrows mb-24">
                                            <li className="post-list-small__item">
                                                <article className="post-list-small__entry">
                                                    <div className="post-list-small__body">
                                                        <h3 className="post-list-small__entry-title">
                                                            <a to="/single-product">Financial Adviser: 4 ways to know how much dividends you should pay</a>
                                                        </h3>
                                                    </div>
                                                </article>
                                            </li>
                                            <li className="post-list-small__item">
                                                <article className="post-list-small__entry">
                                                    <div className="post-list-small__body">
                                                        <h3 className="post-list-small__entry-title">
                                                            <a to="/single-product">3 cash flow rules first-time business owners need to know</a>
                                                        </h3>
                                                    </div>
                                                </article>
                                            </li>
                                            <li className="post-list-small__item">
                                                <article className="post-list-small__entry">
                                                    <div className="post-list-small__body">
                                                        <h3 className="post-list-small__entry-title">
                                                            <a to="/single-product">Common credit mistakes new business owners make</a>
                                                        </h3>
                                                    </div>
                                                </article>
                                            </li>
                                            <li className="post-list-small__item">
                                                <article className="post-list-small__entry">
                                                    <div className="post-list-small__body">
                                                        <h3 className="post-list-small__entry-title">
                                                            <a to="/single-product">Ask these 2 questions every time you make a purchase</a>
                                                        </h3>
                                                    </div>
                                                </article>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="section mb-24">
                        <div className="title-wrap title-wrap--line">
                            <h3 className="section-title">Videos</h3>
                            <a to="#" className="all-posts-url">View All</a>
                        </div>
                        <div className="row card-row">
                            <div className="col-md-6">
                                <article className="entry card">
                                    <div className="entry__img-holder card__img-holder">
                                        <a to="/single-product">
                                            <div className="thumb-container thumb-65">
                                                <img data-src="/img/content/grid/grid_post_5.jpg" src="img/empty.png" className="entry__img lazyload" alt="" />
                                            </div>
                                        </a>
                                        <div className="entry__play-time"><i className="ui-play"></i>3:21</div>
                                    </div>

                                    <div className="entry__body card__body">
                                        <div className="entry__header">
                                            <h2 className="entry__title">
                                                <a to="/single-product">What Days and Hours are PH Online Shoppers Most Likely to Buy?</a>
                                            </h2>
                                            <ul className="entry__meta">
                                                <li className="entry__meta-author">
                                                    <span>by</span>
                                                    <a to="#">DeoThemes</a>
                                                </li>
                                                <li className="entry__meta-date">
                                                    Jan 21, 2018
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="entry__excerpt">
                                            <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-md-6">
                                <article className="entry card">
                                    <div className="entry__img-holder card__img-holder">
                                        <a to="/single-product">
                                            <div className="thumb-container thumb-65">
                                                <img data-src="/img/content/grid/grid_post_6.jpg" src="img/empty.png" className="entry__img lazyload" alt="" />
                                            </div>
                                        </a>
                                        <div className="entry__play-time"><i className="ui-play"></i>3:21</div>
                                    </div>

                                    <div className="entry__body card__body">
                                        <div className="entry__header">
                                            <h2 className="entry__title">
                                                <a to="/single-product">Want to work at Tesla? This program guarantees you a job after graduation</a>
                                            </h2>
                                            <ul className="entry__meta">
                                                <li className="entry__meta-author">
                                                    <span>by</span>
                                                    <a to="#">DeoThemes</a>
                                                </li>
                                                <li className="entry__meta-date">
                                                    Jan 21, 2018
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="entry__excerpt">
                                            <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>


             <RecommendedProduct data={data} />


                </div>


                <div id="back-to-top">
                    <a to="#top" aria-label="Go to top"><i className="ui-arrow-up"></i></a>
                </div>
            </main>

        </>
    )
}

export default Home
