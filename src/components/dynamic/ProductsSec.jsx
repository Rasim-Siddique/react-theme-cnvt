import { Link, useLocation } from "react-router-dom";

const ProductsSec=({allActive,getAllData,isLoading, data,active, filterDataByCat,filteredData, isError})=>{
    const params=useLocation();
    console.log("params:::", params)

    return(
        <>
        
        <div className="col-lg-8 blog__content">

<section className="section tab-post mb-16">
    <div className="title-wrap title-wrap--line">
     
    {
        params.pathname ==="/" ?(
            <>
        <h3 className="section-title">Latest Products</h3>

            
            </>
        ):<>
        <h3 className="section-title">Latest Categories</h3>
        
        </>
    }
 
 {params.pathname ==="/" &&
  <div className="tabs tab-post__tabs">
  <ul className="tabs__list">
      <li
          style={{ color: allActive ? "#3E3EDD" : "", cursor: 'pointer' }}
          onClick={getAllData} className="tabs__item tabs__item--active">
          All
      </li>

      {!isLoading && data &&
          [...new Set(data?.map((cat) => cat?.category))].map((category) => (
              <li
                  key={category}
                  style={{
                      color: active === category ? '#3E3EDD' : '',
                      cursor: 'pointer'
                  }}
                  onClick={() => {
                      filterDataByCat(category);
                  }}
                  className={`tabs__item ${active === category ? 'tabs__item--active' : ''}`}
              >
                  {category}
              </li>
          ))}



  </ul>
</div>
 }
       
    </div>

    <div className="tabs__content tabs__content-trigger tab-post__tabs-content">

        <div className="tabs__content-pane tabs__content-pane--active" id="tab-all">
            <div className="row card-row">

                {!isLoading && filteredData && filteredData?.map((products) => {
                    const { image, title, description, category, price } = products
                    return (
                        <>
                            <div className="col-md-6">
                                <article className="entry card">
                                    <div className="entry__img-holder card__img-holder">
                                        <Link to="/single-product">
                                            <div className="thumb-container thumb-70">
                                                <img data-src={image && image} src={image && image} className="entry__img lazyload" alt="" />
                                            </div>
                                        </Link>
                                        <a href="#" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--violet">{category && category}</a>
                                    </div>

                                    <div className="entry__body card__body">
                                        <div className="entry__header">

                                            <h2 className="entry__title">
                                                <Link to="/single-product">{title && title}</Link>
                                            </h2>
                                            <ul className="entry__meta">
                                                <li className="entry__meta-author">
                                                    <a href="#">{price && price}$</a>
                                                </li>
                                                <li className="entry__meta-date">
                                                    Jan 21, 2018
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="entry__excerpt">
                                            <p>{description && description.substring(0, 100)} ...</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </>
                    )
                })




                }

                {isLoading &&
                    <div className="loader-mask">
                    <div className="loader">
                      <div></div>
                    </div>
                  </div>
                }
            </div>
        </div>

        {isError &&
            <h1>Something Went Wrong </h1>
        }

        <div className="tabs__content-pane" id="tab-world">
            <div className="row card-row">
                <div className="col-md-6">
                    <article className="entry card">
                        <div className="entry__img-holder card__img-holder">
                            <Link to="/single-product">
                                <div className="thumb-container thumb-70">
                                    <img data-src="../src/assets/img/content/grid/grid_post_3.jpg" src="../src/assets/img/content/grid/grid_post_3.jpg" className="entry__img lazyload" alt="" />
                                </div>
                            </Link>
                            <a href="#" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--orange">mining</a>
                        </div>

                        <div className="entry__body card__body">
                            <div className="entry__header">

                                <h2 className="entry__title">
                                    <Link to="/single-product">Lose These 12 Bad Habits If  Serious About Becoming a Millionaire</Link>
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
                            <div className="entry__excerpt">
                                <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-md-6">
                    <article className="entry card">
                        <div className="entry__img-holder card__img-holder">
                            <Link href="/single-product">
                                <div className="thumb-container thumb-70">
                                    <img data-src="../src/assets/img/content/grid/grid_post_4.jpg" src="../src/assets/img/content/grid/grid_post_4.jpg" className="entry__img lazyload" alt="" />
                                </div>
                            </Link>
                            <a href="#" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--green">lifestyle</a>
                        </div>

                        <div className="entry__body card__body">
                            <div className="entry__header">

                                <h2 className="entry__title">
                                    <Link to="/single-product">10 Horrible Habits  Doing Right Now That Are Draining Your Energy</Link>
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
                            <div className="entry__excerpt">
                                <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-md-6">
                    <article className="entry card">
                        <div className="entry__img-holder card__img-holder">
                            <Link to="/single-product">
                                <div className="thumb-container thumb-70">
                                    <img data-src="../src/assets/img/content/grid/grid_post_1.jpg" src="../src/assets/img/content/grid/grid_post_1.jpg" className="entry__img lazyload" alt="" />
                                </div>
                            </Link>
                            <a href="#" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--violet">world</a>
                        </div>

                        <div className="entry__body card__body">
                            <div className="entry__header">

                                <h2 className="entry__title">
                                    <a href="/single-product">Follow These Smartphone Habits of Successful Entrepreneurs</a>
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
                            <div className="entry__excerpt">
                                <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-md-6">
                    <article className="entry card">
                        <div className="entry__img-holder card__img-holder">
                            <a href="/single-product">
                                <div className="thumb-container thumb-70">
                                    <img data-src="../src/assets/img/content/grid/grid_post_2.jpg" src="../src/assets/img/content/grid/grid_post_2.jpg" className="entry__img lazyload" alt="" />
                                </div>
                            </a>
                            <a href="#" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--purple">fashion</a>
                        </div>

                        <div className="entry__body card__body">
                            <div className="entry__header">

                                <h2 className="entry__title">
                                    <a href="/single-product">3 Things You Can Do to Get Your Customers Talking About Your Business</a>
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
                            <div className="entry__excerpt">
                                <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>

        <div className="tabs__content-pane" id="tab-lifestyle">
            <div className="row card-row">
                <div className="col-md-6">
                    <article className="entry card">
                        <div className="entry__img-holder card__img-holder">
                            <a href="/single-product">
                                <div className="thumb-container thumb-70">
                                    <img data-src="../src/assets/img/content/grid/grid_post_1.jpg" src="../src/assets/img/content/grid/grid_post_1.jpg" className="entry__img lazyload" alt="" />
                                </div>
                            </a>
                            <a href="#" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--violet">world</a>
                        </div>

                        <div className="entry__body card__body">
                            <div className="entry__header">

                                <h2 className="entry__title">
                                    <a href="/single-product">Follow These Smartphone Habits of Successful Entrepreneurs</a>
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
                            <div className="entry__excerpt">
                                <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-md-6">
                    <article className="entry card">
                        <div className="entry__img-holder card__img-holder">
                            <a href="/single-product">
                                <div className="thumb-container thumb-70">
                                    <img data-src="../src/assets/img/content/grid/grid_post_2.jpg" src="../src/assets/img/content/grid/grid_post_2.jpg" className="entry__img lazyload" alt="" />
                                </div>
                            </a>
                            <a href="#" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--purple">fashion</a>
                        </div>

                        <div className="entry__body card__body">
                            <div className="entry__header">

                                <h2 className="entry__title">
                                    <a href="/single-product">3 Things You Can Do to Get Your Customers Talking About Your Business</a>
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
                            <div className="entry__excerpt">
                                <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-md-6">
                    <article className="entry card">
                        <div className="entry__img-holder card__img-holder">
                            <a href="/single-product">
                                <div className="thumb-container thumb-70">
                                    <img data-src="../src/assets/img/content/grid/grid_post_3.jpg" src="../src/assets/img/content/grid/grid_post_3.jpg" className="entry__img lazyload" alt="" />
                                </div>
                            </a>
                            <a href="#" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--orange">mining</a>
                        </div>

                        <div className="entry__body card__body">
                            <div className="entry__header">

                                <h2 className="entry__title">
                                    <a href="/single-product">Lose These 12 Bad Habits If  Serious About Becoming a Millionaire</a>
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
                            <div className="entry__excerpt">
                                <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-md-6">
                    <article className="entry card">
                        <div className="entry__img-holder card__img-holder">
                            <a href="/single-product">
                                <div className="thumb-container thumb-70">
                                    <img data-src="../src/assets/img/content/grid/grid_post_4.jpg" src="../src/assets/img/content/grid/grid_post_4.jpg" className="entry__img lazyload" alt="" />
                                </div>
                            </a>
                            <a href="#" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--green">lifestyle</a>
                        </div>

                        <div className="entry__body card__body">
                            <div className="entry__header">

                                <h2 className="entry__title">
                                    <a href="/single-product">10 Horrible Habits  Doing Right Now That Are Draining Your Energy</a>
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
                            <div className="entry__excerpt">
                                <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>

        <div className="tabs__content-pane" id="tab-business">
            <div className="row card-row">
                <div className="col-md-6">
                    <article className="entry card">
                        <div className="entry__img-holder card__img-holder">
                            <a href="/single-product">
                                <div className="thumb-container thumb-70">
                                    <img data-src="../src/assets/img/content/grid/grid_post_3.jpg" src="../src/assets/img/content/grid/grid_post_3.jpg" className="entry__img lazyload" alt="" />
                                </div>
                            </a>
                            <a href="#" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--orange">mining</a>
                        </div>

                        <div className="entry__body card__body">
                            <div className="entry__header">

                                <h2 className="entry__title">
                                    <a href="/single-product">Lose These 12 Bad Habits If  Serious About Becoming a Millionaire</a>
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
                            <div className="entry__excerpt">
                                <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-md-6">
                    <article className="entry card">
                        <div className="entry__img-holder card__img-holder">
                            <a href="/single-product">
                                <div className="thumb-container thumb-70">
                                    <img data-src="../src/assets/img/content/grid/grid_post_4.jpg" src="../src/assets/img/content/grid/grid_post_4.jpg" className="entry__img lazyload" alt="" />
                                </div>
                            </a>
                            <a href="#" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--green">lifestyle</a>
                        </div>

                        <div className="entry__body card__body">
                            <div className="entry__header">

                                <h2 className="entry__title">
                                    <a href="/single-product">10 Horrible Habits  Doing Right Now That Are Draining Your Energy</a>
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
                            <div className="entry__excerpt">
                                <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-md-6">
                    <article className="entry card">
                        <div className="entry__img-holder card__img-holder">
                            <a href="/single-product">
                                <div className="thumb-container thumb-70">
                                    <img data-src="img/content/grid/grid_post_1.jpg" src="img/empty.png" className="entry__img lazyload" alt="" />
                                </div>
                            </a>
                            <a href="#" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--violet">world</a>
                        </div>

                        <div className="entry__body card__body">
                            <div className="entry__header">

                                <h2 className="entry__title">
                                    <a href="/single-product">Follow These Smartphone Habits of Successful Entrepreneurs</a>
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
                            <div className="entry__excerpt">
                                <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-md-6">
                    <article className="entry card">
                        <div className="entry__img-holder card__img-holder">
                            <a href="/single-product">
                                <div className="thumb-container thumb-70">
                                    <img data-src="img/content/grid/grid_post_2.jpg" src="img/empty.png" className="entry__img lazyload" alt="" />
                                </div>
                            </a>
                            <a href="#" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--purple">fashion</a>
                        </div>

                        <div className="entry__body card__body">
                            <div className="entry__header">

                                <h2 className="entry__title">
                                    <a href="/single-product">3 Things You Can Do to Get Your Customers Talking About Your Business</a>
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
                            <div className="entry__excerpt">
                                <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>

        <div className="tabs__content-pane" id="tab-fashion">
            <div className="row card-row">
                <div className="col-md-6">
                    <article className="entry card">
                        <div className="entry__img-holder card__img-holder">
                            <a href="/single-product">
                                <div className="thumb-container thumb-70">
                                    <img data-src="img/content/grid/grid_post_1.jpg" src="img/empty.png" className="entry__img lazyload" alt="" />
                                </div>
                            </a>
                            <a href="#" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--violet">world</a>
                        </div>

                        <div className="entry__body card__body">
                            <div className="entry__header">

                                <h2 className="entry__title">
                                    <a href="/single-product">Follow These Smartphone Habits of Successful Entrepreneurs</a>
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
                            <div className="entry__excerpt">
                                <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-md-6">
                    <article className="entry card">
                        <div className="entry__img-holder card__img-holder">
                            <a href="/single-product">
                                <div className="thumb-container thumb-70">
                                    <img data-src="img/content/grid/grid_post_2.jpg" src="img/empty.png" className="entry__img lazyload" alt="" />
                                </div>
                            </a>
                            <a href="#" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--purple">fashion</a>
                        </div>

                        <div className="entry__body card__body">
                            <div className="entry__header">

                                <h2 className="entry__title">
                                    <a href="/single-product">3 Things You Can Do to Get Your Customers Talking About Your Business</a>
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
                            <div className="entry__excerpt">
                                <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-md-6">
                    <article className="entry card">
                        <div className="entry__img-holder card__img-holder">
                            <a href="/single-product">
                                <div className="thumb-container thumb-70">
                                    <img data-src="img/content/grid/grid_post_3.jpg" src="img/empty.png" className="entry__img lazyload" alt="" />
                                </div>
                            </a>
                            <a href="#" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--orange">mining</a>
                        </div>

                        <div className="entry__body card__body">
                            <div className="entry__header">

                                <h2 className="entry__title">
                                    <a href="/single-product">Lose These 12 Bad Habits If  Serious About Becoming a Millionaire</a>
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
                            <div className="entry__excerpt">
                                <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-md-6">
                    <article className="entry card">
                        <div className="entry__img-holder card__img-holder">
                            <a href="/single-product">
                                <div className="thumb-container thumb-70">
                                    <img data-src="img/content/grid/grid_post_4.jpg" src="img/empty.png" className="entry__img lazyload" alt="" />
                                </div>
                            </a>
                            <a href="#" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--green">lifestyle</a>
                        </div>

                        <div className="entry__body card__body">
                            <div className="entry__header">

                                <h2 className="entry__title">
                                    <a href="/single-product">10 Horrible Habits  Doing Right Now That Are Draining Your Energy</a>
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
                            <div className="entry__excerpt">
                                <p>iPrice Group report offers insights on daily e-commerce activity in the ...</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</section>

</div>

{params.pathname ==='/'
&&
<aside className="col-lg-4 sidebar sidebar--right">

<aside className="widget widget-popular-posts">
    <h4 className="widget-title">Popular Products</h4>
    <ul className="post-list-small">
        {data && data?.slice(0, 4)?.map((products) => {
            const { image, title, description, price } = products

            return (
                <>
                    <li className="post-list-small__item">
                        <article className="post-list-small__entry clearfix">
                            <div className="post-list-small__img-holder">
                                <div className="thumb-container thumb-100">
                                    <Link to="/single-product">
                                        <img data-src={image} src={image} alt="" className="post-list-small__img--rounded lazyload" />
                                    </Link>
                                </div>
                            </div>
                            <div className="post-list-small__body">
                                <h3 className="post-list-small__entry-title">
                                    <Link to="/single-product">{title}</Link>
                                </h3>
                                <ul className="entry__meta">
                                    <li className="entry__meta-author">
                                        <a href="#">{price}</a>
                                    </li>
                                    <li className="entry__meta-date">
                                        {description?.substring(0, 80)}
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </li>
                </>
            )
        })}


    </ul>
</aside>

<aside className="widget widget_mc4wp_form_widget">
    <h4 className="widget-title">Newsletter</h4>
    <p className="newsletter__text">
        <i className="ui-email newsletter__icon"></i>
        Subscribe for our daily news
    </p>
    <form className="mc4wp-form" method="post">
        <div className="mc4wp-form-fields">
            <div className="form-group">
                <input type="email" name="EMAIL" placeholder="Your email" required="" />
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-lg btn-color" value="Sign Up" />
            </div>
        </div>
    </form>
</aside>

<aside className="widget widget-socials">
    <h4 className="widget-title">Lets hang out on social</h4>
    <div className="socials socials--wide socials--large">
        <div className="row row-16">
            <div className="col">
                <a className="social social-facebook" href="#" title="facebook" target="_blank" aria-label="facebook">
                    <i className="ui-facebook"></i>
                    <span className="social__text">Facebook</span>
                </a>
                <a className="social social-twitter" href="#" title="twitter" target="_blank" aria-label="twitter">
                    <i className="ui-twitter"></i>
                    <span className="social__text">Twitter</span>
                </a>
                <a className="social social-youtube" href="#" title="youtube" target="_blank" aria-label="youtube">
                    <i className="ui-youtube"></i>
                    <span className="social__text">Youtube</span>
                </a>
            </div>
            <div className="col">
                <a className="social social-google-plus" href="#" title="google" target="_blank" aria-label="google">
                    <i className="ui-google"></i>
                    <span className="social__text">Google+</span>
                </a>
                <a className="social social-instagram" href="#" title="instagram" target="_blank" aria-label="instagram">
                    <i className="ui-instagram"></i>
                    <span className="social__text">Instagram</span>
                </a>
                <a className="social social-rss" href="#" title="rss" target="_blank" aria-label="rss">
                    <i className="ui-rss"></i>
                    <span className="social__text">Rss</span>
                </a>
            </div>
        </div>
    </div>
</aside>

</aside>
}

        </>
    )
}

export default ProductsSec