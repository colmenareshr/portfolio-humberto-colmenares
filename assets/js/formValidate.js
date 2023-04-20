const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input ');
const mensagemSucessoForm = document.getElementById('mensagem__form-sucesso');
const mensagemErroForm = document.getElementById('mensagem__form-erro');

const exprecoes = {
  nome: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  email: /^\S+@\S+\.\S+$/,
};

const fields = {
  nome: false,
  email: false,
};

const validateForm = (e) => {
  switch (e.target.name) {
    case 'nome':
      validateInput(exprecoes.nome, e.target, 'nome');
      break;
    case 'email':
      validateInput(exprecoes.email, e.target, 'email');
      break;
  }
};

const validateInput = (exprecao, input, field) => {
  if (exprecao.test(input.value)) {
    document.getElementById(`input-${field}`).classList.remove('input-invalid');
    document.getElementById(`error-${field}`).classList.remove('erro-ativo');
    fields[field] = true;
  } else {
    document.getElementById(`input-${field}`).classList.add('input-invalid');
    document.getElementById(`error-${field}`).classList.add('erro-ativo');
    fields[field] = false;
  }

};

inputs.forEach((input) => {
  input.addEventListener('keyup', validateForm);
  input.addEventListener('blur', validateForm);
});


formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  if (fields.nome && fields.email) {
    formulario.reset();
    mensagemSucessoForm.classList.add('ativo');
    setTimeout(() => {
      mensagemSucessoForm.classList.remove('ativo');
    }, 5000);
  } else {
    mensagemErroForm.classList.add('ativo-erro');
    setTimeout(() => {
      mensagemErroForm.classList.remove('ativo-erro');
    }, 5000);
  }
});
