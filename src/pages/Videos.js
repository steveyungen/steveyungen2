import React, { Component } from "react";
import Video from "../components/Video/video";

class Videos extends Component {
  render() {
    return (
      <div className="container videos-container mb-5">
        {/* VIDEOS */}
        <div className="row row-style justify-content-center text-center mt-5 mb-4">
          <div className="spacer" />
          <p className="title large-title">VIDEOS</p>
          <div className="spacer" />
        </div>
        {/* ROW 0 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/ftvl2ReR7rQ"} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/8W0qs8pDu64"} />
          </div>
        </div>
        {/* ROW 1 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/JOpgu_3O0WM"} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/8hw0KlIWbKk"} />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/726hKa5MnAg"} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/AN5AX8W76Xc"} />
          </div>
        </div>

        {/* ROW 3 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/xEYHfnU0Z9o?rel=0"} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/tgwyTx6I6sY"} />
          </div>
        </div>
        
        {/* ROW 4 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/ekyh20VfSoY"} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/pd9kunqRBQ8"} />
          </div>
        </div>

        {/* ROW 5 */}
        <div className="row video-row justify-content-center text-center" style={{display: "none"}}>
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/dFu8YgKDRJY"} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/vmlbEtXN-DQ"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
