import React from "react";
import { Grid, Typography, TextField } from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import CustomButton from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import "./Contact.css";
const Contact = ({ env }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, r) => {
    alert(`Thank you for your message from ${data.email}`);
    const templateId = "contact-template";
    const serviceID = "gmail";
    sendFeedback(serviceID, templateId, {
      name: data.name,
      message: data.message,
      reply_to: data.email,
    });
    r.target.reset();
  };
  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) =>
        console.error(
          "There has been an error.  Here some thoughts on the error that occured:",
          err
        )
      );
  };
  return (
    <>
      {/* Contact */}
      <Grid container className="section pt_30 pb_45">
        {/* Contact Form */}
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <Typography variant="h6" className="section_title_text">
                Contact Form
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="name"
                      label="Name"
                      inputRef={register({
                        required: "Please enter your name",
                        maxLength: {
                          value: 20,
                          message:
                            "Please enter a name with fewer than 20 characters",
                        },
                      })}
                    />
                    <span className="error_contact">
                      {errors.name && errors.name.message}
                    </span>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="email"
                      label="Email"
                      inputRef={register({
                        required: "Please enter an email",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    <span className="error_contact">
                      {errors.email && errors.email.message}
                    </span>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Message"
                      multiline
                      rows={4}
                      inputRef={register({
                        required: true,
                      })}
                    />
                    <span className="error_contact">
                      {errors.message && "Oops, you forgot your message"}
                    </span>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomButton text="Submit" />
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
        {/* Contact Information */}
        <Grid item xs={12} lg={5}>
          <Grid container className="container_contact_info pl_30">
            <Grid item className="section_title mb_30">
              <span></span>
              <Typography variant="h6" className="section_title_text">
                Contact Information
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Address: </span>
                    {resumeData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Phone: </span>
                    {resumeData.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Email: </span>
                    {resumeData.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container className="contactInfo_socialsContainer">
                {Object.keys(resumeData.socials).map((key) => (
                  <Grid item className="contactInfo_socials">
                    <a href={resumeData.socials[key].link}>
                      {resumeData.socials[key].icon}
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      ;
    </>
  );
};

export default Contact;
