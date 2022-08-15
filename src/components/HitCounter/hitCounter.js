import React, { Component } from "react";

import "./hitCounter.css";

const WEB_COUNTER_URL =
    "https://www.free-website-hit-counter.com/c.php?d=5&id=137412&s=5";

class HitCounter extends Component {
    render() {
        return (
            <div className="hitCounter">
                <div align="center">
                    <a href="https://www.free-website-hit-counter.com">
                        <img
                            src={WEB_COUNTER_URL}
                            border="0"
                            alt="Free Website Hit Counter"
                        />
                    </a>
                </div>
            </div>
        );
    }
}

export default HitCounter;
