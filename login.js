function handleLogin(event){
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  errorMsg.classList.remove('show');
  errorMsg.textContent = '';

  if(username.length < 2){
    errorMsg.textContent = 'تکایە ناوی بەکارهێنەر بنووسە.';
    errorMsg.classList.add('show');
    return false;
  }

  if(password.length < 3){
    errorMsg.textContent = 'وشەی نهێنی زۆر کورتە.';
    errorMsg.classList.add('show');
    return false;
  }

  // ---------------------------------------------------------------
  // NOTE: This is a front-end-only demo. Connect this to your real
  // backend/auth API, for example:
  //
  // fetch('/api/login', {
  //   method: 'POST',
  //   headers: {'Content-Type': 'application/json'},
  //   body: JSON.stringify({ username, password })
  // })
  // .then(res => res.json())
  // .then(data => {
  //   if(data.success){ window.location.href = 'dashboard.html'; }
  //   else { errorMsg.textContent = data.message; errorMsg.classList.add('show'); }
  // });
  // ---------------------------------------------------------------

  alert('چوونەژوورەوە سەرکەوتوو بوو! (پێویستە بە باکئێندێک بەستراوە بێت)');

  return false;
}
