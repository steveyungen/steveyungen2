import React, { Component } from "react";
import Video from "../components/Video/video";
import VIDEO from "../content/videos";

class Videos extends Component {
    render() {
        return (
            <div className="container videos-container mb-5">
                <div className="row row-style justify-content-center text-center mt-5 mb-4">
                    <div className="spacer" />
                    <p className="title large-title">VIDEOS</p>
                    <div className="spacer" />
                </div>

                <div className="row video-row justify-content-center text-center">
                    <div className="col-xs-8 col-md-6">
                        <Video video={VIDEO.HONEYBEE} />
                    </div>
                    <div className="col-xs-8 col-md-6">
                        <Video video={VIDEO.BOMBAY_BEACH} />
                    </div>
                </div>

                <div className="row video-row justify-content-center text-center">
                    <div className="col-xs-8 col-md-6">
                        <Video video={VIDEO.AT_THE_BEACH_SEPT_2024} />
                    </div>
                   <div className="col-xs-8 col-md-6">
                        <Video video={VIDEO.STEVE_JOSEPH_CURTIS_2022} />
                    </div>
                </div>

                <div className="row video-row justify-content-center text-center">
                    <div className="col-xs-8 col-md-6">
                        <Video video={VIDEO.BANANAS_THE_MOVIE} />
                    </div>
                    <div className="col-xs-8 col-md-6">
                        <Video video={VIDEO.UKULELE_JIMMY} />
                    </div>
                </div>

                <div className="row video-row justify-content-center text-center">
                    <div className="col-xs-8 col-md-6">
                        <Video video={VIDEO.STEVE_JOSEPH_CURTIS_2019} />
                    </div>
                    <div className="col-xs-8 col-md-6">
                        <Video video={VIDEO.HALLOWEEN_SONG} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Videos;
