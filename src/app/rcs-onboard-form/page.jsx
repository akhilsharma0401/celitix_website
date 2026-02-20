"use client";

import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

/* ================= TOOLTIP ================= */
const Tooltip = ({ text }) => (
    <span className="relative group ml-1 cursor-pointer text-blue-500">
        ⓘ
        {text && (
            <span className="absolute hidden group-hover:block bg-black text-white text-xs p-2 rounded w-60 z-10 -top-2 left-6 pointer-events-none">
                {text}
            </span>
        )}
    </span>
);

/* ================= HELPERS ================= */
const Section = ({ title, children }) => (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        {children}
    </div>
);

const Field = ({
    name,
    label,
    helper,
    tooltip,
    type = "text",
    form,
    errors,
    handleChange,
    inputStyle,
}) => (
    <div>
        <label className="font-medium text-sm">
            {label}
            {tooltip && <Tooltip text={tooltip} />}
        </label>

        <input
            type={type}
            name={name}
            value={form[name] || ""}
            onChange={handleChange}
            className={inputStyle}
            autoComplete="off"
        />

        {helper && <p className="text-xs text-slate-500 mt-1">{helper}</p>}

        {errors[name] && (
            <p className="text-xs text-red-500">{errors[name]}</p>
        )}
    </div>
);

const UploadCard = ({
    fileKey,
    title,
    helper,
    tooltip,
    files,
    errors,
    handleFileChange,
    handleRemoveFile,
}) => (
    <label className="cursor-pointer rounded-2xl border-2 border-dashed border-blue-300 bg-gradient-to-br from-blue-50 to-white p-6 hover:border-blue-500 hover:shadow-lg transition-all">

        <div className="flex flex-col items-center text-center">

            {/* TITLE */}
            <p className="font-semibold text-slate-800">
                {title} {tooltip && <Tooltip text={tooltip} />}
            </p>

            <p className="text-xs text-slate-500 mt-1">{helper}</p>

            <p className="text-sm text-blue-600 mt-3 font-medium">
                Click to Upload
            </p>

            <input
                type="file"
                hidden
                onChange={(e) =>
                    handleFileChange(fileKey, e.target.files?.[0])
                }
            />

            {/* FILE SELECTED */}
            {files[fileKey] && (
                <div className="flex items-center gap-2 mt-2 bg-green-50 px-3 py-1 rounded-lg">
                    <p className="text-xs text-green-700">
                        {files[fileKey].name}
                    </p>

                    {/* REMOVE ICON */}
                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            handleRemoveFile(fileKey);
                        }}
                        className="text-red-500 hover:text-red-700 text-sm font-bold"
                    >
                        ✕
                    </button>
                </div>
            )}

            {errors[fileKey] && (
                <p className="text-xs text-red-500 mt-1">
                    {errors[fileKey]}
                </p>
            )}
        </div>
    </label>
);



