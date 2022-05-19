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
                        <Video video={VIDEO.FARMERS_MARKET_MAY_2022} />
                    </div>
                </div>

                <div className="row video-row justify-content-center text-center">
                    <div className="col-xs-8 col-md-6">
                        <Video video={VIDEO.UKULELE_JIMMY} />
                    </div>
                    <div className="col-xs-8 col-md-6">
                        <Video video={VIDEO.SUNNY_DAY_SUPERHERO} />
                    </div>
                </div>

                <div className="row video-row justify-content-center text-center">
                    <div className="col-xs-8 col-md-6">
                        <Video video={VIDEO.OCT_10_2021} />
                    </div>
                    <div className="col-xs-8 col-md-6">
                        <Video video={VIDEO.NPR_TINY_DESK_2021} />
                    </div>
                </div>

                <div className="row video-row justify-content-center text-center">
                    <div className="col-xs-8 col-md-6">
                        <Video video={VIDEO.BANANAS_THE_MOVIE} />
                    </div>
                    <div className="col-xs-8 col-md-6">
                        <Video video={VIDEO.HALLOWEEN_SONG} />
                    </div>
                </div>

                <div className="row video-row justify-content-center text-center">
                    <div className="col-xs-8 col-md-6">
                        <Video video={VIDEO.SUNFLOWER} />
                    </div>
                    <div className="col-xs-8 col-md-6">
                        <Video video={VIDEO.STEVE_JOSEPH_CURTIS_2019} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Videos;
