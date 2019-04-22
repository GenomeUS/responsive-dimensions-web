
const baseValues = {
  width: window.innerWidth,
  height: window.innerHeight,
};

/**
 * Initial Sketch File values, represent the max width and height of an screen in the sketch file.
 * @type {{height: number, width: number}}
 */
const sketch = {
  height: window.innerHeight,
  width: window.innerWidth,
};

/**
 * Init the sketch object
 * @param width number of pixels of a sketch's screen width
 * @param height height of pixels of a sketch's screen height
 * @param baseWidth width in pixels used as 100%
 * @param baseHeight height in pixels used as 100%
 */
export const init = ({
  width, height,
  baseWidth = window.innerWidth, baseHeight = window.innerHeight,
}) => {
  sketch.width = width;
  sketch.height = height;
  baseValues.width = baseWidth;
  baseValues.height = baseHeight;
};

/**
 * Get the actual number of pixels used for width dimensions
 * @param widthValueInSketch width value in the sketch file to be converted
 * @param width width number of pixels of a sketch's screen width
 * @param baseWidth width in pixels used as 100%
 * @returns {number}
 */
export const getWidthValue = (widthValueInSketch,
  { width } = sketch,
  { width: baseWidth } = baseValues) => widthValueInSketch / width * baseWidth;

/**
 * Get the actual number of pixels used for height dimensions
 * @param heightValueInSketch height value in the sketch file to be converted
 * @param height height number of pixels of a sketch's screen height
 * @param baseHeight width in pixels used as 100%
 * @returns {number}
 */
export const getHeightValue = (heightValueInSketch,
  { height } = sketch,
  { height: baseHeight } = baseValues) => heightValueInSketch / height * baseHeight;


export default {
  getWidthValue,
  getHeightValue,
  init,
};