/* ================= MAIN ================= */
export default function Page() {
    const [form, setForm] = useState({
        companyName: "",
        companyEmail: "",
        companyNumber: "",
        website: "",
        authName: "",
        authNumber: "",
        authEmail: "",
        privacy: "",
        terms: "",
        optin: "",
        brandName: "",
        brandDesc: "",
        declaration: false,
    });

    const [files, setFiles] = useState({
        companyLogo: null,
        brandBanner: null,
        panCard: null,
        addressProof: null,
    });

    const [errors, setErrors] = useState({});

    const inputStyle =
        "w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500";

    /* ================= HANDLERS ================= */
    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setForm((p) => ({
            ...p,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleFileChange = (name, file) => {
        if (!file) return;

        const allowed = ["image/png", "image/jpeg", "application/pdf"];
        const maxSize = 5 * 1024 * 1024;

        if (!allowed.includes(file.type)) {
            setErrors((p) => ({ ...p, [name]: "Invalid file type" }));
            return;
        }

        if (file.size > maxSize) {
            setErrors((p) => ({ ...p, [name]: "Max size 5MB" }));
            return;
        }

        setFiles((p) => ({ ...p, [name]: file }));
        setErrors((p) => ({ ...p, [name]: "" }));
    };

    /* ================= VALIDATION ================= */
    const validate = () => {
        const e = {};

        if (!form.companyName.trim()) e.companyName = "Required";
        if (!/\S+@\S+\.\S+/.test(form.companyEmail))
            e.companyEmail = "Valid email required";
        if (!form.companyNumber.trim()) e.companyNumber = "Required";
        if (!/^https?:\/\/.+/i.test(form.website))
            e.website = "Valid URL required";

        if (!form.authName.trim()) e.authName = "Required";
        if (!form.authNumber.trim()) e.authNumber = "Required";
        if (!/\S+@\S+\.\S+/.test(form.authEmail))
            e.authEmail = "Valid email required";

        if (!/^https?:\/\/.+/i.test(form.privacy)) e.privacy = "Required";
        if (!/^https?:\/\/.+/i.test(form.terms)) e.terms = "Required";
        if (!/^https?:\/\/.+/i.test(form.optin)) e.optin = "Required";

        if (!form.brandName.trim()) e.brandName = "Required";
        if (!form.brandDesc.trim()) e.brandDesc = "Required";
        if (form.brandDesc && form.brandDesc.length > 70)
            e.brandDesc = "Max 70 characters";

        if (!files.companyLogo) e.companyLogo = "Required";
        if (!files.brandBanner) e.brandBanner = "Required";
        if (!files.panCard) e.panCard = "Required";
        if (!files.addressProof) e.addressProof = "Required";

        if (!form.declaration) e.declaration = "Required";

        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const submit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        console.log(form, files);
        alert("Submitted 🚀");
    };

    const handleRemoveFile = (key) => {
        setFiles((prev) => ({
            ...prev,
            [key]: null,
        }));

        setErrors((prev) => ({
            ...prev,
            [key]: "",
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50 p-6 pt-25 md:pt-35">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-6">

                <h1 className="text-3xl font-bold text-center mb-8">
                    RCS Brand Registration Form
                </h1>

                <form onSubmit={submit} className="space-y-6">

                    {/* COMPANY */}
                    <Section title="Company Details">
                        <div className="grid md:grid-cols-2 gap-4">
                            <Field name="companyName" label="Company Name"
                                helper="Enter the registered legal name of your company."
                                tooltip="This name must match your official business documents."
                                form={form} errors={errors}
                                handleChange={handleChange}
                                inputStyle={inputStyle}
                            />

                            <Field name="companyEmail" label="Company Email ID"
                                helper="We’ll use this email for onboarding."
                                tooltip="Example: info@domain.com"
                                type="email"
                                form={form} errors={errors}
                                handleChange={handleChange}
                                inputStyle={inputStyle}
                            />

                            <Field name="companyNumber" label="Company Contact Number"
                                helper="Provide active number."
                                tooltip="Include country code."
                                form={form} errors={errors}
                                handleChange={handleChange}
                                inputStyle={inputStyle}
                            />

                            <Field name="website" label="Company Website"
                                helper="Official website URL."
                                tooltip="Example: https://domain.com"
                                form={form} errors={errors}
                                handleChange={handleChange}
                                inputStyle={inputStyle}
                            />
                        </div>
                    </Section>

                    {/* AUTHORIZED */}
                    <Section title="Authorized Person Details">
                        <div className="grid md:grid-cols-3 gap-4">
                            <Field name="authName" label="Authorized Person Name"
                                helper="Authorized manager name."
                                form={form} errors={errors}
                                handleChange={handleChange}
                                inputStyle={inputStyle}
                            />
                            <Field name="authNumber" label="Authorized Person Contact Number"
                                helper="Direct contact."
                                form={form} errors={errors}
                                handleChange={handleChange}
                                inputStyle={inputStyle}
                            />
                            <Field name="authEmail" label="Authorized Person Email ID"
                                type="email"
                                helper="Official email."
                                form={form} errors={errors}
                                handleChange={handleChange}
                                inputStyle={inputStyle}
                            />
                        </div>
                    </Section>

                    {/* BRAND */}
                    <Section title="RCS Brand Information">
                        <div className="grid md:grid-cols-2 gap-4">
                            <Field name="brandName" label="RCS Brand Display Name"
                                helper="Customer visible brand name."
                                form={form} errors={errors}
                                handleChange={handleChange}
                                inputStyle={inputStyle}
                            />
                            <Field name="brandDesc" label="Brand Description"
                                helper="Max 70 characters."
                                form={form} errors={errors}
                                handleChange={handleChange}
                                inputStyle={inputStyle}
                            />
                        </div>
                    </Section>

                    <Section title="Compliance & Policy URLs">
                        <div className="grid md:grid-cols-3 gap-4">
                            <Field name="privacy" label="Privacy Policy URL"
                                helper="Link to your company’s privacy policy page."
                                tooltip="This is mandatory for RCS brand approval."
                                form={form} errors={errors}
                                handleChange={handleChange} inputStyle={inputStyle}
                            />
                            <Field name="terms" label="Terms & Conditions URL"
                                helper="Link to your website’s terms & conditions page."
                                tooltip="Ensure the page is publicly accessible."
                                form={form} errors={errors}
                                handleChange={handleChange} inputStyle={inputStyle}
                            />
                            <Field name="optin" label="Opt-in Form URL"
                                helper="Page where users explicitly opt in to receive messages."
                                tooltip="This helps verify consent compliance."
                                form={form} errors={errors}
                                handleChange={handleChange} inputStyle={inputStyle}
                            />
                        </div>

                        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl mt-4 text-sm text-slate-700">
                            <p className="font-semibold mb-2">
                                NOTE: Opt-in Form Requirements
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>I agree to the Privacy Policy</li>
                                <li>I accept the Terms & Conditions</li>
                                <li>Checkboxes must be pre-unchecked</li>
                                <li>Policies must be clickable hyperlinks</li>
                                <li>Users must review before submitting</li>
                            </ul>
                        </div>
                    </Section>

                    {/* FILES */}
                    <Section title="Document Uploads">
                        <div className="grid md:grid-cols-2 gap-4">

                            <UploadCard
                                fileKey="companyLogo"
                                title="Company Logo"
                                helper="Upload your official brand logo."
                                tooltip="Required size: 224 × 224 pixels (PNG or JPG)."
                                files={files}
                                errors={errors}
                                handleFileChange={handleFileChange}
                                handleRemoveFile={handleRemoveFile}
                            />

                            <UploadCard
                                fileKey="brandBanner"
                                title="Brand Banner"
                                helper="Upload a banner image used in RCS branding."
                                tooltip="Required size: 1440 × 448 pixels."
                                files={files}
                                errors={errors}
                                handleFileChange={handleFileChange}
                                handleRemoveFile={handleRemoveFile}
                            />

                            <UploadCard
                                fileKey="panCard"
                                title="Company PAN Card"
                                helper="Upload a valid PAN card for business verification."
                                tooltip="Accepted formats: PDF, JPG, and PNG."
                                files={files}
                                errors={errors}
                                handleFileChange={handleFileChange}
                                handleRemoveFile={handleRemoveFile}
                            />

                            <UploadCard
                                fileKey="addressProof"
                                title="Company Address Proof"
                                helper="Upload an official document showing your business address."
                                tooltip="GST certificate or registration document preferred."
                                files={files}
                                errors={errors}
                                handleFileChange={handleFileChange}
                                handleRemoveFile={handleRemoveFile}
                            />

                        </div>
                    </Section>



                    {/* DECLARATION */}
                    <label className="flex gap-2">
                        <input type="checkbox" name="declaration"
                            checked={form.declaration}
                            onChange={handleChange}
                        />
                        By submitting, you confirm all details are accurate.
                    </label>
                    {errors.declaration && <p className="text-red-500 text-xs">{errors.declaration}</p>}

                    <button className="w-full py-3 rounded-xl text-white bg-blue-600">
                        Submit for Verification
                    </button>

                </form>
            </div>
        </div>
    );
}
