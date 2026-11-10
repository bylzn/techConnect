// Substitua com os dados de Project Settings > API do seu Supabase
const SUPABASE_URL = 'https://SUA_URL_DO_SUPABASE.supabase.co';
const SUPABASE_KEY = 'SUA_CHAVE_ANON_PUBLIC';

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
const form = document.getElementById('form-inscricao');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const tipoIngresso = document.querySelector('input[name="op"]:checked')?.value || 'presencial';

  // Grava na tabela 'usuarios' no Supabase
  const { error } = await _supabase
    .from('usuarios')
    .insert([{ nome, email, ingresso: tipoIngresso }]);

  if (error) {
    alert('Erro ao realizar inscrição: ' + error.message);
  } else {
    alert('Inscrição enviada para o banco com sucesso!');
    form.reset();
  }
});