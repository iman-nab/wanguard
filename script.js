// Kleine JS voor mobile menu, smooth scroll en fake form submit
const navToggle = document.getElementById('navToggle')
const mainNav = document.getElementById('mainNav')
const yearSpan = document.getElementById('year')
const sendBtn = document.getElementById('sendBtn')

yearSpan.textContent = new Date().getFullYear().toString()

navToggle?.addEventListener('click', () => {
  const show = mainNav.style.display === 'flex'
  mainNav.style.display = show ? 'none' : 'flex'
})

// Smooth scroll voor ankerlinks
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href')?.slice(1)
    if(!id) return
    const el = document.getElementById(id)
    if(el){
      e.preventDefault()
      window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
      if (window.innerWidth < 681) mainNav.style.display = 'none'
    }
  })
})

// Demo "verstuurd" melding (geen backend)
sendBtn?.addEventListener('click', () => {
  alert('Bedankt! We nemen zo snel mogelijk contact met u op.')
})
