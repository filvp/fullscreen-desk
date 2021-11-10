// Единица измерения — 1 = 10% от минимального размера изображения (высота, ширина)
// Пример — (top: 0.3), 0.3 это получается 3% от высоты или ширины экрана.
// Пример — (border — size: [10, 10, 10, 10]), это получается стандартный размер рамки 10% от высоты или ширины экрана.

var inimage = {
	format: "frame", // "bar", frame
	border: {
		size: [8, 8, 8, 8],
		backgroundColor: {
			is_show: true,
			color: "#FECAAB"
		},
		backgroundGradient: {
			is_show: false,
			deg: 45,
			color: ["#cfab67", "#92622b"],
		},
		backgroundImage: {
			is_show: false,
			image: "background.png",
			repeat: "no-repeat",
			position: [50, 50], // Пример: 50% по X координате, 50% по Y координате;
			size: "cover", //"cover", "contain", "50%"
		},
	},
	logo: {
		is_show: true,
		src: "logo.png",
		height: 1,
		top: 0.1, // bottom: 0, top: 0
		left: 0.1, // left: 0, right: 0
		is_center: false,
		is_click: false,
		zIndex: 150,
	},
	elements: [
		{	
			is_show: false,
			format: "image", // image, block
			src: "element.png",
			height: 70,
			bottom: 0,
			right: 0,
			is_center: true,
			zIndex: 1,
		},
		{
			is_show: false,
			format: "block", // image, block
			bottom: 0,
			right: 0,
			is_center: true,
			height: 85.05, // У блока высота идёт по потношению к канвасу в %.
			zIndex: 1,
			backgroundColor: {
				is_show: true,
				color: "#10151e"
			},
			backgroundGradient: {
				is_show: false,
				deg: 45,
				color: ["#10151e", "#313742"],
			},
		},
	],
	signature: {
		is_show: true,
		color: "#eed698",
		height: 0.20,
		top: 0.5, // bottom: 0, top: 0
		right: 1, // left: 0, right: 0
		zIndex: 150,
	},
	canvas: "center", // canvas: "left", canvas: "center", canvas: "right"
}