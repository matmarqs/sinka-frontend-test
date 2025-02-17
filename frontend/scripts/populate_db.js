const clients = [
{
  id: 1001,
  username: 'BalazsOrban',
  email: 'balazs@orban.com',
  password: '123456',
  active: false,
  createdAt: (new Date("2025-02-16T00:00:00.000Z")).toISOString(),
},
{
  id: 1002,
  username: 'EvilRabbit',
  email: 'evil@rabbit.com',
  password: '12345',
  active: true,
  createdAt: (new Date("2025-02-16T00:00:00.000Z")).toISOString(),
},
{
  id: 1003,
  username: 'MichaelNovotny',
  email: 'michael@novotny.com',
  password: '123456789',
  active: true,
  createdAt: (new Date("2023-09-10T00:00:00.000Z")).toISOString(),
},
{
  id: 1004,
  username: 'MichaelNovotny',
  email: 'michael@novotny.com',
  password: 'password',
  active: true,
  createdAt: (new Date("2023-09-10T00:00:00.000Z")).toISOString(),
},
{
  id: 1005,
  username: 'BalazsOrban',
  email: 'balazs@orban.com',
  password: '123456',
  active: false,
  createdAt: (new Date("2023-08-05T00:00:00.000Z")).toISOString(),
},
{
  id: 1006,
  username: 'Darkoaio',
  email: 'dark@orban.com',
  password: '123456',
  active: false,
  createdAt: (new Date("2023-08-05T00:00:00.000Z")).toISOString(),
},
{
  id: 1007,
  username: 'AAoaid',
  email: 'aaa@orban.com',
  password: '123456',
  active: false,
  createdAt: (new Date("2023-08-05T00:00:00.000Z")).toISOString(),
},
{
  id: 1008,
  username: 'isjAAa',
  email: 'oooo@oooo.com',
  password: '123456',
  active: false,
  createdAt: (new Date("2023-08-05T00:00:00.000Z")).toISOString(),
},
{
  id: 1009,
  username: 'isdjasi',
  email: 'isdaji@orban.com',
  active: false,
  password: '123456',
  createdAt: (new Date("2023-08-05T00:00:00.000Z")).toISOString(),
},
{
  id: 1010,
  username: 'Teste2',
  email: 'aaaa@aaaaaaa.com',
  password: '123456',
  active: false,
  createdAt: (new Date("2023-08-05T00:00:00.000Z")).toISOString(),
},
{
  id: 1011,
  username: 'TheTester',
  email: 'teste@teste.com',
  password: '123456',
  active: true,
  createdAt: (new Date("2023-07-05T00:00:00.000Z")).toISOString(),
}
];

for (let i = 0; i < clients.length; i++) {
  let client = clients[i];
  fetch("http://localhost:3333/client", {
    method: "POST",
    body: JSON.stringify({
      id: client.id,
      username: client.username,
      email: client.email,
      password: client.password,
      active: client.active,
      createdAt: client.createdAt,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
}
