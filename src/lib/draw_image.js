/**
 * Draw image on canvas
 * @param {object} options
 * @param {object} options.canvas - HTMLCanvasElement
 * @param {string} options.imageSrc - path to image
 * @param {string} options.setSize - resize canvas before draw an image
 * @param {number} [options.x = 0] - the x-axis coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context
 * @param {number} [options.y = 0] - the y-axis coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context
 * @return {undefined}
 */
export function drawImage({
	canvas,
	imageSrc,
	setSize = false,
	x = 0,
	y = 0
} = {}) {
	const ctx = canvas.getContext('2d');
	const img = new Image();
	img.src = imageSrc;
	img.addEventListener('load', () => {
		console.log(`Img width: ${img.width}, img height: ${img.height}`);
		if (setSize) {
			ctx.canvas.width = img.width;
			ctx.canvas.height = img.height;
		}
		ctx.drawImage(img, x, y, img.width, img.height);
	});
}
