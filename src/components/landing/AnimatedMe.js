import React, { Component } from 'react';
import '../../css/landing/AnimatedMe.css';
import * as THREE from 'three';
import profile from '../../images/professional_profile_img.jpg';

export class AnimatedMe extends Component {

    componentDidMount() {
        let particles = [];
        let renderer, scene, cmra, windowWidth, windowHeight, imageData, lastMousePos;
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        let resizeCanvasWidth = windowWidth * .6;
        let resizeCanvasHeight = windowHeight * .6;
        let pixelColor = 0x000000;

        let centerVector = new THREE.Vector3(0, 0, 0);
        let speed = 10;
        let isMouseDown = false;

        function getImageData() {
            let canvas    = document.createElement("canvas");
            let ctx       = canvas.getContext("2d");

            canvas.width = image.width;
            canvas.height = image.height;

            ctx.clearRect(0,0,canvas.width, canvas.height);
            ctx.drawImage(image, 0, 0);
            let data = ctx.getImageData(0, 0, image.width, image.height);
            return data;
        }

        var drawTheMap = function() {

            let geometry = new THREE.Geometry();
            let material = new THREE.PointsMaterial({
                size: 3,
                color: pixelColor,
                sizeAttenuation: false
            });

            for (let y = 0, y2 = imageData.height; y < y2; y += 2) {
                for (let x = 0, x2 = imageData.width; x < x2; x += 2) {
                    if (imageData.data[(x * 4 + y * 4 * imageData.width)] < 100) {

                        var vertex = new THREE.Vector3();
                        vertex.x = x - imageData.width / 2;
                        vertex.y = -y + imageData.height / 2;
                        vertex.z = -Math.random()*500;

                        vertex.speed = Math.random() / speed + 0.015;

                        geometry.vertices.push(vertex);
                    }
                }
            }
            particles = new THREE.Points(geometry, material);

            scene.add(particles);

            requestAnimationFrame(render);
        };

        var init = function(image, canvid) {
            renderer = new THREE.WebGLRenderer({
                canvas: document.getElementById(canvid),
                antialias: true,
                alpha: true
            });
            renderer.setSize(resizeCanvasWidth, resizeCanvasHeight);

            scene = new THREE.Scene();

            cmra = new THREE.OrthographicCamera( windowWidth / - 2, windowWidth / 2, windowHeight / 2, windowHeight / - 2, 1, 1000 );
            cmra.position.set(7, 0, 4);
            cmra.lookAt(centerVector);
            scene.add(cmra);
            cmra.zoom = 1.25;
            cmra.updateProjectionMatrix();

            imageData = getImageData(image);
            drawTheMap();

            window.addEventListener('mousemove', mouseMoveEvent, false);
            window.addEventListener('mousedown', mouseDownEvent, false);
            window.addEventListener('mouseup', mouseLiftEvent, false);
            window.addEventListener('resize', resizeEvent, false);
        }

        var resizeEvent = function(){
            windowWidth = window.innerWidth;
            windowHeight = window.innerHeight;
            resizeCanvasWidth = windowWidth * .6;
            resizeCanvasHeight = windowHeight * .6;
            renderer.setSize(resizeCanvasWidth, resizeCanvasHeight);
            cmra.left    = windowWidth / - 2;
            cmra.right   = windowWidth / 2;
            cmra.top     = windowHeight / 2;
            cmra.bottom  = windowHeight / - 2;
            cmra.updateProjectionMatrix();
        };

        var mouseLiftEvent = function(){
            isMouseDown = false;
        }
        var mouseDownEvent = function(e){
            isMouseDown = true;
            lastMousePos = {x:e.clientX, y:e.clientY};
        };
        var mouseMoveEvent = function(e){
            if(isMouseDown){
                cmra.position.x += (e.clientX-lastMousePos.x)/100;
                cmra.position.y -= (e.clientY-lastMousePos.y)/100;
                cmra.lookAt(centerVector);
                lastMousePos = {x:e.clientX, y:e.clientY};
            }
        };

        var render = function(a) {

            requestAnimationFrame(render);


            particles.geometry.verticesNeedUpdate = true;
            if(!isMouseDown){
                cmra.position.x += (0-cmra.position.x)*0.05;
                cmra.position.y += (0-cmra.position.y)*0.05;
                cmra.lookAt(centerVector);
            }

            renderer.render(scene, cmra);
        };

        var image = document.createElement("img");
        image.onload = function () {
            init(image, "animated-profile-pic");
        }
        image.src = profile;
    }

    render() {
        return (
            <div className="animated-me-outer-container">
                <div className="animated-me-container">
                    <canvas id="animated-profile-pic" style={{"float" : "right"}}></canvas>
                </div>
            </div>
        );
    }
}
