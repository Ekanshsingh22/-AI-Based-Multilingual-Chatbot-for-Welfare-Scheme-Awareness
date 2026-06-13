# Deliverable 1: User-Flow Persona Diagrams

This document contains the user profiles and conversational logic mappings for the three representative target personas of **JanSeva AI**.

---

## Persona 1: Ramesh Prasad (Farmer)
* **Background**: 48-year-old traditional farmer in a village near Patna, Bihar. Owns 1.5 acres of agricultural land.
* **Tech Literacy**: Uses a basic Android smartphone, primarily for voice messages. Struggles with text-heavy English/Hindi government portals.
* **Goals**: Secure agricultural subsidies and health insurance cover for his household.

```mermaid
graph TD
    Start([User Initiates Chat: 'kisan help']) --> LangCheck{Language Selector}
    LangCheck -->|English/Hindi Mix| DetectHinglish[Detect Hinglish Input]
    DetectHinglish --> InitGuided[Start Guided Flow: Age]
    InitGuided --> GetAge[User Inputs Age: 48]
    GetAge --> AskGender[Agent Asks Gender]
    AskGender --> GetGender[User Inputs Gender: Male]
    GetGender --> AskJob[Agent Asks Occupation]
    AskJob --> GetJob[User Selects: Farmer]
    GetJob --> AskIncome[Agent Asks Income]
    AskIncome --> GetIncome[User Inputs Income: 90,000/yr]
    GetIncome --> AskLand[Agent Asks Land Ownership]
    AskLand --> GetLand[User Selects: Yes]
    
    GetLand --> MatchEngine[RAG Eligibility Engine]
    MatchEngine --> Match1[Match: PM-KISAN - ₹6,000/yr]
    MatchEngine --> Match2[Match: Ayushman Bharat - ₹5L Cover]
    MatchEngine --> Match3[Match: MGNREGA - 100 Days Work]
    
    Match1 & Match2 & Match3 --> UnionDocs[Union Document Extraction]
    UnionDocs --> OutputChecklist[Output Localized Checklist:\n1. Land Patta\n2. Aadhaar Card\n3. Bank Passbook\n4. BPL Ration Card]
    OutputChecklist --> Actions[Actions: Download PDF / Send SMS]
```

---

## Persona 2: Sunita Devi (Woman Head-of-Household)
* **Background**: 36-year-old widow and domestic helper in suburban Coimbatore, Tamil Nadu. Sole breadwinner for three children, including a pregnant 19-year-old daughter.
* **Tech Literacy**: Basic smartphone user, uses WhatsApp for family calls. Fluent only in spoken Tamil.
* **Goals**: Secure clean cooking gas and financial maternity benefits for her daughter.

```mermaid
graph TD
    Start([User Initiates Chat: 'கர்ப்பிணி உதவி' - Pregnant Aid]) --> LangCheck{Language Selector}
    LangCheck -->|Tamil| LoadTamil[Load Tamil Lang Engine]
    LoadTamil --> ProfileExtract[Extract Implicit Query Intent]
    ProfileExtract --> DetectPMMVY[Map to PMMVY / Ujjwala]
    DetectPMMVY --> InitQuestions[Guided Questions in Tamil]
    
    InitQuestions --> GetAge[Verify Daughter's Age: 19]
    GetAge --> GetIncome[Verify Family Income: 75,000/yr]
    GetIncome --> GetGender[Confirm Gender: Female]
    
    GetGender --> MatchEngine[RAG Eligibility Engine]
    MatchEngine --> Match1[Match: PMMVY - ₹5,000 Cash Incentive]
    MatchEngine --> Match2[Match: PM Ujjwala Yojana - Free Gas]
    MatchEngine --> Match3[Match: Ayushman Bharat - Free Medical]
    
    Match1 & Match2 & Match3 --> UnionDocs[Union Document Extraction]
    UnionDocs --> OutputChecklist[Tamil Output Checklist:\n1. தாய் சேய் பாதுகாப்பு அட்டை (MCP Card)\n2. தாயின் ஆதார் அட்டை\n3. வங்கி புத்தக நகல்\n4. கணவர் ஆதார் அட்டை]
    OutputChecklist --> Actions[Actions: SMS / Local Anganwadi Guidance]
```

---

## Persona 3: Amit Kumar (Gig Worker)
* **Background**: 24-year-old food delivery rider in Outer Delhi. High-school graduate.
* **Tech Literacy**: Comfortable using smartphones and apps, but has no employer health coverage or social security.
* **Goals**: Secure a loan to buy a delivery motorcycle and establish a retirement savings fund.

```mermaid
graph TD
    Start([User Query: 'Zomato delivery rider pension schemes']) --> LangCheck{Language Selector}
    LangCheck -->|Hinglish| MapGigWorker[Map 'rider/delivery' to 'Gig Worker']
    MapGigWorker --> LoadHinglishRules[Process Gig-Economy Rules]
    
    LoadHinglishRules --> GetAge[User Age: 24]
    GetAge --> GetIncome[User Income: 1,60,000/yr]
    GetIncome --> GetLand[User Land Ownership: No]
    
    GetLand --> MatchEngine[RAG Eligibility Engine]
    MatchEngine --> Match1[Match: PM Shram Yogi Maan-dhan - ₹3,000/mo Pension]
    MatchEngine --> Match2[Match: Atal Pension Yojana - APY]
    MatchEngine --> Match3[Match: PM Mudra Yojana - Shishu Loan]
    
    Match1 & Match2 & Match3 --> UnionDocs[Union Document Extraction]
    UnionDocs --> OutputChecklist[Output Document Checklist:\n1. Aadhaar Card\n2. Bank Account with IFSC\n3. Auto-debit Consent Form\n4. Business/Delivery Proof]
    OutputChecklist --> Actions[Actions: Map to Nearest CSC Kendra]
```
