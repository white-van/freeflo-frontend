# ✨ freeflo.io

The frontend of our project is built with React, with components from ChakraUI.
We use Next.js for middleware, and Vercel to continuously deploy the frontend.

## 📁 Project Structure

```text
frontend
├── components
│   └── [component]             # Each component is isolated in its own folder
│       └── index.js
├── network                     # wrappers for making http requests for axios
├── pages
│   ├── read                    # the next.js sets routing equivalent to our folder structure
│   ├── write
│   ├── _app.js                 # providers/wrappers for app
│   └── index.js                # content for root page
├── stores
│   ├── [reducer]
│   │   └── actions.js
│   │   ├── reducer.js
│   │   └── selectors.js
│   └── index.js                # root reducer - import & add reducers here!
├── styles
├── testing
└── theme
└── README.md                   # You are here! :)
```

## 💡 Contributing

See the README.md in the root directory

Frontend Acceptance Criteria:

1. It should be properly linted/formatted (run `make prettier`)
2. Adequate automated test coverage
3. Basic manual QA & accessibility checks with Axe

## 🚀 Getting Started

1. `cd frontend && npm install`
2. `npm run dev`
3. Happy hacking :)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
