import app from "./src/app.js";
const PORT = 8080;

app.listen(process.env.PORT || 8080, () => {
  console.log(`Servidor rodando na porta${PORT}`);
});
