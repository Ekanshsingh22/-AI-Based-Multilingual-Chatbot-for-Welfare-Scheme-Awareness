# Deliverable 3: 2-Page Impact Projection & ROI Analysis

**Prepared For**: District Administrations, NGOs, and Department of Social Welfare  
**Project Focus**: Closing the Welfare Enrollment Gap through Low-Bandwidth Generative Conversational Agents

---

## Page 1: Problem Definition & Demographic Baseline

### 1. The Last-Mile Delivery Bottleneck
India runs over 950 central and state-level welfare entitlements. However, a 2023 NITI Aayog field study identified that **fewer than 40%** of eligible rural beneficiaries succeed in enrolling in the schemes they qualify for. The bottleneck is not policy design, but **information asymmetry**:
* **Language Barriers**: Government portals are primarily English/Hindi-only, leaving regional dialect speakers isolated.
* **Low Literacy & Intimidating Documents**: Complex terms and legalistic documentation checklists lead to drop-offs.
* **Bandwidth & Devices**: Rural users often operate on 2G/3G connections or basic keypad feature phones, which crash under rich-web portals.

Closing this awareness gap represents one of the highest-leverage social interventions in India today. Connecting a single farming family to their rightful benefits (such as PM-KISAN or Ayushman Bharat) can immediately prevent debt spirals and boost agricultural input capability.

### 2. Model Baseline: Target District Profile
To project the impact, we model a typical rural/semi-urban district in India:
* **Target Household Population ($P$)**: 100,000 families.
* **Current Baseline Awareness/Uptake ($A_{base}$)**: 40% (40,000 households currently enrolled).
* **Average Annual Benefit Value per Family ($V$)**: ₹8,500.
  * *Calculated Weight*: PM-KISAN (₹6,000) + Ayushman Bharat family premium equivalent (₹2,500) + subsidized cooking gas / PMAY building tranches.

---

## Page 2: Uptake Projections, Financial ROI & Social Value

### 3. Conversational Uplift Modeling
By deploying **JanSeva AI**—which is accessible via WhatsApp, SMS, and voice notes in regional languages—we project a conservative **20% uplift** in scheme uptake ($U_{lift}$) over a 12-month period, shifting enrollment from 40% to 60% of the eligible population.

#### Impact Equations:
$$\text{Additional Families Reached } (H_{new}) = P \times \left(\frac{U_{lift}}{100}\right) = 100,000 \times 0.20 = 20,000 \text{ households}$$

$$\text{Direct Capital Unlocked } (C_{total}) = H_{new} \times V = 20,000 \times ₹8,500 = ₹17.00 \text{ Crores annually}$$

| Metric | Baseline (Without Chatbot) | Year 1 Projection (With Chatbot) | Net Benefit |
| :--- | :---: | :---: | :---: |
| **Enrolled Households** | 40,000 | 60,000 | **+20,000 (50% increase)** |
| **Annual Financial Outlay Distributed** | ₹34.00 Crores | ₹51.00 Crores | **+₹17.00 Crores** |

---

### 4. Unit Economics & Deployment ROI
We model the deployment cost of hosting and promoting JanSeva AI across 50 Gram Panchayats / local health centers in the district.

#### A. Initial Capital Expenditure (CapEx)
* Setup of 50 local info kiosk booths (QR codes/tablets): ₹2,50,000
* System setup and database customization: ₹1,50,000
* local staff training (50 operators): ₹1,00,000
* **Total Setup Cost**: **₹5,00,000** (5 Lakhs)

#### B. Annual Operating Expenditure (OpEx)
* Cloud hosting (Serverless backend): ₹60,000/year
* Twilio WhatsApp Session API charges (simulated volume): ₹90,000/year
* **Total Operating Cost**: **₹1,50,000/year** (1.5 Lakhs)

#### C. Payback Period & Financial Return
$$\text{District ROI Ratio} = \frac{\text{Direct Capital Unlocked}}{\text{Total First-Year Cost}} = \frac{₹17,00,00,000}{₹6,50,000} \approx 261.5\text{x}$$

Supposing the system only operates at **10%** of its target projection (reaching 2,000 families instead of 20,000), it still unlocks **₹1.70 Crores** of welfare, offsetting its setup cost in **less than 11 days of district-wide deployment**.

---

### 5. Non-Financial Social Impact
* **Prevention of Medical-Debt Spirals**: Cashless secondary/tertiary cover (Ayushman Bharat) shields families from predatory informal lending during medical emergencies.
* **Girl Child Security**: Enrolling families into **Sukanya Samriddhi Yojana** early ensures compound interest savings that guarantee funding for secondary education, reducing female school drop-out rates.
* **Informal Financial Inclusions**: Directing unorganized workers (PM-SYM / Mudra) into formal channels establishes creditworthiness, enabling micro-business expansions.
