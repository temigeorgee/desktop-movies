import { createSelector } from "reselect";

export const selectwoozeeeSeries = (state) => state.series.woozeeeSeries;
export const selectTopTenSeries = (state) => state.series.TopTenSeries;
export const selectAnimationSeries = (state) => state.series.animationSeries;
export const selectComingSoonSeries = (state) => state.series.comingSoonSeries;
export const selectCrimeSeries = (state) => state.series.crimeSeries;
export const selectRecommendedSeries = (state) =>
  state.series.recommendedSeries;
export const selectFeaturedSeries = (state) => state.series.featuredSeries;
export const selectKidsSeries = (state) => state.series.kidsSeries;
export const selectSciFiFantasySeries = (state) =>
  state.series.sciFiFantasySeries;
export const selectTrendingSeries = (state) => state.series.trendingSeries;

export const selectwoozeeeSeriesSelector = createSelector(
  [selectwoozeeeSeries],
  (woozeeeSeries) => woozeeeSeries.data
);

export const selectTopTenSeriesSelector = createSelector(
  [selectTopTenSeries],
  (topTenSeries) => topTenSeries.data
);

export const selectAnimationSeriesSelector = createSelector(
  [selectAnimationSeries],
  (animationSeries) => animationSeries.data
);

export const selectComedySeriesSelector = createSelector(
  [selectComingSoonSeries],
  (comingSoonSeries) => comingSoonSeries.data
);

export const selectCrimeSeriesSelector = createSelector(
  [selectCrimeSeries],
  (crimeSeries) => crimeSeries.data
);

export const selectRecommendedSeriesSelector = createSelector(
  [selectRecommendedSeries],
  (recommendedSeries) => recommendedSeries.data
);

export const selectFeaturedSeriesSelector = createSelector(
  [selectFeaturedSeries],
  (featuredSeries) => featuredSeries.data
);

export const selectKidsSeriesSelector = createSelector(
  [selectKidsSeries],
  (kidsSeries) => kidsSeries.data
);

export const selectSciFiFantasySeriesSelector = createSelector(
  [selectSciFiFantasySeries],
  (sciFiFantasySeries) => sciFiFantasySeries.data
);

export const selectTrendingSeriesSelector = createSelector(
  [selectTrendingSeries],
  (trendingSeries) => trendingSeries.data
);
