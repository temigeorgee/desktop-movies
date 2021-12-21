import { combineReducers } from "redux";
import woozeeeSeriesReducer from "./woozeee.reducer";
import TopTenSeriesReducer from "./TopTen.reducer";
import animationSeriesReducer from "./animation.reducer";
import comingSoonSeriesReducer from "./comingSoon.reducer";
import crimeSeriesReducer from "./crime.reducer";
import recommendedSeriesReducer from "./recommended.reducer";
import featuredSeriesReducer from "./featured.reducer";
import kidsSeriesReducer from "./kids.reducer";
import sciFiFantasyReducer from "./sciFiFantasy.reducer";
import trendingSeriesReducer from "./trending.reducer";

export default combineReducers({
  woozeeeSeries: woozeeeSeriesReducer,
  TopTenSeries: TopTenSeriesReducer,
  animationSeries: animationSeriesReducer,
  comingSoonSeries: comingSoonSeriesReducer,
  crimeSeries: crimeSeriesReducer,
  recommendedSeries: recommendedSeriesReducer,
  featuredSeries: featuredSeriesReducer,
  kidsSeries: kidsSeriesReducer,
  sciFiFantasySeries: sciFiFantasyReducer,
  trendingSeries: trendingSeriesReducer,
});
