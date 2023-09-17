const ErrorPage = () => {
    return (
        <>



            <main className="main oh" id="main">






                <div className="main-container container pt-80 pb-80" id="main-container">
                    <div className="blog__content mb-72">
                        <div className="container text-center">
                            <h1 className="page-404-number">404</h1>
                            <h2>Page not found</h2>
                            <p>Dont fret! Lets get you back on track. Perhaps searching can help</p>

                            <div className="row justify-content-center mt-40">

                                <div className="col-md-6">
                                    <form role="search" method="get" className="search-form relative">
                                        <input type="search" className="widget-search-input mb-0" placeholder="Search an article" />
                                        <button type="submit" className="widget-search-button btn btn-color"><i className="ui-search widget-search-icon"></i></button>
                                    </form>

                                    <a href="index.html" className="btn btn-lg btn-light mt-40"><span>Back to Home</span></a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


                <div id="back-to-top">
                    <a href="#top" aria-label="Go to top"><i className="ui-arrow-up"></i></a>
                </div>

            </main>
        </>
    )
}
export default ErrorPage