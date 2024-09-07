import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const NepalStates = [
  "Province No. 1",
  "Province No. 2",
  "Bagmati Province",
  "Gandaki Province",
  "Lumbini Province",
  "Karnali Province",
  "Sudurpashchim Province",
];

const SignUpTo = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    organizationAffiliation: "",
    role: "",
    phoneNumber: "",
    dob: "",
    referral: "",
    acceptTerms: false,
    robotCheck: false,
    captchaVerified: false,
    agreedToTerms: false,
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation or submission logic here
    console.log("Form submitted", formData);
  };

  const onCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 flex items-center justify-center min-h-screen overflow-auto ">
      <section className="mt-6 mb-16" >
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="text-xl font-bold leading-tight text-gray-900 dark:text-white">
              Become a member
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Country Of Residence */}
              <div>
                <label
                  htmlFor="CountryResidence"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Country Of Residence
                </label>
                <select
                  id="CountryResidence"
                  name="CountryResidence"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  value={formData.CountryResidence}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Country</option>
                  <option value="nepal">Nepal</option>
                  <option value="international">International</option>
                </select>
              </div>

              {/* Organization Affiliation */}
              <div>
                <label
                  htmlFor="organizationAffiliation"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Organization Affiliation Type
                </label>
                <select
                  id="organizationAffiliation"
                  name="organizationAffiliation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  value={formData.organizationAffiliation}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Affiliation</option>
                  <option value="1">
                    No relevant affiliation - I'm registering as a public
                    member.
                  </option>
                  <option value="2">
                    Sports Club (including community and professional clubs)
                  </option>
                  <option value="3">
                    State / territory peak sporting organization (SSO)
                  </option>
                  <option value="4">
                    National peak sporting organization (NSO)
                  </option>
                  <option value="5">
                    National, State / territory or regional institute or academy
                    of sport
                  </option>
                  <option value="6">Local government or Council agency</option>
                  <option value="7">State / territory government agency</option>
                  <option value="8">Federal government agency</option>
                  <option value="9">Educational Institution</option>
                  <option value="10">
                    Media / news reporting organization
                  </option>
                  <option value="11">
                    Not-for-profit non-government organization(NGO)
                  </option>
                  <option value="12">Commercial for-profit organization</option>
                  <option value="13">Others(Please Specify)</option>
                </select>
              </div>

              {/* Role */}
              <div>
                <label
                  htmlFor="role"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="athelete">Athlete</option>
                  <option value="coach">
                    Coach / physical educator / fitness instructor
                  </option>
                  <option value="offical">
                    Sporting officaial Refree / Umpire
                  </option>
                  <option value="administrator">
                    Administration / operation / Strategy
                  </option>
                  <option value="board">
                    Executive leadership / Board member
                  </option>
                  <option value="researcher">Researcher / Analyst</option>
                  <option value="media">
                    Media / journalist / Communications
                  </option>
                  <option value="marketing">Marketing / sponsorship</option>
                  <option value="teacher">Teacher / Lecturer</option>
                  <option value="student">Student</option>
                  <option value="military">Military / Emergency Service</option>
                  <option value="other">Other -Please Specify</option>
                </select>
              </div>

              {/* Contact Details */}
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                Contact Details
              </div>

              {/* Postal Address */}
              <div>
                <label
                  htmlFor="postalAddress"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Postal Address
                </label>
                <input
                  type="text"
                  name="postalAddress"
                  id="postalAddress"
                  placeholder="Enter your postal address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  value={formData.postalAddress}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Same as Residential Address */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="sameAsResidential"
                    name="sameAsResidential"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600"
                    checked={formData.sameAsResidential}
                    onChange={handleChange}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="sameAsResidential"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    Same as Residential Address
                  </label>
                </div>
              </div>

              {/* Nepal State */}
              <div>
                <label
                  htmlFor="nepalState"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nepalese State
                </label>
                <select
                  id="nepalState"
                  name="nepalState"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  value={formData.nepalState}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select State</option>
                  {NepalStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              {/* Residential Address */}
              <div>
                <label
                  htmlFor="residentialAddress"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Residential Address
                </label>
                <input
                  type="text"
                  name="residentialAddress"
                  id="residentialAddress"
                  placeholder="Enter your residental address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  value={formData.residentialAddress}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Postal Code */}
              <div>
                <label
                  htmlFor="postalcode"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Postal Code
                </label>
                <input
                  type="number"
                  name="postalcode"
                  id="postalcode"
                  placeholder="Enter your Postal Code"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  value={formData.postalcode}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Country */}
              <div>
                <label
                  htmlFor="country"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Country</option>
                  {NepalStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="+1 (555) 123-4567"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label
                  htmlFor="mobileNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  id="mobileNumber"
                  placeholder="+1 (555) 123-4567"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Referral */}
              <div>
                <label
                  htmlFor="referral"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  How did you know about this?
                </label>
                <select
                  id="referral"
                  name="referral"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  value={formData.referral}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Source</option>
                  <option value="socialMedia">Social Media</option>
                  <option value="friends">Friends</option>
                  <option value="searchEngine">Search Engine</option>
                  <option value="advertisement">Advertisement</option>
                </select>
              </div>

              {/* Personal Details */}
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                Personal Details
              </div>

              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Enter your full name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label
                  htmlFor="dob"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>


              {/* Terms and Conditions */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="acceptTerms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:ring-offset-gray-800"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              {/* By agreeing to the terms and conditions, you are also agreeing to the Google reCAPTCHA Terms of Service and Privacy Policy. */}
              <div className="text-sm text-gray-500 dark:text-gray-300">
                By agreeing to the terms and conditions, you are also agreeing
                to the{" "}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                >
                  Google reCAPTCHA Terms of Service
                </a>{" "}
                and{" "}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                >
                  Privacy Policy
                </a>
                .
              </div>

              {/* Google reCAPTCHA */}
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Replace with your site key from Google reCAPTCHA
                onChange={onCaptchaChange}
              />

              {/* Submit Button */}
              <div>
                <Link to="/">
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Register
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUpTo;
