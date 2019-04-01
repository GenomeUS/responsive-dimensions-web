
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
 */
export const init = ({ width, height }) => {
  sketch.width = width;
  sketch.height = height;
};

/**
 * Get the actual number of pixels used for width dimensions
 * @param widthValueInSketch width value in the sketch file to be converted
 * @param width width number of pixels of a sketch's screen width
 * @returns {number}
 */
export const getWidthValue = (widthValueInSketch, {
  width,
} = sketch) => widthValueInSketch / width * window.innerWidth;

/**
 * Get the actual number of pixels used for height dimensions
 * @param heightValueInSketch height value in the sketch file to be converted
 * @param height height number of pixels of a sketch's screen height
 * @returns {number}
 */
export const getHeightValue = (heightValueInSketch, {
  height,
} = sketch) => heightValueInSketch / height * window.innerHeight;


export default {
  getWidthValue,
  getHeightValue,
  init,
};
