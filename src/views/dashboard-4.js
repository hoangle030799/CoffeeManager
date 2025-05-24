import React, { Fragment, useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Leaflet from "../components/leaflet";
// import img from '../assets/images/page-img/44.jpg'

// img
import china from "../assets/images/small/china.png";
import france from "../assets/images/small/france.png";
import germany from "../assets/images/small/germany.png";
import iran from "../assets/images/small/iran.png";
import italy from "../assets/images/small/italy.png";
import netherlands from "../assets/images/small/netherlands.png";
import norway from "../assets/images/small/norway.png";
import southKoria from "../assets/images/small/south-koria.png";
import spain from "../assets/images/small/spain.png";
import sweden from "../assets/images/small/sweden.png";
import switzerlands from "../assets/images/small/switzerlands.png";
import usa from "../assets/images/small/usa.png";
import india from "../assets/images/small/india.png";

import img1 from "../assets/images/page-img/45.png";
import img2 from "../assets/images/page-img/46.png";
import img3 from "../assets/images/page-img/47.png";
import img4 from "../assets/images/page-img/48.png";
import img5 from "../assets/images/page-img/40.png";
import img6 from "../assets/images/page-img/41.png";
import img7 from "../assets/images/page-img/42.png";
import img8 from "../assets/images/page-img/43.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper css
import "swiper/css";
import "swiper/css/pagination";
// swiper modules
import { Navigation } from "swiper/modules";

import { Link } from "react-router-dom";

// eslint-disable-next-line camelcase
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
// Themes begin
am4core.useTheme(am4themes_animated);

const DashboardFour = () => {
  const img = require("../assets/images/page-img/07.jpg");

  useEffect(() => {
    document.querySelectorAll("#world-map").length &&
      am4core.ready(function () {
        am4core.ready(function () {
          // Themes begin
          am4core.useTheme(am4themes_animated);
          // Themes end

          // Create map instance
          var chart = am4core.create("world-map", am4maps.MapChart);

          // Set map definition
          chart.geodata = am4geodata_worldLow;

          // Set projection
          chart.projection = new am4maps.projections.Miller();

          // Create map polygon series
          var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

          // Exclude Antartica
          polygonSeries.exclude = ["AQ"];

          // Make map load polygon (like country names) data from GeoJSON
          polygonSeries.useGeodata = true;

          // Configure series
          var polygonTemplate = polygonSeries.mapPolygons.template;
          polygonTemplate.tooltipText = "{name}";
          polygonTemplate.fill = chart.colors.getIndex(0).lighten(0.5);

          // Create hover state and set alternative fill color
          var hs = polygonTemplate.states.create("hover");
          hs.properties.fill = chart.colors.getIndex(0);

          // Add image series
          var imageSeries = chart.series.push(new am4maps.MapImageSeries());
          imageSeries.mapImages.template.propertyFields.longitude = "longitude";
          imageSeries.mapImages.template.propertyFields.latitude = "latitude";
          imageSeries.data = [
            {
              title: "Brussels",
              latitude: 50.8371,
              longitude: 4.3676,
            },
            {
              title: "Copenhagen",
              latitude: 55.6763,
              longitude: 12.5681,
            },
            {
              title: "Paris",
              latitude: 48.8567,
              longitude: 2.351,
            },
            {
              title: "Reykjavik",
              latitude: 64.1353,
              longitude: -21.8952,
            },
            {
              title: "Moscow",
              latitude: 55.7558,
              longitude: 37.6176,
            },
            {
              title: "Madrid",
              latitude: 40.4167,
              longitude: -3.7033,
            },
            {
              title: "London",
              latitude: 51.5002,
              longitude: -0.1262,
              url: "http://www.google.co.uk",
            },
            {
              title: "Peking",
              latitude: 39.9056,
              longitude: 116.3958,
            },
            {
              title: "New Delhi -2",
              latitude: 28.6353,
              longitude: 77.225,
            },
            {
              title: "Tokyo",
              latitude: 35.6785,
              longitude: 139.6823,
              url: "http://www.google.co.jp",
            },
            {
              title: "Ankara",
              latitude: 39.9439,
              longitude: 32.856,
            },
            {
              title: "Buenos Aires",
              latitude: -34.6118,
              longitude: -58.4173,
            },
            {
              title: "Brasilia",
              latitude: -15.7801,
              longitude: -47.9292,
            },
            {
              title: "Ottawa",
              latitude: 45.4235,
              longitude: -75.6979,
            },
            {
              title: "Washington",
              latitude: 38.8921,
              longitude: -77.0241,
            },
            {
              title: "Kinshasa",
              latitude: -4.3369,
              longitude: 15.3271,
            },
            {
              title: "Cairo",
              latitude: 30.0571,
              longitude: 31.2272,
            },
            {
              title: "Pretoria",
              latitude: -25.7463,
              longitude: 28.1876,
            },
          ];

          // add events to recalculate map position when the map is moved or zoomed
          chart.events.on("ready", updateCustomMarkers);
          chart.events.on("mappositionchanged", updateCustomMarkers);

          // this function will take current images on the map and create HTML elements for them
          function updateCustomMarkers(event) {
            // go through all of the images
            imageSeries.mapImages.each(function (image) {
              // check if it has corresponding HTML element
              if (!image.dummyData || !image.dummyData.externalElement) {
                // create onex
                image.dummyData = {
                  externalElement: createCustomMarker(image),
                };
              }

              // reposition the element accoridng to coordinates
              var xy = chart.geoPointToSVG({
                longitude: image.longitude,
                latitude: image.latitude,
              });
              image.dummyData.externalElement.style.top = xy.y + "px";
              image.dummyData.externalElement.style.left = xy.x + "px";
            });
          }

          // this function creates and returns a new marker element
          function createCustomMarker(image) {
            var chart = image.dataItem.component.chart;

            // create holder
            var holder = document.createElement("div");
            holder.className = "map-marker";
            holder.title = image.dataItem.dataContext.title;
            holder.style.position = "absolute";

            // maybe add a link to it?
            if (undefined !== image.url) {
              holder.onclick = function () {
                window.location.href = image.url;
              };
              holder.className += " map-clickable";
            }

            // create dot
            var dot = document.createElement("div");
            dot.className = "dot";
            holder.appendChild(dot);

            // create pulse
            var pulse = document.createElement("div");
            pulse.className = "pulse";
            holder.appendChild(pulse);

            // append the marker to the map container
            chart.svgContainer.htmlElement.appendChild(holder);

            return holder;
          }
        });
      });

    return () => {};
  }, []);
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col sm="12">
            <Row>
              <Col md="6" lg="3">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="iq-card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-left">
                        <h4 className="mb-2 mt-2">Confirm</h4>
                        <h3 className="mb-0 line-height">183,325</h3>
                      </div>
                      <div className="rounded-circle iq-card-icon bg-primary">
                        <i className="ri-task-line"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="3">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="iq-card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-left">
                        <h4 className="mb-2 mt-2">Recovered</h4>
                        <h3 className="mb-0 line-height">79,908</h3>
                      </div>
                      <div className="rounded-circle iq-card-icon bg-warning">
                        <i className="ri-hospital-line"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="3">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="iq-card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-left">
                        <h4 className="mb-2 mt-2">Death</h4>
                        <h3 className="mb-0 line-height">7,177</h3>
                      </div>
                      <div className="rounded-circle iq-card-icon bg-danger">
                        <i className="ri-gradienter-line"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="3">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div
                    className="iq-card-body P-0 rounded"
                    style={{
                      background: `url(${img}) no-repeat scroll center center`,
                      backgroundSize: "contain",
                      minHeight: "127px",
                    }}
                  ></div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm="12">
            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
              <div className="iq-card-body">
                <div id="world-map" style={{ height: "400px" }}></div>
                <Leaflet
                  id="chart-map-column-04"
                  className="custom-chart"
                  style={{ height: "400px;" }}
                />
              </div>
            </div>
          </Col>
          <Col lg="8">
            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Global record</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <div className="table-responsive">
                  <Table className="mb-0" borderless>
                    <thead>
                      <tr>
                        <th scope="col">Country</th>
                        <th scope="col">Confirm</th>
                        <th scope="col">Recover</th>
                        <th scope="col">Death</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src={china}
                            className="img-fluid"
                            alt="country-flag"
                          />{" "}
                          <span className="mx-2">China</span>
                        </td>
                        <td>80,967</td>
                        <td>972</td>
                        <td>3248</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src={france}
                            className="img-fluid"
                            alt="country-flag"
                          />
                          <span className="mx-2">France</span>
                        </td>
                        <td>10,995</td>
                        <td>245</td>
                        <td>372</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src={germany}
                            className="img-fluid"
                            alt="country-flag"
                          />
                          <span className="mx-2">Germany</span>
                        </td>
                        <td>15,320</td>
                        <td>242</td>
                        <td>44</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src={iran}
                            className="img-fluid"
                            alt="country-flag"
                          />
                          <span className="mx-2">Iran</span>
                        </td>
                        <td>18,407</td>
                        <td>520</td>
                        <td>1284</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src={italy}
                            className="img-fluid"
                            alt="country-flag"
                          />
                          <span className="mx-2">Italy</span>
                        </td>
                        <td>41,035</td>
                        <td>10,600</td>
                        <td>3405</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src={netherlands}
                            className="img-fluid"
                            alt="country-flag"
                          />
                          <span className="mx-2">Netherlands</span>
                        </td>
                        <td>2460</td>
                        <td>24</td>
                        <td>76</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src={norway}
                            className="img-fluid"
                            alt="country-flag"
                          />
                          <span className="mx-2">Norway</span>
                        </td>
                        <td>789</td>
                        <td>135</td>
                        <td>35</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src={southKoria}
                            className="img-fluid"
                            alt="country-flag"
                          />
                          <span className="mx-2">South Korea</span>
                        </td>
                        <td>1200</td>
                        <td>500</td>
                        <td>600</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src={spain}
                            className="img-fluid"
                            alt="country-flag"
                          />
                          <span className="mx-2">Spain</span>
                        </td>
                        <td>18,077</td>
                        <td>150</td>
                        <td>831</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src={sweden}
                            className="img-fluid"
                            alt="country-flag"
                          />
                          <span className="mx-2">Sweden</span>
                        </td>
                        <td>800</td>
                        <td>250</td>
                        <td>25</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src={switzerlands}
                            className="img-fluid"
                            alt="country-flag"
                          />
                          <span className="mx-2">SwizerLand</span>
                        </td>
                        <td>4222</td>
                        <td>125</td>
                        <td>43</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src={usa}
                            className="img-fluid"
                            alt="country-flag"
                          />
                          <span className="mx-2">United States</span>
                        </td>
                        <td>14354</td>
                        <td>150</td>
                        <td>277</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src={india}
                            className="img-fluid"
                            alt="country-flag"
                          />
                          <span className="mx-2">India</span>
                        </td>
                        <td>197</td>
                        <td>50</td>
                        <td>4</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">How Avoid Virus infection</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <div className="d-flex mb-4 gap-3">
                  <img
                    src={img1}
                    className="align-self-start me-3 avatar-80 flex-shrink-0"
                    alt="blog-img"
                  />
                  <div className="media-body">
                    <h5 className="mt-0">Wash your hands frequently</h5>
                    <p className="mb-0">
                      Regularly and thoroughly clean your hands with an
                      alcohol-based hand rub or wash them with soap and water.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4 gap-3">
                  <img
                    src={img2}
                    className="align-self-start me-3 avatar-80 flex-shrink-0"
                    alt="blog-img"
                  />
                  <div className="media-body">
                    <h5 className="mt-0">Maintain social distancing</h5>
                    <p className="mb-0">
                      Maintain at least 1 metre (3 feet) distance between
                      yourself and anyone who is coughing or sneezing.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4 gap-3">
                  <img
                    src={img3}
                    className="align-self-start me-3 avatar-80 flex-shrink-0"
                    alt="blog-img"
                  />
                  <div className="media-body">
                    <h5 className="mt-0">
                      Avoid touching eyes, nose and mouth
                    </h5>
                    <p className="mb-0">
                      Hands touch many surfaces and can pick up viruses. Once
                      contaminated, hands can transfer the virus to your eyes,
                      nose or mouth. From there, the virus can enter your body
                      and can make you sick.
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <img
                    src={img4}
                    className="align-self-start me-3 avatar-80 flex-shrink-0"
                    alt="blog-img"
                  />
                  <div className="media-body">
                    <h5 className="mt-0">Practice respiratory hygiene </h5>
                    <p className="mb-0">
                      Make sure you, and the people around you, follow good
                      respiratory hygiene. This means covering your mouth and
                      nose with your bent elbow or tissue when you cough or
                      sneeze. Then dispose of the used tissue immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="12">
            <Swiper id="contact-slider" loop={true} slidesPerView={4} spaceBetween={25}>
              <SwiperSlide className="col-sm-6 col-md-3">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="iq-card-body">
                    <img
                      className="arrow-img w-auto mb-3"
                      src={china}
                      alt="iconflag"
                    />
                    <h5 className="contact-number">
                      <i
                        aria-hidden="true"
                        className="ion ion-android-call"
                      ></i>
                      + 1 800 324 2323
                    </h5>
                    <p className="mb-0">Help line China</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-sm-6 col-md-3">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="iq-card-body">
                    <img
                      className="arrow-img w-auto mb-3"
                      src={france}
                      alt="iconflag"
                    />
                    <h5 className="contact-number">
                      <i
                        aria-hidden="true"
                        className="ion ion-android-call"
                      ></i>
                      + 1 800 324 2323
                    </h5>
                    <p className="mb-0">Help line France</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-sm-6 col-md-3">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="iq-card-body">
                    <img
                      className="arrow-img w-auto mb-3"
                      src={germany}
                      alt="iconflag"
                    />
                    <h5 className="contact-number">
                      <i
                        aria-hidden="true"
                        className="ion ion-android-call"
                      ></i>
                      + 1 800 324 2323
                    </h5>
                    <p className="mb-0">Help line Germany</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-sm-6 col-md-3">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="iq-card-body">
                    <img
                      className="arrow-img w-auto mb-3"
                      src={iran}
                      alt="iconflag"
                    />
                    <h5 className="contact-number">
                      <i
                        aria-hidden="true"
                        className="ion ion-android-call"
                      ></i>
                      + 1 800 324 2323
                    </h5>
                    <p className="mb-0">Help line Iran</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-sm-6 col-md-3">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="iq-card-body">
                    <img
                      className="arrow-img w-auto mb-3"
                      src={italy}
                      alt="iconflag"
                    />
                    <h5 className="contact-number">
                      <i
                        aria-hidden="true"
                        className="ion ion-android-call"
                      ></i>
                      + 1 800 324 2323
                    </h5>
                    <p className="mb-0">Help line Italy</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-sm-6 col-md-3">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="iq-card-body">
                    <img
                      className="arrow-img w-auto mb-3"
                      src={netherlands}
                      alt="iconflag"
                    />
                    <h5 className="contact-number">
                      <i
                        aria-hidden="true"
                        className="ion ion-android-call"
                      ></i>
                      + 1 800 324 2323
                    </h5>
                    <p className="mb-0">Help line Netherlands</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-sm-6 col-md-3">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="iq-card-body">
                    <img
                      className="arrow-img w-auto mb-3"
                      src={norway}
                      alt="iconflag"
                    />
                    <h5 className="contact-number">
                      <i
                        aria-hidden="true"
                        className="ion ion-android-call"
                      ></i>
                      + 1 800 324 2323
                    </h5>
                    <p className="mb-0">Help line Norway</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-sm-6 col-md-3">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="iq-card-body">
                    <img
                      className="arrow-img w-auto mb-3"
                      src={southKoria}
                      alt="iconflag"
                    />
                    <h5 className="contact-number">
                      <i
                        aria-hidden="true"
                        className="ion ion-android-call"
                      ></i>
                      + 1 800 324 2323
                    </h5>
                    <p className="mb-0">Help line South Korea</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-sm-6 col-md-3">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="iq-card-body">
                    <img
                      className="arrow-img w-auto mb-3"
                      src={spain}
                      alt="iconflag"
                    />
                    <h5 className="contact-number">
                      <i
                        aria-hidden="true"
                        className="ion ion-android-call"
                      ></i>
                      + 1 800 324 2323
                    </h5>
                    <p className="mb-0">Help line Spain</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-sm-6 col-md-3">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="iq-card-body">
                    <img
                      className="arrow-img w-auto mb-3"
                      src={sweden}
                      alt="iconflag"
                    />
                    <h5 className="contact-number">
                      <i
                        aria-hidden="true"
                        className="ion ion-android-call"
                      ></i>
                      + 1 800 324 2323
                    </h5>
                    <p className="mb-0">Help line Sweden</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-sm-6 col-md-3">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="iq-card-body">
                    <img
                      className="arrow-img w-auto mb-3"
                      src={switzerlands}
                      alt="iconflag"
                    />
                    <h5 className="contact-number">
                      <i
                        aria-hidden="true"
                        className="ion ion-android-call"
                      ></i>
                      + 1 800 324 2323
                    </h5>
                    <p className="mb-0">Help line SwizerLand</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-sm-6 col-md-3">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="iq-card-body">
                    <img
                      className="arrow-img w-auto mb-3"
                      src={usa}
                      alt="iconflag"
                    />
                    <h5 className="contact-number">
                      <i
                        aria-hidden="true"
                        className="ion ion-android-call"
                      ></i>
                      + 1 800 324 2323
                    </h5>
                    <p className="mb-0">Help line United States</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-sm-6 col-md-3">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="iq-card-body">
                    <img
                      className="arrow-img w-auto mb-3"
                      src={india}
                      alt="iconflag"
                    />
                    <h5 className="contact-number">
                      <i
                        aria-hidden="true"
                        className="ion ion-android-call"
                      ></i>
                      + 1 800 324 2323
                    </h5>
                    <p className="mb-0">Help line India</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col sm="12">
            <Swiper
              className="ele-widget-swiper swiper"
              loop={true}
              slidesPerView={3}
              spaceBetween={30}
              modules={[Navigation]}
              navigation={{
                nextEl: "#swiper-button-next",
                prevEl: "#swiper-button-prev",
              }}
            >
              <SwiperSlide className="swiper-slide">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="image-block">
                    <img
                      src={img5}
                      className="img-fluid w-100"
                      alt="blog-img"
                    />
                  </div>
                  <div className="iq-card-body">
                    <div className="blog-description">
                      <div className="blog-meta">
                        <Link to="#">March 21, 2020</Link>
                      </div>
                      <h4 className="mb-2">
                        Containing coronavirus spread comes
                      </h4>
                      <p>
                        In the blogpost, the IMF experts observed, "Success in
                        containing the virus comes at the price of slowing
                        economic activity, no matter whether social distancing
                        and reduced mobility are voluntary or enforced."
                      </p>
                      <Link to="#">
                        Read More <i className="ri-arrow-right-s-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="image-block">
                    <img
                      src={img6}
                      className="img-fluid w-100"
                      alt="blog-img"
                    />
                  </div>
                  <div className="iq-card-body">
                    <div className="blog-description">
                      <div className="blog-meta">
                        <Link to="#">March 21, 2020</Link>
                      </div>
                      <h4 className="mb-2">Latest coronavirus updates</h4>
                      <p>
                        ABC Action News is committed to providing Tampa Bay area
                        residents all of the updates on the coronavirus,
                        COVID-19, and the impact it's having on our way of life.
                        To help you stay on top of it all, we'll be updating
                        this daily blog as we continue to get through this
                        together.
                      </p>
                      <Link to="#">
                        Read More <i className="ri-arrow-right-s-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="image-block">
                    <img
                      src={img7}
                      className="img-fluid w-100"
                      alt="blog-img"
                    />
                  </div>
                  <div className="iq-card-body">
                    <div className="blog-description">
                      <div className="blog-meta">
                        <Link to="#">March 21, 2020</Link>
                      </div>
                      <h4 className="mb-2">False Hope about Coronavirus</h4>
                      <p>
                        While patients can and do recover from coronavirus
                        infections, there are currently no approved treatments
                        that are known to work against COVID-19. He said at his
                        press briefing yesterday, that two drugs,
                        hydroxychloroquine and remdesivir
                      </p>
                      <Link to="#">
                        Read More <i className="ri-arrow-right-s-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="image-block">
                    <img
                      src={img8}
                      className="img-fluid w-100"
                      alt="blog-img"
                    />
                  </div>
                  <div className="iq-card-body">
                    <div className="blog-description">
                      <div className="blog-meta">
                        <Link to="#">March 21, 2020</Link>
                      </div>
                      <h4 className="mb-2">Coronavirus in Maine Blog</h4>
                      <p>
                        This now includes cases formerly identified as
                        presumptive positive. This classification applies to
                        samples sent by a health provider directly to HETL that
                        test positive and to samples from non-governmental labs
                        for which HETL validates positive results.{" "}
                      </p>
                      <Link to="#">
                        Read More <i className="ri-arrow-right-s-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <div className="iqonic-navigation-custom navigation-center">
                <div className="iqonic-navigation" id="navDemo2">
                  <div
                    className="swiper-buttons swiper-button-prev"
                    id="swiper-button-prev"
                    tabIndex="0"
                    role="button"
                    aria-label="Previous slide"
                  >
                    <i className="ri-arrow-left-s-line"></i>
                  </div>
                  <div
                    className="swiper-buttons swiper-button-next"
                    id="swiper-button-next"
                    tabIndex="-1"
                    role="button"
                    aria-label="Next slide"
                  >
                    <i className="ri-arrow-right-s-line"></i>
                  </div>
                </div>
              </div>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default DashboardFour;
