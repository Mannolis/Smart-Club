# **Smart-Club**

Welcome to the **Smart Club** website for *AUB Mediterraneo*! This platform is designed to **connect students** with the diverse clubs, societies, and events on campus, keeping everyone informed and engaged.

---

## **Key Features**

### **1. Discover Clubs & Societies**
Browse all active student clubs and societies, view their profiles, and learn *how to join*.

### **2. News & Announcements**
Stay updated with upcoming events, celebrations, and important club news.

### **3. Events Calendar**
Check the schedule of all club-related events and **RSVP directly** from the site.

---

## **Technologies Used**

- **Frontend:** React, TypeScript, CSS  
- **Routing:** React Router  
- **Data:** JSON files for club and event information  
- **Styling:** Custom CSS with CSS variables for *AUB theme colors*

## **Setup Instructions**

Follow the steps below to run the project locally on your machine.

### Prerequisites

Make sure you have the following installed:

* **Node.js** (v16 or later recommended)
* **npm** (comes with Node.js)
* **Git**

You can verify installation using:

```bash
node -v
npm -v
git --version
```

---

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Mannolis/Smart-Club.git
```

2. **Navigate into the project directory**

```bash
cd Smart-Club
```

3. **Install dependencies**

```bash
npm install
```

---

### Running the Project

To start the website:

```bash
npm run dev
```

The website will run locally at:

```
http://localhost:3000
```

or

```
http://localhost:5173
```

---



## Known Issues

The following issues are currently present in the project and are planned for future improvement:

* **Event Synchronization Issue**
  The events throughout the website are not synced, which may cause inconsistencies across different sections.

* **User Account System**
  The user account system is not set up properly and may not function as expected.

* **Admin Gate Access**
  The admin gate is not set up properly, which affects access to administrative features.

---

### Notes

* All club and event data is stored in **JSON files**
* Styling is managed using **custom CSS with CSS variables**
* Routing is handled via **React Router**
