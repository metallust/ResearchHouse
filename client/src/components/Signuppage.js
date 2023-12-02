import React from 'react';

const SignupPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic for form submission here
  };

  return (
    <section className="signup-box custom" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div className="container my-4">
        <div className="row">
          <div className="intro clearfix">
            <div className="offset-md-2 offset-lg-2 col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <form
                className="form-horizontal"
                role="form"
                method="POST"
                action=""
                id="signupForm"
                onSubmit={handleSubmit}
                style={{
                  border: '1px solid #ccc',
                  padding: '20px',
                  borderRadius: '5px',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <h3 style={{ textAlign: 'center', color: '#4285F4' }}>Sign Up</h3>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <input
                    type="text"
                    id="aisheCode"
                    name="aisheCode"
                    placeholder="AISHE Code"
                    className="form-control"
                  />
                </div>
                
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <input
                    type="text"
                    id="collegeName"
                    name="collegeName"
                    placeholder="College Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="State"
                    className="form-control"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <input
                    type="text"
                    id="district"
                    name="district"
                    placeholder="District"
                    className="form-control"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="City"
                    className="form-control"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    className="form-control"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="form-control"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <input
                    type="text"
                    id="iicInstituteCode"
                    name="iicInstituteCode"
                    placeholder="IIC Institute Code"
                    className="form-control"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', color: '#999', fontSize: '14px' }}>Add File (PNG, PDF, JPEG)</span>
                    <input
                      type="file"
                      id="consentLetter"
                      name="consentLetter"
                      accept=".png, .pdf, .jpeg"
                      className="form-control"
                      style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                  </div>
                </div>
                <div className="form-group" style={{ textAlign: 'center' }}>
                  <input
                    type="submit"
                    id="signup-submit"
                    name="op"
                    value="Sign Up"
                    className="btn btn-primary"
                    style={{ backgroundColor: '#4285F4', border: 'none', padding: '10px 30px', marginTop: '15px' }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
