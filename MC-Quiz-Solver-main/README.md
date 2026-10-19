# 🚀 MC Quiz Solver - Batch Solving for Graded Assignments

A powerful Chrome extension that automatically solves Coursera quiz assignments using AI. Now with **Batch Solve** feature for graded assignments!

**Created by:** Mohan Chandra  
**Repository:** https://github.com/Mohan0621/Quiz-solver

---

## ✨ Features

### Core Features
- ✅ **Instant Quiz Solving** - Automatically detects and answers quiz questions
- ✅ **Single Question Solving** - Solve individual questions on demand
- ✅ **Auto-Submit** - Optionally auto-submit quizzes after solving
- ✅ **Subroutine Automation** - Skip videos, readings, discussions, plugins
- ✅ **Dark Mode** - Light/Dark theme support
- ✅ **Multiple AI Providers** - Groq (LPU) or Google Gemini

### 🔥 NEW: Batch Solve Feature
- 🎯 **Batch Solve Graded Assignments** - Automatically detect and solve all graded assignments in sequence
- 📊 **Progress Tracking** - Real-time progress notifications
- ⏱️ **Smart Throttling** - Prevents API rate limiting
- 🔒 **Graded Only** - Only targets graded assignments, not practice/optional quizzes
- ⚡ **Fast Processing** - Process multiple assignments without manual intervention

---

## 🛠️ Installation

### Requirements
- Google Chrome/Chromium browser
- Coursera account
- API Key from Groq or Google Gemini

### Steps

1. **Download the extension**
   ```bash
   git clone https://github.com/Mohan0621/Quiz-solver.git
   cd Quiz-solver
   ```

2. **Load in Chrome**
   - Open `chrome://extensions/`
   - Enable "Developer mode" (top right)
   - Click "Load unpacked"
   - Select the project folder

3. **Configure API Key**
   - Click extension icon
   - Go to Settings ⚙️
   - Select AI provider (Groq recommended for speed)
   - Paste your API key
   - Click "Validate & Save"

### Get API Keys

**Groq API (Recommended)**
- Visit: https://console.groq.com
- Free tier: Generous rate limits, ultra-fast (~280ms)
- Create API key
- Copy and paste in extension settings

**Google Gemini API**
- Visit: https://ai.google.dev
- Free tier available
- Create API key
- Copy and paste in extension settings

---

## 📖 Usage

### Solve Current Quiz
1. Navigate to a Coursera quiz
2. Click extension icon
3. Click **"Solve This Quiz"** button
4. AI automatically detects and answers all questions
5. Review answers
6. Click "Submit" manually or enable Auto-Submit

### Solve Single Question
1. Click any quiz question to make it visible
2. Click extension icon
3. Click **"Solve Question"** button
4. AI answers only the currently visible question

### 🔥 Batch Solve Graded Assignments (NEW!)

#### Prerequisites
- Be on a Coursera course page or assignments list
- Extension must detect graded assignments automatically

#### How to Use
1. Navigate to your course or assignments page
2. Click extension icon
3. Click **"Batch Solve Assignments"** button
4. Extension will:
   - 🎯 Detect all graded assignments
   - 📑 Filter out practice/optional quizzes
   - 🔄 Solve each assignment sequentially
   - 📊 Show real-time progress
   - ✅ Submit each assignment automatically (if enabled)

#### Batch Solver Settings
- **Batch Solve Enabled**: Toggle batch solving on/off
- **Graded Only**: Always target graded assignments (checked by default)

#### Progress Notifications
- "🚀 Solving 1/5..." - Currently solving assignment 1 of 5
- "✅ Batch Complete: 5/5 solved in 42s" - All done!

#### What Gets Detected
The batch solver automatically detects:
- Graded quizzes (marks with "graded" badge)
- Graded assignments (from /assignment-submission/)
- Graded exams (from /exam/)
- Excludes: Practice quizzes, optional assignments, ungraded content

---

## ⚙️ Settings & Configuration

### AI Engine Setup
- **Inference Provider**: Choose Groq or Gemini
- **API Key**: Encrypted locally (AES-GCM)
- **Model Selection**: Auto-detected or manually set

### Coursera Automation
- **Auto-Solve Quizzes**: Automatically solve when visiting quiz page
- **Auto-Submit**: Automatically submit after solving
- **Skip Videos**: Skip video completions
- **Skip Readings**: Skip reading materials
- **Skip Discussion**: Skip discussion posts
- **Skip Plugins**: Skip plugin content

---

## 🔒 Security & Privacy

- ✅ **Encrypted Storage**: API keys stored locally with AES-GCM encryption
- ✅ **No External Analytics**: No data tracking or telemetry
- ✅ **Local Processing**: All computation done locally
- ✅ **No Account Access**: Extension doesn't store credentials
- ✅ **API Keys are Your Responsibility**: Secure your API keys properly

---

## 🐛 Troubleshooting

### "API Key is missing"
- Go to extension Settings ⚙️
- Select your AI provider
- Paste a valid API key
- Click "Validate & Save"

