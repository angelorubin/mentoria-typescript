// Como podemos melhorar o esse código usando TS?

enum Profissoes {
	Atriz,
	Padeiro,
	FrontendDeveloper,
}

type Ente = {
	nome: string;
	idade: number;
	profissao: Profissoes;
};

let pessoa1: Ente = {
	nome: "angelo",
	idade: 45,
	profissao: Profissoes.FrontendDeveloper,
};

pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissoes.Atriz;

let pessoa2: Ente = {
	nome: "paulo",
	idade: 26,
	profissao: Profissoes.Padeiro,
};

pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissoes.Padeiro;

let pessoa3: Ente = {
	nome: "laura",
	idade: 32,
	profissao: Profissoes.Atriz,
};

let pessoa4: Ente = {
	nome: "carlos",
	idade: 19,
	profissao: Profissoes.Padeiro,
};
