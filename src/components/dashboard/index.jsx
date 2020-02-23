import React from "react";
import Grid from "@material-ui/core/Grid";
import { toast } from "react-toastify";
import { useEffect } from "react";
import {
  getCandidateList,
  getApplicationDetails,
  getQuestions,
  setApplicationDetails
} from "../../services/dashboardServices";
import ApplicationInfo from "./applicationInfo/applicationInfo";
import SubmitButton from "../submitButton";
import CandidateList from "./candidateList/candidateList";
import { useStyles } from "./style";

export default function Dashboard(props) {
  const [candidateList, setCandidateList] = React.useState([]);
  const [
    candidateApplicationInfo,
    setcandidateApplicationInfo
  ] = React.useState();
  const [videos, setVideos] = React.useState([]);

  /* calls get api for candidate list at the time of component did mount and sets candidate list  in candidateList array*/
  const apiCall = async () => {
    try {
      let response = await getCandidateList();
      if (response && response.status === 200) {
        let data = response.data;
        setCandidateList(data);
      }
    } catch (error) {
      toast.error("something went wrong", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000
      });
    }
  };

  /* handles candidate select from list and on the basic of id calls get api for application Info for that candidate.
   seprating the videoinfo as videos array ad on the basis of question ids we get in application info, 
   calls get question api and filtering & inserting questions in videos array & applicationInfo array object. */
  const handleCandidateSelect = async e => {
    let newQuestions = [];
    try {
      let response = await getApplicationDetails(e.currentTarget.id);
      if (response && response.status === 200) {
        let data = response.data;
        let originalResult = data;
        let videos = data.videos;

        if (videos) {
          for (let i = 0; i < videos.length; i++) {
            let resultquestion = await getQuestions(videos[i].questionId);
            newQuestions.push(resultquestion.data);
          }

          let finalResult = videos.map(data => {
            let resultquestion = newQuestions.find(
              x => x.id === data.questionId
            ).question;
            return { ...data, question: resultquestion };
          });

          originalResult.videos = finalResult;
          setcandidateApplicationInfo(originalResult);
          setVideos(originalResult.videos);
        } else {
          setcandidateApplicationInfo({});
          setVideos([]);
        }
      }
    } catch (error) {
      toast.error("something went wrong", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000
      });
    }
  };

  /* this function handles comments value and id which comes from 
  commentTextfield and helps to map comment value with its id in candidateApplicationInfo array */
  const handleComments = e => {
 
    let newcandidateApplicationInfo = { ...candidateApplicationInfo };
    let videos = newcandidateApplicationInfo.videos;
    console.log(videos, e.currentTarget.id)
    
    videos[e.currentTarget.id].comments = e.currentTarget.value;
    newcandidateApplicationInfo.videos = videos;
    setcandidateApplicationInfo(newcandidateApplicationInfo);
    setVideos(newcandidateApplicationInfo.videos);
    console.log(newcandidateApplicationInfo);
  };

  useEffect(() => {
    apiCall();
  }, []);

  /* this function handles submittion of button and
   calls put application api for editing record with specific appilcation id and 
    the application info after comments are given to each video.*/
  const handleSubmit = async () => {
    let newVideo = [...videos];
    let finalresult = newVideo.map(data => {
      delete data.question;
      return { ...data };
    });
    try {
      let response = await setApplicationDetails(
        candidateApplicationInfo.id,
        finalresult
      );
      console.log(response);
      if (response && response.status === 200) {
        console.log("yes");
        toast.success("Submitted Succesfully", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000
        });
        setTimeout(() => {
          setcandidateApplicationInfo();
          setVideos([]);
        }, 2500);
      }
    } catch (error) {
      toast.error("Something went wrong", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000
      });
    }
  };

  const classes = useStyles();
  return (
    <div className="card">
      {candidateApplicationInfo ? (
        <div className={classes.marginSmall}>
          <h3>Candidate List</h3>
        </div>
      ) : (
        <div className={classes.marginLarge}>
          <h3>Candidate List</h3>
        </div>
      )}
      <div className="row">
        {candidateApplicationInfo ? (
          <Grid item xs={4} className={classes.scroll}>
            <CandidateList
              handleCandidateSelect={handleCandidateSelect}
              candidateList={candidateList}
            />
          </Grid>
        ) : (
          <Grid item xs={6} className="margins-l-r">
            <CandidateList
              handleCandidateSelect={handleCandidateSelect}
              candidateList={candidateList}
            />
          </Grid>
        )}
        {candidateApplicationInfo ? (
          <Grid item xs={8}>
            <ApplicationInfo videos={videos} handleComments={handleComments} />
            <SubmitButton handleSubmit={handleSubmit} videos={videos} />
          </Grid>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
