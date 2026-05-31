"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, AlertCircle, Loader2, Sparkles, ChevronDown } from "lucide-react";

// Complete global dial codes mapping for all countries in the select dropdown
const COUNTRY_DIAL_CODES: Record<string, string> = {
  "Afghanistan": "+93 ",
  "Albania": "+355 ",
  "Algeria": "+213 ",
  "Andorra": "+376 ",
  "Angola": "+244 ",
  "Antigua and Barbuda": "+1-268 ",
  "Argentina": "+54 ",
  "Armenia": "+374 ",
  "Australia": "+61 ",
  "Austria": "+43 ",
  "Azerbaijan": "+994 ",
  "Bahamas": "+1-242 ",
  "Bahrain": "+973 ",
  "Bangladesh": "+880 ",
  "Barbados": "+1-246 ",
  "Belarus": "+375 ",
  "Belgium": "+32 ",
  "Belize": "+501 ",
  "Benin": "+229 ",
  "Bhutan": "+975 ",
  "Bolivia": "+591 ",
  "Bosnia and Herzegovina": "+387 ",
  "Botswana": "+267 ",
  "Brazil": "+55 ",
  "Brunei": "+673 ",
  "Bulgaria": "+359 ",
  "Burkina Faso": "+226 ",
  "Burundi": "+257 ",
  "Cabo Verde": "+238 ",
  "Cambodia": "+855 ",
  "Cameroon": "+237 ",
  "Canada": "+1 ",
  "Central African Republic": "+236 ",
  "Chad": "+235 ",
  "Chile": "+56 ",
  "China": "+86 ",
  "Colombia": "+57 ",
  "Comoros": "+269 ",
  "Congo, Democratic Republic of the": "+243 ",
  "Congo, Republic of the": "+242 ",
  "Costa Rica": "+506 ",
  "Côte d'Ivoire": "+225 ",
  "Croatia": "+385 ",
  "Cuba": "+53 ",
  "Cyprus": "+357 ",
  "Czechia": "+420 ",
  "Denmark": "+45 ",
  "Djibouti": "+253 ",
  "Dominica": "+1-767 ",
  "Dominican Republic": "+1-809 ",
  "Ecuador": "+593 ",
  "Egypt": "+20 ",
  "El Salvador": "+503 ",
  "Equatorial Guinea": "+240 ",
  "Eritrea": "+291 ",
  "Estonia": "+372 ",
  "Eswatini": "+268 ",
  "Ethiopia": "+251 ",
  "Fiji": "+679 ",
  "Finland": "+358 ",
  "France": "+33 ",
  "Gabon": "+241 ",
  "Gambia": "+220 ",
  "Georgia": "+995 ",
  "Germany": "+49 ",
  "Ghana": "+233 ",
  "Greece": "+30 ",
  "Grenada": "+1-473 ",
  "Guatemala": "+502 ",
  "Guinea": "+224 ",
  "Guinea-Bissau": "+245 ",
  "Guyana": "+592 ",
  "Haiti": "+509 ",
  "Holy See": "+379 ",
  "Honduras": "+504 ",
  "Hungary": "+36 ",
  "Iceland": "+354 ",
  "India": "+91 ",
  "Indonesia": "+62 ",
  "Iran": "+98 ",
  "Iraq": "+964 ",
  "Ireland": "+353 ",
  "Israel": "+972 ",
  "Italy": "+39 ",
  "Jamaica": "+1-876 ",
  "Japan": "+81 ",
  "Jordan": "+962 ",
  "Kazakhstan": "+7 ",
  "Kenya": "+254 ",
  "Kiribati": "+686 ",
  "Kuwait": "+965 ",
  "Kyrgyzstan": "+996 ",
  "Laos": "+856 ",
  "Latvia": "+371 ",
  "Lebanon": "+961 ",
  "Lesotho": "+266 ",
  "Liberia": "+231 ",
  "Libya": "+218 ",
  "Liechtenstein": "+423 ",
  "Lithuania": "+370 ",
  "Luxembourg": "+352 ",
  "Madagascar": "+261 ",
  "Malawi": "+265 ",
  "Malaysia": "+60 ",
  "Maldives": "+960 ",
  "Mali": "+223 ",
  "Malta": "+356 ",
  "Marshall Islands": "+692 ",
  "Mauritania": "+222 ",
  "Mauritius": "+230 ",
  "Mexico": "+52 ",
  "Micronesia": "+691 ",
  "Moldova": "+373 ",
  "Monaco": "+377 ",
  "Mongolia": "+976 ",
  "Montenegro": "+382 ",
  "Morocco": "+212 ",
  "Mozambique": "+258 ",
  "Myanmar": "+95 ",
  "Namibia": "+264 ",
  "Nauru": "+674 ",
  "Nepal": "+977 ",
  "Netherlands": "+31 ",
  "New Zealand": "+64 ",
  "Nicaragua": "+505 ",
  "Niger": "+227 ",
  "Nigeria": "+234 ",
  "North Korea": "+850 ",
  "North Macedonia": "+389 ",
  "Norway": "+47 ",
  "Oman": "+968 ",
  "Pakistan": "+92 ",
  "Palau": "+680 ",
  "Palestine State": "+970 ",
  "Panama": "+507 ",
  "Papua New Guinea": "+675 ",
  "Paraguay": "+595 ",
  "Peru": "+51 ",
  "Philippines": "+63 ",
  "Poland": "+48 ",
  "Portugal": "+351 ",
  "Qatar": "+974 ",
  "Romania": "+40 ",
  "Russia": "+7 ",
  "Rwanda": "+250 ",
  "Saint Kitts and Nevis": "+1-869 ",
  "Saint Lucia": "+1-758 ",
  "Saint Vincent and the Grenadines": "+1-784 ",
  "Samoa": "+685 ",
  "San Marino": "+378 ",
  "Sao Tome and Principe": "+239 ",
  "Saudi Arabia": "+966 ",
  "Senegal": "+221 ",
  "Serbia": "+381 ",
  "Seychelles": "+248 ",
  "Sierra Leone": "+232 ",
  "Singapore": "+65 ",
  "Slovakia": "+421 ",
  "Slovenia": "+386 ",
  "Solomon Islands": "+677 ",
  "Somalia": "+252 ",
  "South Africa": "+27 ",
  "South Korea": "+82 ",
  "South Sudan": "+211 ",
  "Spain": "+34 ",
  "Sri Lanka": "+94 ",
  "Sudan": "+249 ",
  "Suriname": "+597 ",
  "Sweden": "+46 ",
  "Switzerland": "+41 ",
  "Syria": "+963 ",
  "Tajikistan": "+992 ",
  "Tanzania": "+255 ",
  "Thailand": "+66 ",
  "Timor-Leste": "+670 ",
  "Togo": "+228 ",
  "Tonga": "+676 ",
  "Trinidad and Tobago": "+1-868 ",
  "Tunisia": "+216 ",
  "Turkey": "+90 ",
  "Turkmenistan": "+993 ",
  "Tuvalu": "+688 ",
  "Uganda": "+256 ",
  "Ukraine": "+380 ",
  "United Arab Emirates": "+971 ",
  "United Kingdom": "+44 ",
  "United States of America": "+1 ",
  "Uruguay": "+598 ",
  "Uzbekistan": "+998 ",
  "Vanuatu": "+678 ",
  "Venezuela": "+58 ",
  "Vietnam": "+84 ",
  "Yemen": "+967 ",
  "Zambia": "+260 ",
  "Zimbabwe": "+263 "
};

