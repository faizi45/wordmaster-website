import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1 className="logo">📚 WordMaster</h1>
          <p className="tagline">Vocabulary Builder</p>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="container">
            <h2 className="hero-title">Master New Words Every Day</h2>
            <p className="hero-description">
              A powerful vocabulary app designed to help you learn new words, 
              improve English vocabulary, and boost language skills.
            </p>
            <a 
              href="https://play.google.com/store/apps/details?id=com.wordmaster.vocabularybooster"
              target="_blank"
              rel="noopener noreferrer"
              className="download-button"
            >
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                alt="Get it on Google Play"
                className="play-store-badge"
              />
            </a>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h3 className="section-title">Key Features</h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📖</div>
                <h4>Save & Organize</h4>
                <p>Easily save and organize new words for quick reference</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h4>Learn Definitions</h4>
                <p>Review definitions and examples to understand word usage</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h4>Smart Repetition</h4>
                <p>Memorize vocabulary faster with intelligent repetition</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h4>Build Skills</h4>
                <p>Perfect for students, professionals, and language learners</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🧠</div>
                <h4>Improve Memory</h4>
                <p>Enhance your memory and master words every day</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h4>Boost Vocabulary</h4>
                <p>Expand your English vocabulary and language skills</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="container">
            <h3 className="section-title">About the App</h3>
            <p className="about-text">
              WordMaster – Vocabulary Booster is designed for anyone looking to expand 
              their English vocabulary. Whether you're a student preparing for exams, 
              a professional enhancing communication skills, or a language enthusiast, 
              this app helps you learn and retain new words effectively.
            </p>
            <div className="app-info">
              <div className="info-item">
                <strong>Category:</strong> Education
              </div>
              <div className="info-item">
                <strong>Developer:</strong> AI Sentinel Studios
              </div>
              <div className="info-item">
                <strong>Content Rating:</strong> 3+
              </div>
              <div className="info-item">
                <strong>Updated:</strong> February 13, 2026
              </div>
            </div>
          </div>
        </section>

        <section className="privacy">
          <div className="container">
            <h3 className="section-title">Privacy & Security</h3>
            <div className="privacy-features">
              <div className="privacy-item">
                <span className="checkmark">✓</span>
                <p>No data shared with third parties</p>
              </div>
              <div className="privacy-item">
                <span className="checkmark">✓</span>
                <p>No data collected from users</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <h3 className="cta-title">Ready to Boost Your Vocabulary?</h3>
            <a 
              href="https://play.google.com/store/apps/details?id=com.wordmaster.vocabularybooster"
              target="_blank"
              rel="noopener noreferrer"
              className="download-button"
            >
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                alt="Get it on Google Play"
                className="play-store-badge"
              />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 AI Sentinel Studios. All rights reserved.</p>
          <p className="footer-links">
            <a href="https://play.google.com/store/apps/details?id=com.wordmaster.vocabularybooster" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            {' | '}
            <a href="https://play.google.com/store/apps/details?id=com.wordmaster.vocabularybooster" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
