// Como podemos melhorar o esse código usando TS?

enum Profissao {
  Atriz,
  Padeiro,
  FrontendDeveloper,
}

type Ente = {
  nome: string;
  idade: number;
  profissao: Profissao;
};

let pessoa1: Ente = {
  nome: "angelo",
  idade: 45,
  profissao: Profissao.Atriz,
};

pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.Atriz;

let pessoa2: Ente = {
  nome: "roberto",
  idade: 19,
  profissao: Profissao.Padeiro,
};

pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.Padeiro;

let pessoa3: Ente = {
  nome: "laura",
  idade: 32,
  profissao: Profissao.Atriz,
};

let pessoa4: Ente = {
  nome: "carlos",
  idade: 19,
  profissao: Profissao.Padeiro,
};
