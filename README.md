# JanSeva AI - Multilingual Welfare Chatbot & Impact Hub

JanSeva AI is an interactive, low-bandwidth, multilingual conversational assistant and dashboard built to address **Challenge 1.1 — AI-Based Multilingual Chatbot for Welfare Scheme Awareness** under the **NSS Open Projects 2026** brochure.

It helps rural and unorganized citizens discover welfare schemes they are eligible for, provides a checklist of required documents, and maps potential local economic impact for district administrations and NGOs.

## 🚀 Live Production Demo
Click here to access the live deployed application:  
👉 **[https://ai-based-multilingual-chatbot-for-w.vercel.app/](https://ai-based-multilingual-chatbot-for-w.vercel.app/)**

---

## 🌟 Key Features

1. **Multilingual Interface & Conversational Engine**
   * Supports **English**, **Hindi (हिन्दी)**, and **Tamil (தமிழ்)**.
   * Instantly translates the entire dashboard interface and chatbot conversations on selection.
   * Handles code-mixed inputs (such as Hinglish: *"Mera Aadhaar card link kaise kare?"*).

2. **RAG-Grounded Eligibility Matching**
   * Uses a rule-based matching engine grounded in a structured database (`schemes.json`) containing 10 high-impact Indian welfare schemes (PM-KISAN, Ayushman Bharat, PMAY, PMUY, MGNREGA, SSY, PM-SYM, PMMVY, PMMY, APY).
   * Restricts hallucinations by evaluating profile parameters directly (Age, Gender, Occupation, Income, Land Ownership) and citing specific eligibility rules in responses.

3. **Low-Bandwidth (2G/3G) Adaptability**
   * Features a simulated **2G Bandwidth Mode** that compresses text-heavy dialogues into numbered choice options, optimizing data payload size and ensuring quick response times on slower networks.
   * Simulated speech-to-text voice notes facilitate accessibility for low-literacy users.

4. **Required Document Checklist Generator**
   * Automatically generates a consolidated list of documents required across all matched eligible schemes.
   * Supports simulated **PDF Checklist Download** and **SMS Dispatch**.

5. **Integrated Persona Journey Viewer**
   * Preloads chat transcripts and traces step-by-step reasoning logic for 3 target personas:
     * **Ramesh Prasad**: Rural farmer looking for agricultural subsidies.
     * **Sunita Devi**: Tamil-speaking domestic helper seeking maternity and cooking gas assistance.
     * **Amit Kumar**: Urban gig delivery agent seeking microfinance loans and pension cover.

6. **Pilot Test Report Dashboard**
   * Visualizes field performance metrics from a 12-user village/community pilot.
   * Achieved **83.3% Flow Completion Rate** and **1.8s Median Latency** under simulated low bandwidth.

7. **District-Level Impact Projection Calculator**
   * Features adjustable sliders for population size, baseline awareness, uplift rate, and average benefit value.
   * Dynamic calculations display total families reached, direct capital unlocked (in Crores ₹), and CapEx/OpEx investment payback periods.

---

## 📂 File Structure

```text
nss/
├── index.html                     # Core dashboard structural layout
├── index.css                      # Custom dark/light theme styling & responsive grid
├── app.js                         # Application controller & eligibility math
├── schemes.json                   # Structured welfare schemes database (10 schemes)
├── README.md                      # Project setup and overview (This file)
├── user_flow_diagrams.md          # Visual persona workflow mappings (Mermaid)
├── pilot_test_report.md           # Field pilot study metrics & analysis
├── impact_projection_report.md    # 2-Page economic analysis & ROI math
├── janseva_dashboard_mockup_...png # UI mockup visualization
└── NSS OPEN PROJECTS 2026.pdf     # Original challenge brochure
```

---

## 🛠️ Production Architecture & Stack

For real-world deployment, the prototype is designed to transition to the following stack:
* **Frontend**: Twilio WhatsApp Business Cloud API / WhatsApp Sandbox (low-cost messaging).
* **NLP & Translation**: **Bhashini API** (Government of India translation portal) & **AI4Bharat IndicTrans2** for local dialects pre-processing.
* **Backend Logic**: FastAPI server hosting a retrieval-augmented generation (RAG) pipeline.
* **LLM Engine**: Gemini 1.5 Flash behind a **LlamaIndex** / **LangChain** structure to ground responses in `MyScheme.gov.in` crawled data.

---

## 🚀 How to Run Locally

Since this app is built using vanilla Web standards (HTML5, CSS3, JavaScript), it can be run locally on any device without external npm dependencies.

### Method 1: Python Local Server (Recommended)
1. Open PowerShell or Command Prompt.
2. Navigate to the project folder.
3. Run the following command:
   ```bash
   python -m http.server 8000
   ```
4. Open your web browser and go to: **`http://localhost:8000`**

### Method 2: Open HTML File Directly
* Simply double-click **`index.html`** in your file manager to open it in Chrome, Edge, or Safari. *(Note: If schemes.json fails to load due to browser CORS policies, the app automatically fails-safe and loads the embedded database copy in app.js).*

---

## ☁️ Deployment on Vercel

This website is hosted on **Vercel** as a static site. To deploy changes or host your own version:

1. Push your code files to a GitHub, GitLab, or Bitbucket repository.
2. Go to **[Vercel](https://vercel.com/)** and log in.
3. Click **Add New** -> **Project**.
4. Import your repository.
5. In the configuration window:
   * Keep **Framework Preset** as *Other* (for pure HTML/CSS/JS).
   * Leave build and output settings as default.
6. Click **Deploy**. Vercel will build and assign a domain name automatically, deploying updates on every push.
