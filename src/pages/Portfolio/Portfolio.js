import React, { useState } from "react";
import {
  Grid,
  Typography,
  Tabs,
  Tab,
  Card,
  Grow,
  Dialog,
} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import resumeData from "../../utils/resumeData";
import "./Portfolio.css";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <>
      <Grid container spacing={1} className="section pt_30 pb_45">
        {/* Title */}
        <Grid item className="section_title mb_30">
          <span></span>
          <Typography variant="h6" className="section_title_text">
            Portfolio
          </Typography>
        </Grid>
        {/* Tabs */}
        <Grid item xs={12}>
          <Tabs
            value={tabValue}
            indicatorColor="white"
            className="customTabs"
            onChange={(event, newValue) => setTabValue(newValue)}
          >
            <Tab
              label="All"
              value="All"
              className={
                tabValue == "All" ? "customTabs_item active" : "customTabs_item"
              }
            />
            {[...new Set(resumeData.projects.map((item) => item.tag))].map(
              (tag) => (
                <Tab
                  label={tag}
                  value={tag}
                  className={
                    tabValue == tag
                      ? "customTabs_item active"
                      : "customTabs_item"
                  }
                />
              )
            )}
          </Tabs>
        </Grid>
        {/* Projects */}
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {resumeData.projects.map((project) => (
              <>
                {tabValue == project.tag || tabValue == "All" ? (
                  <Grid item xs={12} sm={6} md={4}>
                    <Grow in timeout={1000}>
                      <Card
                        className="customCard"
                        onClick={() => setProjectDialog(project)}
                      >
                        <CardActionArea>
                          <CardMedia
                            className="customCard_image"
                            image={project.image}
                            title={project.title}
                          />
                          <CardContent>
                            <Typography
                              variant={"body2"}
                              className="customCard_title"
                            >
                              {project.title}
                            </Typography>
                            <Typography
                              variant={"body2"}
                              className="customCard_caption"
                            >
                              {project.caption}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grow>
                  </Grid>
                ) : null}
              </>
            ))}
          </Grid>
        </Grid>
        <Dialog
          className="projectDialog"
          open={projectDialog}
          onClose={() => setProjectDialog(false)}
          fullWidth
        >
          <DialogTitle
            className="projectDialog_title"
            onClose={() => setProjectDialog(false)}
          >
            {projectDialog.title}
          </DialogTitle>
          <img
            src={projectDialog.image}
            alt=""
            className="projectDialog_image"
          />
          <DialogContent>
            <Typography className="projectDialog_description">
              {projectDialog.description}
            </Typography>
          </DialogContent>
          <DialogActions className="projectDialog_actions">
            {projectDialog?.links?.map((link) => (
              <a
                href={link.link}
                target="_blank"
                className="projectDialog_icon"
              >
                {link.icon}
              </a>
            ))}
          </DialogActions>
        </Dialog>
      </Grid>
    </>
  );
};

export default Portfolio;
