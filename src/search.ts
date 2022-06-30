const btnSearch = document.querySelector("#search") as HTMLButtonElement;

async function searchMovie(query: string) {
	const api_key = "cb455257e52a24733cdc4ae9e73d82e2";
	query = encodeURI(query);

	const result = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`,
		{ method: "GET" }
	);

	const data = await result.json();

	return data;
}

const createMovieList = async (list: any) => {
	console.log(list);

	let listContainer = document.querySelector(
		"#list-container"
	) as HTMLDivElement;
	let ul = document.createElement("ul");

	listContainer.innerHTML = "";

	ul.id = "list";

	for (const item of [...list]) {
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(item.original_title));
		ul.appendChild(li);
	}

	listContainer.appendChild(ul);
};

btnSearch.addEventListener("click", async () => {
	const movieTitle = document.querySelector("#movie-title") as HTMLInputElement;
	const { value } = movieTitle;
	// console.log(value);
	const { results } = await searchMovie(value);
	await createMovieList(results);
});
