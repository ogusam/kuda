import {Formik} from 'formik';



const AuthBox = () => {
    return(
      
     
        <Formik
        initialValues={{
          firstname:'',
          lastname:'',
          email:'',
          country:'',
          state:'',
          zip:''
        }}
        onSubmit={()=>{
          console.log('Form submitted')
        }}
      >
        { ({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting
       })=> (
          <div className="container">
              <div className="col-md-12 mt-5">
              <form onSubmit={handleSubmit}>
                <h4 className="mb-3">Personal information</h4>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstname">First name</label>
                    <input 
                      type="text" 
                      className="form-control"
                      id="firstname" 
                      name="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastname">Last name</label>
                    <input type="text" className="form-control" id="lastname" name="lastname"/>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="you@example.com"/>
                </div>


                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="country">Country</label>
                    <select className="custom-select d-block w-100" id="country" name="country">
                      <option value="">Choose...</option>
                      <option value="US">Nigeria</option>
                      <option value="CA">Ghana</option>
                      <option value="NL">Cameroun</option>
                    </select>

                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state">State</label>
                    <select className="custom-select d-block w-100" id="state" name="state">
                      <option value="">Choose...</option>
                      <option value=""></option>
                      <option value="toronto">Imo</option>
                      <option value="utrech">Abia</option>
                    </select>

                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">Zip</label>
                    <input type="text" className="form-control" id="zip" name="zip"/>
                  </div>
                </div>

                <hr className="mb-4"/>
                <button className="btn btn-primary btn-lg btn-block" type="submit">
                  Submit
                </button>
              </form>
              </div>
            </div>
       )}
            </Formik>
  )};
  
  export default AuthBox;
