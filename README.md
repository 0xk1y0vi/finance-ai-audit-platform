<div align="center">

# 🚀 Finance AI Audit Platform (V1)

### AI-Assisted SOX Testing • Deterministic Validation • Automated Audit Reporting

![Status](https://img.shields.io/badge/Status-V1%20Complete-success?style=for-the-badge)
![Tests](https://img.shields.io/badge/Tests-8%2F8%20Passing-brightgreen?style=for-the-badge)
![n8n](https://img.shields.io/badge/Built%20With-n8n-orange?style=for-the-badge)
![Ollama](https://img.shields.io/badge/LLM-Ollama-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge)

---

### 🎯 Exploring AI-Assisted Audit & Compliance Automation

A proof-of-concept platform inspired by modern SOX testing workflows.

Instead of allowing an LLM to perform financial calculations directly, this system uses deterministic validation engines to perform all financial checks while AI agents focus exclusively on interpretation and audit reporting.

</div>

---

# 📖 Overview

The platform receives a finance request, routes it to the correct validator, performs deterministic business-rule validation, and generates a structured audit report.

```text
Request
   │
   ▼
Request Processing
   │
   ▼
Agent Routing
   │
   ▼
Deterministic Validation Engine
   │
   ▼
AI Reporting Layer
   │
   ▼
Structured Audit Report
```

---

# 📊 Current Status

| Component                 | Status      |
| ------------------------- | ----------- |
| Invoice Verification      | ✅ Complete  |
| GST Validation            | ✅ Complete  |
| Vendor Compliance         | ✅ Complete  |
| Purchase Order Validation | ✅ Complete  |
| Automated Testing         | ✅ Complete  |
| Workflow Export           | ✅ Available |
| GitHub Repository         | ✅ Live      |

---

# ⚡ Current Capabilities

| Agent                       | Purpose                               |
| --------------------------- | ------------------------------------- |
| 📄 Invoice Verification     | Validate invoice calculations         |
| 🧾 GST Validator            | Verify GST rates and amounts          |
| 🏢 Vendor Compliance        | Check vendor information completeness |
| 📦 Purchase Order Validator | Validate PO controls and limits       |

---

# 🏗 Architecture

```text
Webhook
   │
   ▼
Clean Request
   │
   ▼
Prompt Loader
   │
   ▼
Agent Router
   │
   ├── Invoice Validator
   ├── GST Validator
   ├── Vendor Compliance
   └── Purchase Order Validator
            │
            ▼
     Validation Results
            │
            ▼
         AI Agent
            │
            ▼
     Audit Report Output
```



---

# 🧠 Core Design Principle

> The AI never performs financial calculations.

All calculations, comparisons, validations, and business rules are executed through deterministic JavaScript logic.

The AI is responsible only for:

* Understanding context
* Interpreting validation results
* Generating audit reports
* Providing recommendations

This approach improves:

✅ Reliability

✅ Explainability

✅ Traceability

✅ Auditability

---

# 🛠 Technology Stack

```yaml
Workflow Engine:
  - n8n

AI Layer:
  - Ollama
  - Llama 3.2

Backend Logic:
  - JavaScript

Testing:
  - Node.js
  - Automated Regression Suite

Architecture:
  - Multi-Agent System
```

---

# 🧪 Automated Testing

Current Validation Coverage:

```text
✓ Invoice PASS
✓ Invoice FAIL

✓ GST PASS
✓ GST FAIL

✓ Vendor PASS
✓ Vendor FAIL

✓ PO PASS
✓ PO FAIL

--------------------------------
Total Tests : 8
Passed      : 8
Failed      : 0
STATUS      : PASS ✅
```

Run:

```bash
node test-runner.js
```

Parallel Execution:

```bash
node parallel-test.js
```

---

# 📥 Workflow Import

The complete n8n workflow is included in:

```text
workflows/finance-ai-router-v1.json
```

Import Steps:

1. Open n8n
2. Click Import Workflow
3. Select finance-ai-router-v1.json
4. Configure Ollama
5. Configure Agent Prompt Files
6. Execute Test Suite

---

# 📂 Repository Structure

```text
finance-ai-audit-platform/
│
├── agents/
│   ├── invoice-verifier.md
│   ├── gst-validator.md
│   ├── vendor-compliance.md
│   └── purchase-order-validator.md
│
├── workflows/
│   └── finance-ai-router-v1.json
│
├── tests/
│
├── test-runner.js
├── parallel-test.js
│
├── start-finance-ai.sh
├── stop-finance-ai.sh
│
├── package.json
└── README.md
```

---

# 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Start platform:

```bash
./start-finance-ai.sh
```

Run tests:

```bash
node test-runner.js
```

Stop platform:

```bash
./stop-finance-ai.sh
```

---

# 🔮 V2 Roadmap

### Platform

* [ ] Dynamic Agent Registry
* [ ] Agent Management Dashboard
* [ ] Audit Trail & Execution History
* [ ] Prompt Versioning System
* [ ] PDF Report Generation

### AI

* [ ] Human-in-the-Loop Reviews
* [ ] Risk Scoring Engine
* [ ] Multi-Agent Collaboration

### Compliance

* [ ] Additional SOX Control Modules
* [ ] Evidence Collection Framework
* [ ] Automated Control Testing

---

# 💡 Why This Project Exists

This project started as a learning exercise inspired by modern discussions around AI-assisted SOX testing and audit automation.

The objective was never to replace auditors.

Instead, the goal was to explore how AI can support structured compliance workflows while keeping validation deterministic, explainable, and auditable.

Building this platform also gave me an opportunity to reconnect with hands-on software development while exploring the intersection of AI, automation, audit, and business processes.

---

# 📚 Inspiration

**The Audit Leader's Guide to AI for SOX Testing**
by Alexey Zanin

---

<div align="center">

### ⭐ If you found this interesting, consider starring the repository.

Building. Learning. Iterating. 🚀

</div>
