import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineContent from "@material-ui/lab/TimelineContent";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import "./Resume.css";

const Resume = () => {
  return (
    <>
      {/* About me */}
      <Grid container className="section pb_30 pt_30">
        <Grid item className="section_title mb_30">
          <span></span>
          <Typography variant="h6" className="section_title_text">
            About Me
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>
      {/* Education and experences */}
      <Grid container className="section">
        <Grid item className="section_title mb_30">
          <span></span>
          <Typography variant="h6" className="section_title_text">
            Resume
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
                {resumeData.educations.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>
                      <Typography variant={"caption"} className="timeline_date">
                        {education.date}
                      </Typography>
                      <Typography
                        variant={"body2"}
                        className="timeline_description"
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/* Experences */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Work Experences" icon={<WorkIcon />}>
                {resumeData.experences.map((experence) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experence.title}
                      </Typography>
                      <Typography variant={"caption"} className="timeline_date">
                        {experence.date}
                      </Typography>
                      <Typography
                        variant={"body2"}
                        className="timeline_description"
                      >
                        {experence.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section graybg pt_30 pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <Typography variant="h6" className="section_title_text">
            My Skills
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={3}>
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skill_title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography variant="body2" className="skill_description">
                      <TimelineDot
                        variant={"outlined"}
                        className="timeline_dot"
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
