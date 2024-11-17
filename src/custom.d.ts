declare module '*.svg' {
	const content: Element<React.SVGAttributes>;
	export default content;
}
declare module '*.scss' {
	const content: {
	   [className: string]: string
	};
	export = content;
}