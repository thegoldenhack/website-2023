import React, { Component } from "react";

import { default as TsParticles } from "react-tsparticles";

export default class Particles extends Component {
    render() {
        return (
            <TsParticles
                id="tsparticles"
                options={{
                    background: {
                        color: {
                            value: "rgba(0, 0, 0, 0)"
                        },
                        opacity: 0,
                    },
                    fpsLimit: 60,
                    interactivity: {
                    detectsOn: 'window',
                    events: {
                        onClick: {
                        enable: true,
                        mode: "push",
                        },
                        onHover: {
                        enable: true,
                        mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                        distance: 200,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                        },
                        push: {
                        quantity: 4,
                        },
                        repulse: {
                        distance: 100,
                        duration: 0.4,
                        },
                    },
                    },
                    particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                        enable: true,
                        value_area: 800,
                        },
                        value: 90,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 5,
                    },
                    },
                    detectRetina: true,
                }}
            />
        )
    }
}