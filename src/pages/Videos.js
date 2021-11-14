import React, { Component } from "react";
import Video from "../components/Video/video";
import VIDEO from "../content/videos";

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
        {/* ROW 1 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-xs-8 col-md-6">
            <Video video={VIDEO.VIDEO_1} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={VIDEO.VIDEO_2} />
          </div>
        </div>
        {/* ROW 2 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-xs-8 col-md-6">
            <Video video={VIDEO.VIDEO_3} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={VIDEO.VIDEO_4} />
          </div>
        </div>

        {/* ROW 3 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-xs-8 col-md-6">
            <Video video={VIDEO.VIDEO_5} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={VIDEO.VIDEO_6} />
          </div>
        </div>

        {/* ROW 4 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-xs-8 col-md-6">
            <Video video={VIDEO.VIDEO_7} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={VIDEO.VIDEO_8} />
          </div>
        </div>
        
        {/* ROW 5 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-xs-8 col-md-6">
            <Video video={VIDEO.VIDEO_9} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={VIDEO.VIDEO_10} />
          </div>
        </div>

        {/* ROW 6 */}
        <div className="row video-row justify-content-center text-center" style={{display: "none"}}>
          <div className="col-xs-8 col-md-6">
            <Video video={VIDEO.VIDEO_11} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={VIDEO.VIDEO_12} />
          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
