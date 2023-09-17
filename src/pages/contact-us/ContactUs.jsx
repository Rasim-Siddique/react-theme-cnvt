


const ContactUs=()=>{
    return(
        <>
   


<main className="main oh" id="main">


    

<div className="container">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a href="index.html" className="breadcrumbs__url">Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a href="index.html" className="breadcrumbs__url">News</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--current">
      World
    </li>
  </ul>
</div>

<div className="main-container container" id="main-container">            
  <div className="blog__content mb-72">
    <h1 className="page-title">Contact Us</h1>
    
    <div id="google-map" className="gmap" data-address="V Tytana St, Manila, Philippines"></div>

    <div className="row justify-content-center">
      <div className="col-lg-8">
        <h4>Drop Us a Message</h4>
        <p>Dont hesitate to get in touch. We will reply you as soon as possible.</p>
        <ul className="contact-items">
          <li className="contact-item"><address>Centre Inc. CA 48792 Star Apple ave. 54</address></li>
          <li className="contact-item"><a href="tel:+1-800-1554-456-123">+ 1 (800) 155 4561</a></li>
          <li className="contact-item"><a href="mailto:themesupport@gmail.com">themesupport@gmail.com</a></li>
        </ul>            

        <form id="contact-form" className="contact-form mt-30 mb-30" method="post" action="#">
          <div className="contact-name">
            <label htmlFor="name">Name <abbr title="required" className="required">*</abbr></label>
            <input name="name" id="name" type="text" />
          </div>
          <div className="contact-email">
            <label htmlFor="email">Email <abbr title="required" className="required">*</abbr></label>
            <input name="email" id="email" type="email" />
          </div>
          <div className="contact-subject">
            <label htmlFor="email">Subject</label>
            <input name="subject" id="subject" type="text" />
          </div>
          <div className="contact-message">
            <label htmlFor="message">Message <abbr title="required" className="required">*</abbr></label>
            <textarea id="message" name="message" rows="7" required="required"></textarea>
          </div>

          <input type="submit" className="btn btn-lg btn-color btn-button" value="Send Message" id="submit-message" />
          <div id="msg" className="message"></div>
        </form>

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

export default ContactUs