# Cypress Automation Exercise Tests

## 📌 Project description
This project is a set of automation tests written using **Cypress** to test the **[Automation Exercise](https://automationexercise.com/)** website.

## 🛠️ Technologies used
- **Cypress** is an end-to-end testing framework
- **JavaScript** - the underlying programming language
- **GitHub Actions** - CI/CD pipeline for automation

## 🚀 How to run tests locally?

1️⃣ **Clone the repository**
```sh
git clone https://github.com/Karolina-ama/cypress_automationexercise_tests.git
cd cypress_automationexercise_tests
```

2️⃣ **Add dependencies**
````sh
npm install
```

3️⃣ **Run tests in headless mode**
```sh
npx cypress run
```

4️⃣ **If you want to see the tests in your browser:**
```sh
npx cypress open
```
Select the test file and run it in the desired browser.

## 🏗️ GitHub Actions Pipeline
This project uses **GitHub Actions**, which automatically runs tests **whenever a `git push` or `pull request` to the `main` branch** is executed.

## 📄 `.github/workflows/cypress.yml` settings:
- Automatically run tests after `push`/`pull request`
- Use `ubuntu-latest` environment
- `Node.js version 18`

## 🔍 How do I view CI/CD test results?
1. Go to **GitHub → your repository → Actions**
2. Select **Run Cypress Tests**
3. View the test results and error logs if the tests failed

Translated with DeepL.com (free version)
