function handleClick() {
  alert('Welcome! Let\'s get started 🚀')
}

function submitContact() {
  const name = document.getElementById('nameInput').value

  if (name.trim() === '') {
    alert('Please enter your name!')
    return
  }

  const message = document.getElementById('message')
  message.textContent = `Thanks ${name}! I'll be in touch. 👋`
  message.classList.remove('hidden')
}