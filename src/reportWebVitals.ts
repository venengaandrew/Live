import { ReportHandler } from 'web-vitals';

/**
 * The `reportWebVitals` function is a TypeScript function that imports and uses the `web-vitals`
 * library to measure and report various web performance metrics.
 * @param {ReportHandler} [onPerfEntry] - The `onPerfEntry` parameter is a callback function that will
 * be called with performance data. It is an optional parameter, meaning it can be omitted when calling
 * the `reportWebVitals` function. If provided, it should be a function that accepts a `PerfEntry`
 * object as
 */
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
