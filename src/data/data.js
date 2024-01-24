export const data = [
	{
		id: crypto.randomUUID(),
		title: "Connecting with API",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aliquid praesentium porro at temporibus ",
		tags: ["web", "react", "python"],
		priority: "Medium",
		isFavorite: false,
	},
	{
		id: crypto.randomUUID(),
		title: "React Web Development",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aliquid praesentium porro .",
		tags: ["ecommerce", "nextjs", "java"],
		priority: "Low",
		isFavorite: true,
	},
	{
		id: crypto.randomUUID(),
		title: "Learn NodeJS",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
		tags: ["game", "react", "javascript"],
		priority: "High",
		isFavorite: false,
	},
];

export const randomColors = [
	"#00D991A1",
	"#1C92FFB0",
	"#FE1A1AB5",
	"#BD560BB2",
	"#00B2D9CC",
	"#8407E6A8",
	"#07AC67D6",
	"#2F43F8BF",
	"#AE6D0BDB",
	"#10FBEDB2",
];

function getAllTasks() {
	return data;
}

export { getAllTasks };
