// Substitua com os dados de Project Settings > API do seu Supabase
const SUPABASE_URL = 'https://saqixjekadycvnhjlhwr.supabase.co';
const SUPABASE_KEY = 'sb_publishable_o_Uop2YPSZxkEBdb8VLTBg_bXze4MN_';

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