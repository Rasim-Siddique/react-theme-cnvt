const RecommendedProduct=({data})=>{
    return(
        <>
               <div className="row">

<div className="col-lg-8 blog__content mb-72">

    <section className="section">
        <div className="title-wrap title-wrap--line">
            <h3 className="section-title">Products</h3>
            <a to="#" className="all-posts-url">View All</a>
        </div>
        {data && data?.map((products) => {
            const { image, title, category, description, price } = products
            return (
                <>
                    <article className="entry card post-list">
                        <div className="entry__img-holder post-list__img-holder card__img-holder"
                            style={{
                                backgroundImage: `url(${image})`,
                            }}
                        >                    <a to="/single-product" className="thumb-url"></a>
                            <img src={image} alt="" className="entry__img d-none" />
                            <a to="categories.html" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--blue">{category}</a>
                        </div>

                        <div className="entry__body post-list__body card__body">
                            <div className="entry__header">
                                <h2 className="entry__title">
                                    <a to="/single-product">{title}</a>
                                </h2>
                                <ul className="entry__meta">
                                    <li className="entry__meta-author">
                                        <a to="#">{price}$</a>
                                    </li>
                                    <li className="entry__meta-date">
                                        Jan 21, 2018
                                    </li>
                                </ul>
                            </div>
                            <div className="entry__excerpt">
                                <p>{description.substring(0, 100)} ...</p>
                            </div>
                        </div>
                    </article>

                </>
            )
        })}



    </section>

    <nav className="pagination">
        <span className="pagination__page pagination__page--current">1</span>
        <a to="#" className="pagination__page">2</a>
        <a to="#" className="pagination__page">3</a>
        <a to="#" className="pagination__page">4</a>
        <a to="#" className="pagination__page pagination__icon pagination__page--next"><i className="ui-arrow-right"></i></a>
    </nav>

</div>

<aside className="col-lg-4 sidebar sidebar--1 sidebar--right">

    <aside className="widget widget_media_image">
        <a to="#">
            <img src="img/content/placeholder_336.jpg" alt="" />
        </a>
    </aside>



    <aside className="widget widget-rating-posts">
        <h4 className="widget-title">Recommended</h4>

        {data && data?.map((products) => {
            const { image, title, price } = products
            return (
                <>
                    <article className="entry">
                        <div className="entry__img-holder">
                            <a to="/single-product">
                                <div className="thumb-container thumb-60">
                                    <img data-src={image} src={image} className="entry__img lazyload" alt="" />
                                </div>
                            </a>
                        </div>

                        <div className="entry__body">
                            <div className="entry__header">

                                <h2 className="entry__title">
                                    <a to="/single-product">{title}</a>
                                </h2>
                                <ul className="entry__meta">
                                    <li className="entry__meta-author">
                                        <a to="#">{price}$</a>
                                    </li>
                                    <li className="entry__meta-date">
                                        Jan 21, 2018
                                    </li>
                                </ul>
                                <ul className="entry__meta">
                                    <li className="entry__meta-rating">
                                        <i className="ui-star"></i>
                                        <i className="ui-star"></i>
                                        <i className="ui-star"></i>
                                        <i className="ui-star"></i>
                                        <i className="ui-star-empty"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </>
            )
        })}


    </aside>
</aside>
</div>
        </>
    )
}
export default RecommendedProduct