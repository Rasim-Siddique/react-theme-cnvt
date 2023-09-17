const Footer=()=>{
    return(
        <>
        
        <footer className="footer footer--dark">
          <div className="container">
            <div className="footer__widgets">
              <div className="row">

                <div className="col-lg-3 col-md-6">
                  <aside className="widget widget-logo">
                    <a href="index.html">
                      <img src="../src/assets/img/logo_default_white.png" srcSet="../src/assets/img/logo_default_white.png 1x, img/logo_default_white@2x.png 2x" className="logo__img" alt="" />
                    </a>
                    <p className="copyright">
                      © 2018 Deus | Made by <a href="https://deothemes.com">DeoThemes</a>
                    </p>
                    <div className="socials socials--large socials--rounded mb-24">
                      <a href="#" className="social social-facebook" aria-label="facebook"><i className="ui-facebook"></i></a>
                      <a href="#" className="social social-twitter" aria-label="twitter"><i className="ui-twitter"></i></a>
                      <a href="#" className="social social-google-plus" aria-label="google+"><i className="ui-google"></i></a>
                      <a href="#" className="social social-youtube" aria-label="youtube"><i className="ui-youtube"></i></a>
                      <a href="#" className="social social-instagram" aria-label="instagram"><i className="ui-instagram"></i></a>
                    </div>
                  </aside>
                </div>

                <div className="col-lg-2 col-md-6">
                  <aside className="widget widget_nav_menu">
                    <h4 className="widget-title">Useful Links</h4>
                    <ul>
                      <li><a href="about.html">About</a></li>
                      <li><a href="contact.html">News</a></li>
                      <li><a href="categories.html">Advertise</a></li>
                      <li><a href="shortcodes.html">Support</a></li>
                      <li><a href="shortcodes.html">Features</a></li>
                      <li><a href="shortcodes.html">Contact</a></li>
                    </ul>
                  </aside>
                </div>

                <div className="col-lg-4 col-md-6">
                  <aside className="widget widget-popular-posts">
                    <h4 className="widget-title">Popular Posts</h4>
                    <ul className="post-list-small">
                      <li className="post-list-small__item">
                        <article className="post-list-small__entry clearfix">
                          <div className="post-list-small__img-holder">
                            <div className="thumb-container thumb-100">
                              <a href="single-post.html">
                                <img data-src="../src/assets/img/content/post_small/post_small_1.jpg" src="../src/assets/img/empty.png" alt="" className="post-list-small__img--rounded lazyload" />
                              </a>
                            </div>
                          </div>
                          <div className="post-list-small__body">
                            <h3 className="post-list-small__entry-title">
                              <a href="single-post.html">Follow These Smartphone Habits of Successful Entrepreneurs</a>
                            </h3>
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
                      </li>
                      <li className="post-list-small__item">
                        <article className="post-list-small__entry clearfix">
                          <div className="post-list-small__img-holder">
                            <div className="thumb-container thumb-100">
                              <a href="single-post.html">
                                <img data-src="../src/assets/img/content/post_small/post_small_2.jpg" src="../src/assets/img/empty.png" alt="" className="post-list-small__img--rounded lazyload" />
                              </a>
                            </div>
                          </div>
                          <div className="post-list-small__body">
                            <h3 className="post-list-small__entry-title">
                              <a href="single-post.html">Lose These 12 Bad Habits If  Serious About Becoming a Millionaire</a>
                            </h3>
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
                      </li>
                    </ul>
                  </aside>
                </div>

                <div className="col-lg-3 col-md-6">
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
                </div>

              </div>
            </div>
          </div>
        </footer>
        </>
    )
}
export default Footer