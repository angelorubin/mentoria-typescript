const btnSearch = document.querySelector("#search") as HTMLButtonElement;
const api_key: string = "cb455257e52a24733cdc4ae9e73d82e2";
const lang = "pt-br";

async function searchMovie(query: string) {
	query = encodeURI(query);

	const result = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&language=${lang}`,
		{ method: "GET" }
	);

	const data = await result.json();

	return data;
}

const createMovieList = async (list: any) => {
	console.log(list);

	let listContainer = document.querySelector(
		".list-container"
	) as HTMLDivElement;
	let ul = document.createElement("ul");
	ul.style.listStyle = "none";

	listContainer.innerHTML = "";
	ul.id = "list";
	ul.style.padding = "0";

	for (const item of [...list]) {
		let li = document.createElement("li");

		li.style.margin = "0.5rem";
		const title = document.createTextNode(item.original_title);
		li.appendChild(title);
		ul.appendChild(li);
	}

	listContainer.appendChild(ul);
};

if (btnSearch) {
	btnSearch.addEventListener("click", async () => {
		const movieTitle = document.querySelector(
			"#movie-title"
		) as HTMLInputElement;
		if (movieTitle) {
			const { value } = movieTitle;
			// console.log(value);
			const { results } = await searchMovie(value);
			await createMovieList(results);
		}
	});
}