### "No graded assignments found"
- Make sure you're on a course page or assignments list
- Graded assignments must have a "graded" badge or be from /assignment-submission/
- Refresh page and try again

### "Batch solver not responding"
- Refresh the Coursera page
- Try solving a single quiz first to verify API key works
- Check browser console for errors (F12)
- Ensure you're on Coursera.org

### Extension not loading
- Clear Chrome cache: Settings > Privacy > Clear browsing data
- Reload extension: chrome://extensions > Reload icon
- Try fresh installation

### Slow solving or timeouts
- Check your internet connection
- Try Groq provider (faster than Gemini)
- Reduce batch size (solve fewer assignments at once)

---

## 📊 Performance Metrics

| Metric | Value |
|--------|-------|
| Single Quiz Solve Time | ~2-5 seconds |
| API Response Time (Groq) | ~280ms |
| Batch Processing Speed | ~30-60 seconds per 5 assignments |
| API Rate Limit (Groq Free) | Very generous |

---

## 📝 How It Works

### Architecture
1. **Content Script** (`content.js`) - Detects quiz elements on Coursera
2. **Batch Solver** (`batch-solver.js`) - Identifies graded assignments
3. **Background Worker** (`background.js`) - Routes AI queries
4. **Popup UI** (`popup.html/js`) - User interface and controls

### Question Detection
- Finds quiz containers using selectors (`.rc-Question`, `[data-testid="part-Submission_Part"]`, etc.)
- Extracts question text and options
- Preserves math formulas and rich text
- Normalizes question structure

### AI Solving Process
1. Format questions into structured prompt
2. Send to Groq/Gemini API
3. Receive JSON with answers and confidence scores
4. Inject answers into form fields
5. Auto-submit (optional)

### Batch Solving Process
1. Detect all graded assignments on page
2. For each assignment:
   - Navigate to assignment URL
   - Wait for page to load
   - Trigger auto-solve
   - Submit automatically
3. Report progress in real-time
4. Display completion summary

---

## 📚 API Reference

### Messages from Popup to Content Script
```javascript
// Check if batch solver is ready
{ action: 'check_batch_solver' }

// Initialize batch solver
{ action: 'init_batch_solver' }

// Start batch solving
{ action: 'start_batch_solver' }

// Check auto-solve settings
{ action: 'solve_quiz', batchMode: true }
```

### Messages from Content Script to Popup
```javascript
// Progress update
{ action: 'batch_progress', current: 1, total: 5, solved: 0, failed: 0 }

// Completion
{ action: 'batch_complete', solved: 5, failed: 0, total: 5, duration: 42 }
```

---

## 🤝 Contributing

Found a bug? Want to suggest a feature?

1. Test thoroughly on your Coursera course
2. Document the issue clearly
3. Include:
   - Quiz type (graded/practice/exam)
   - Question types affected
   - Expected vs actual behavior
   - Steps to reproduce

---

## 📜 License

This project is provided as-is. Use at your own risk and in accordance with Coursera's terms of service.

**Legal Notice:** This tool is intended for educational purposes. Users are responsible for:
- Compliance with Coursera academic integrity policies
- Proper use in authorized courses
- Not using on proctored or honor-code exams without permission
- Understanding local educational regulations

---

## ⚡ Tips & Tricks

### Best Practices
1. **Review before submitting** - Always verify answers seem reasonable
2. **Test on practice first** - Try on ungraded quiz first
3. **Monitor progress** - Watch toast notifications for status
4. **Use batch during off-peak** - Less likely to hit rate limits
5. **Enable auto-submit carefully** - Make sure extension works correctly first

### Advanced
- Multiple API key rotation (advanced users)
- Custom model selection via storage
- Debug logging (disable console muting in code)

---

## 🙋 FAQ

**Q: Is this against Coursera's terms?**
A: Using automated tools may violate Coursera's academic integrity policy. Only use on non-proctored, allowed quizzes.

**Q: Will my account get flagged?**
A: Coursera's detection systems may flag unusual solving patterns. Use responsibly.

**Q: Can I use this on all quizzes?**
A: Only on non-proctored quizzes. Proctored exams require different setup.

**Q: How much does it cost?**
A: Free! Just need a free API key from Groq or Gemini.

**Q: Why Groq instead of Gemini?**
A: Groq is 10x faster (~280ms vs ~2000ms) and has better free tier limits.

---

## 📞 Support

- **GitHub Issues**: https://github.com/Mohan0621/Quiz-solver/issues
- **Documentation**: See this README
- **Settings**: Extension popup provides inline help

---

## 🎉 Credits

**Created by:** Mohan Chandra  
**Features:**
- Batch Solver for Graded Assignments (v2.1.0)
- Subroutine Automation
- Multi-provider AI support
- Dark mode
- Secure API key storage

**Special thanks to:**
- Groq for ultra-fast LPU inference
- Google for Gemini API
- Coursera for the platform

---

**Version:** 2.1.0  
**Last Updated:** October 2026  
**Status:** Active & Maintained

---

Made with ❤️ by Mohan Chandra
