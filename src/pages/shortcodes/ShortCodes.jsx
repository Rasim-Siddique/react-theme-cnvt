const ShortCodes=()=>{
    return(
        <>
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
        <h1 className="page-title">Shortcodes</h1>      
        
        <div className="row section-buttons mt-40">
          <div className="col-md-4">
            <div>
              <a href="#" className="btn btn-sm btn-color">
                <span>Small Button</span>
              </a>
            </div>
            <div>
              <a href="#" className="btn btn-lg btn-color">
                <span>Large Button</span>
              </a>
            </div>              
          </div>
          <div className="col-md-4">
            <div>
              <a href="#" className="btn btn-sm btn-dark">
                <span>Small Button</span>
              </a>
            </div>
            <div>
              <a href="#" className="btn btn-lg btn-dark">
                <span>Large Button</span>
              </a>
            </div>              
          </div>
          <div className="col-md-4">
            <div>
              <a href="#" className="btn btn-sm btn-light">
                <span>Small Button</span>
              </a>
            </div>
            <div>
              <a href="#" className="btn btn-lg btn-light">
                <span>Large Button</span>
              </a>
            </div>              
          </div>
        </div>        

        <div className="title-wrap">
          <h3>Form Elements</h3>
        </div>

        <div className="row mb-30">
          <div className="col-md-6">

            <input name="text" type="text" placeholder="Input with placeholder" /> 
            <input name="password" id="password" type="password" placeholder="Password input" />
            <textarea placeholder="Textarea" rows="3"></textarea>

            <label htmlFor="input-label">Input With Label</label>
            <input name="name" id="input-label" type="text" />

          </div> 

          <div className="col-md-6">

            <select>
              <option selected="" value="default">Select an option</option>
              <option value="green">Green</option>
              <option value="black">Black</option>
              <option value="white">White</option>
            </select>

            <div className="row mt-30">

              <div className="col-md-6 mb-30">
                <h6>Radio Buttons</h6>
                <ul className="radio">
                  <li>
                    <input type="radio" className="radio-unput" name="radio" id="radio1" value="radio1" checked="checked" />
                    <label htmlFor="radio1">Radio 1</label>
                  </li>
                  <li>
                    <input type="radio" className="radio-unput" name="radio" id="radio2" value="radio2" />
                    <label htmlFor="radio2">Radio 2</label>
                  </li>
                  <li>
                    <input type="radio" className="radio-unput" name="radio" id="radio3" value="radio3" />
                    <label htmlFor="radio3">Radio 2</label>
                  </li>
                </ul>
              </div>

              <div className="col-md-6 mb-30">
                <h6>Checkboxes</h6>
                <ul className="checkbox">
                  <li>
                    <input type="checkbox" className="checkbox-input" name="checkbox" id="checkbox1" value="1" checked="checked" />
                    <label htmlFor="checkbox1">Checkbox 1</label>
                  </li>
                  <li>
                    <input type="checkbox" className="checkbox-input" name="checkbox" id="checkbox2" value="2" />
                    <label htmlFor="checkbox2">Checkbox 2</label>
                  </li>
                  <li>
                    <input type="checkbox" className="checkbox-input" name="checkbox" id="checkbox3" value="3" />
                    <label htmlFor="checkbox3">Checkbox 3</label>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <div className="title-wrap">
          <h3>Tabs</h3>
        </div>
        <div className="row mb-50">
          <div className="col-lg-8">
            <div className="tabs"> 
              <ul className="tabs__list">
                <li className="tabs__item tabs__item--active">
                  <a href="#tab-1" className="tabs__url tabs__trigger">Flexible</a>
                </li>
                <li className="tabs__item">
                  <a href="#tab-2" className="tabs__url tabs__trigger">WordPress</a>
                </li>
                <li className="tabs__item">
                  <a href="#tab-3" className="tabs__url tabs__trigger">Theme</a>
                </li>
              </ul> 
            </div>
            <div className="tabs__content tabs__content-trigger">             
              <div className="tabs__content-pane tabs__content-pane--active" id="tab-1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officia obcaecati, nostrum error odio illum, id quisquam assumenda quo eos.</p>
              </div>
              <div className="tabs__content-pane" id="tab-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officia obcaecati, nostrum error odio illum, id quisquam assumenda quo eos.</p>
              </div>
              <div className="tabs__content-pane" id="tab-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officia obcaecati, nostrum error odio illum, id quisquam assumenda quo eos.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div> 

        </>
    )
}

export default ShortCodes