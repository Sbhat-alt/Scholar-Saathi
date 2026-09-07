import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App element not found')
}

app.innerHTML = `
  <div class="page">
    <header class="navbar">
      <div class="logo">
        <span class="logo-mark">S</span>
        <span>ScholarSaathi</span>
      </div>

      <button class="nav-button">How it works</button>
    </header>

    <main class="hero">
      <div class="badge">🎓 Built for Indian students</div>

      <h1>
        Your scholarship journey,
        <span>without the maze.</span>
      </h1>

      <p class="subtitle">
        Find scholarships you actually qualify for,
        understand what you need, and never miss a deadline.
      </p>

      <button class="primary-button" id="findButton">
        Find my scholarships →
      </button>

      <p class="small-text">
        No Aadhaar. No complicated forms. Just start with you.
      </p>
    </main>

    <section class="features">
      <div class="feature-card">
        <div class="feature-icon">🔎</div>
        <h3>Find</h3>
        <p>Discover scholarships matched to your situation.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">✓</div>
        <h3>Understand</h3>
        <p>See eligibility requirements in plain language.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">⏰</div>
        <h3>Never miss</h3>
        <p>Keep track of deadlines and what you still need.</p>
      </div>
    </section>

    <div class="toast" id="toast">
      Let's find scholarships for you.
    </div>
  </div>
`

const findButton = document.querySelector<HTMLButtonElement>('#findButton')
const toast = document.querySelector<HTMLDivElement>('#toast')

findButton?.addEventListener('click', () => {
  toast?.classList.add('show')

  setTimeout(() => {
    toast?.classList.remove('show')
  }, 3000)
})