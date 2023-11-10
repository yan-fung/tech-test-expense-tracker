<h1 align="center">
Technical Task for Invosys
</h1>

## Introduction 
A technical task as part of an interview for Invosys.

My task involved building a new React Component to represent the image provided. The component will be used to integrate to an endpoint which will provide the following information:

- Daily Spend Limit (£100)
- Current Spend (£25)
- List of (up to 4 and at least 1) email addresses 
- List of (up to 4) mobile numbers
  
The component has the capability to use local storage. It should be written as a standalone component that can be easily integrated into an existing application.

I also added a "remove" button to allow users to delete email addresses and phone numbers.

The application is deployed on Vercel, and you can try the app [here](https://tech-test-expense-tracker.vercel.app/): 

### Desktop view
An alert message pops up if a user attempts to submit a phone number without adding an email.

![Screenshot 2023-11-10 at 00 34 38](https://github.com/yan-fung/tech-test-expense-tracker/assets/106375522/0f1db42d-a859-415f-8462-d9c06d2952a6)

![Screenshot 2023-11-10 at 00 36 41](https://github.com/yan-fung/tech-test-expense-tracker/assets/106375522/89a289df-bed5-4a1d-a02f-cf081c9b1b86)

## Quick Start and Commands

1. Clone the repo:

```bash
gh repo clone /yan-fung/tech-test-expense-tracker
```

2. Install the packages locally:

```bash
npm install
```

3. Run the development server for the app.

```bash
npm start
```

5. Test the code in tests folder. 

```bash
npm test
```

## Technology
- [React](https://legacy.reactjs.org/docs/getting-started.html) is a JavaScript library for building user interfaces, and [React Testing library](https://testing-library.com/docs/react-testing-library/intro/) is a testing utility for testing React components. Combining them to create interactive and easily testable user interfaces.

## Authors
🧑‍🚀 Yan Fung
- GitHub [@yan-fung](https://github.com/yan-fung)
- LinkedIn [@yan-fung](https://www.linkedin.com/in/yan-fung-4082401a4/)