export default function FacilitatorForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_no: "",
    gyan_age: "",
    profession: "",
    country: "",
    centre_incharge_name: "",
    centre_email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let updatedFormData = { ...formData, [name]: value };

    // Autopopulate country dial code if country changes
    if (name === "country" && value) {
      const dialCode = COUNTRY_DIAL_CODES[value];
      if (dialCode) {
        const currentPhone = formData.phone_no.trim();
        
        // If there was already a phone number starting with '+', swap the prefix intelligently
        if (currentPhone.startsWith("+")) {
          // Find the space separating code and actual number
          const spaceIdx = currentPhone.indexOf(" ");
          if (spaceIdx !== -1) {
            const actualNumber = currentPhone.slice(spaceIdx + 1);
            updatedFormData.phone_no = dialCode + actualNumber;
          } else {
            updatedFormData.phone_no = dialCode;
          }
        } else {
          // Prepend the dial code directly
          updatedFormData.phone_no = dialCode + currentPhone;
        }
      }
    }

    setFormData(updatedFormData);
  };

  // Validates step 1 before proceeding
  const handleNext = () => {
    setError(null);
    if (!formData.full_name.trim()) {
      setError("Full Name is required.");
      return;
    }
    if (!formData.email.trim()) {
      setError("Email Address is required.");
      return;
    }
    if (!formData.country) {
      setError("Please select your Country first.");
      return;
    }
    if (!formData.phone_no.trim() || formData.phone_no.trim() === "+" || formData.phone_no.trim() === COUNTRY_DIAL_CODES[formData.country]?.trim()) {
      setError("Please enter a valid Phone Number after the country code prefix.");
      return;
    }
    setStep(2);
  };

  const handleBack = () => {
    setError(null);
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Final Validation
    if (!formData.gyan_age.trim() || !formData.profession.trim() || !formData.centre_incharge_name.trim()) {
      setError("Please fill out all required fields in Step 2.");
      setLoading(false);
      return;
    }

    try {
      const { error: submitError } = await supabase
        .from("facilitators")
        .insert([formData]);

      if (submitError) throw submitError;
      setSubmitted(true);
    } catch (err) {
      const error = err as Error;
      console.error("Submission error:", err);
      setError(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Submission Success Card Redesign
  if (submitted) {
    const portalHref = `/portal/register?email=${encodeURIComponent(formData.email)}&full_name=${encodeURIComponent(formData.full_name)}`;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="p-10 md:p-12 bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-[0_32px_64px_-16px_rgba(27,67,61,0.06)] max-w-xl mx-auto text-center space-y-6"
      >
        <div className="relative group mx-auto w-20">
          <div className="absolute inset-0 bg-teal-500/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500" />
          <div className="relative w-20 h-20 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 size={40} aria-hidden />
          </div>
        </div>
        
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-text-main font-sans">
            Application Received
          </h2>
          <p className="text-text-muted text-sm leading-relaxed">
            Your facilitator details have been successfully saved. As a final step, please{" "}
            <strong className="text-text-main font-semibold">
              create your facilitator login with the same email
            </strong>{" "}
            so you can sign in to the portal and manage events.
          </p>
        </div>

        <div className="flex flex-col gap-3 justify-center items-stretch pt-2">
          <Link
            href={portalHref}
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold py-4 px-6 shadow-lg shadow-teal-600/15 hover:shadow-xl hover:shadow-teal-600/20 transition-all duration-300 active:scale-[0.98]"
          >
            <span>Create facilitator login</span>
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" aria-hidden />
          </Link>
          <Link
            href="/portal/login"
            className="inline-flex items-center justify-center rounded-2xl border border-teal-100 bg-teal-50/50 hover:bg-teal-50 px-6 py-4 text-sm font-semibold text-teal-800 transition-colors"
          >
            Already have a login? Sign in
          </Link>
        </div>

        <p className="text-[11px] text-text-muted/70 leading-relaxed max-w-sm mx-auto">
          If your email is already registered in our core-team roster, you will get access automatically.
        </p>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setFormData({
                full_name: "",
                email: "",
                phone_no: "",
                gyan_age: "",
                profession: "",
                country: "",
                centre_incharge_name: "",
                centre_email: "",
              });
              setStep(1);
              setSubmitted(false);
            }}
            className="text-sm text-teal-700 font-bold hover:text-teal-800 hover:underline transition-colors"
          >
            Submit another application
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/60 shadow-[0_32px_64px_-16px_rgba(27,67,61,0.05)]">
      
      {/* Dynamic Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-teal-800 mb-2 px-1">
          <span>{step === 1 ? "Step 1: Contact Details" : "Step 2: Spiritual & Center Profile"}</span>
          <span className="text-text-muted">{step} of 2</span>
        </div>
        <div className="w-full h-2 bg-teal-50/70 border border-teal-100/30 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "50%" }}
            animate={{ width: step === 1 ? "50%" : "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-teal-600 to-teal-500 rounded-full"
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="full_name" className="block text-xs font-semibold text-text-muted uppercase tracking-wider pl-1">
                  Full Name <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="full_name"
                  required
                  type="text"
                  name="full_name"
                  placeholder="Enter your full name"
                  value={formData.full_name}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-white border border-teal-100/90 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all duration-200 outline-none placeholder:text-text-muted/30 text-text-main"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-semibold text-text-muted uppercase tracking-wider pl-1">
                  Email Address <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-white border border-teal-100/90 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all duration-200 outline-none placeholder:text-text-muted/30 text-text-main"
                />
              </div>

              {/* Country (Moved to Step 1 for country-code autopopulate) */}
              <div className="space-y-2">
                <label htmlFor="country" className="block text-xs font-semibold text-text-muted uppercase tracking-wider pl-1">
                  Country <span className="text-red-500 font-bold">*</span>
                </label>
                <div className="relative">
                  <select
                    id="country"
                    required
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-white border border-teal-100/90 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all duration-200 outline-none appearance-none cursor-pointer text-text-main pr-10"
                  >
                    <option value="">Select a country</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Brunei">Brunei</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cabo Verde">Cabo Verde</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Central African Republic">Central African Republic</option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
                    <option value="Congo, Republic of the">Congo, Republic of the</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Côte d'Ivoire">Côte d&rsquo;Ivoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czechia">Czechia</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">Dominican Republic</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Eswatini">Eswatini</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Greece">Greece</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Holy See">Holy See</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran">Iran</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Laos">Laos</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia">Micronesia</option>
                    <option value="Moldova">Moldova</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="North Korea">North Korea</option>
                    <option value="North Macedonia">North Macedonia</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestine State">Palestine State</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Romania">Romania</option>
                    <option value="Russia">Russia</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Korea">South Korea</option>
                    <option value="South Sudan">South Sudan</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria">Syria</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Timor-Leste">Timor-Leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States of America">United States of America</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 text-teal-800">
                    <ChevronDown size={18} />
                  </div>
                </div>
              </div>

              {/* Phone No */}
              <div className="space-y-2">
                <label htmlFor="phone_no" className="block text-xs font-semibold text-text-muted uppercase tracking-wider pl-1">
                  Phone Number <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="phone_no"
                  required
                  type="tel"
                  name="phone_no"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone_no}
                  onChange={handleChange}
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    // Allow numbers, spaces, plus, and dashes
                    target.value = target.value.replace(/[^0-9+\s-]/g, '');
                  }}
                  pattern="[\+]?[0-9\s-]{8,}"
                  className="w-full px-5 py-3.5 bg-white border border-teal-100/90 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none placeholder:text-text-muted/30 text-text-main font-semibold tracking-wide"
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {/* Profession */}
              <div className="space-y-2">
                <label htmlFor="profession" className="block text-xs font-semibold text-text-muted uppercase tracking-wider pl-1">
                  Profession / Occupation <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="profession"
                  required
                  type="text"
                  name="profession"
                  placeholder="e.g., Designer, Student, Teacher"
                  value={formData.profession}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-white border border-teal-100/90 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all duration-200 outline-none placeholder:text-text-muted/30 text-text-main"
                />
              </div>

              {/* Gyan Age */}
              <div className="space-y-2">
                <label htmlFor="gyan_age" className="block text-xs font-semibold text-text-muted uppercase tracking-wider pl-1">
                  Gyan Age (Years) <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="gyan_age"
                  required
                  type="text"
                  name="gyan_age"
                  placeholder="e.g., 5 years"
                  value={formData.gyan_age}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-white border border-teal-100/90 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all duration-200 outline-none placeholder:text-text-muted/30 text-text-main"
                />
              </div>

              {/* Centre Incharge Name */}
              <div className="space-y-2">
                <label htmlFor="centre_incharge_name" className="block text-xs font-semibold text-text-muted uppercase tracking-wider pl-1">
                  Local Centre Incharge <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="centre_incharge_name"
                  required
                  type="text"
                  name="centre_incharge_name"
                  placeholder="e.g., Sister BK Jayanti"
                  value={formData.centre_incharge_name}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-white border border-teal-100/90 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all duration-200 outline-none placeholder:text-text-muted/30 text-text-main"
                />
              </div>

              {/* Centre Email */}
              <div className="space-y-2">
                <label htmlFor="centre_email" className="block text-xs font-semibold text-text-muted uppercase tracking-wider pl-1">
                  Centre Email Address
                </label>
                <input
                  id="centre_email"
                  type="email"
                  name="centre_email"
                  placeholder="centre@brahmakumaris.org"
                  value={formData.centre_email}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-white border border-teal-100/90 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all duration-200 outline-none placeholder:text-text-muted/30 text-text-main"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Error Banner */}
        <div className="pt-2">
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 bg-red-50/80 text-red-700 rounded-2xl flex items-center gap-3 border border-red-100 text-sm text-left leading-relaxed animate-pulse"
              >
                <AlertCircle size={20} className="shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigations Buttons */}
        <div className="pt-4 flex gap-4">
          {step === 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="group w-full py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-teal-600/15 hover:shadow-xl hover:shadow-teal-600/20 active:scale-[0.99] cursor-pointer"
            >
              <span>Next Step</span>
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={handleBack}
                className="w-1/3 py-4 border border-teal-100 bg-teal-50/30 hover:bg-teal-50 text-teal-800 font-semibold rounded-2xl transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
              <button
                type="submit"
                disabled={loading}
                className="group w-2/3 py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-teal-600/15 hover:shadow-xl hover:shadow-teal-600/20 active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : null}
                <span>{loading ? "Submitting..." : "Join the Journey"}</span>
                {!loading ? <Sparkles size={18} className="group-hover:scale-110 transition-transform" /> : null}
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
