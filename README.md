# ✨ freeflo.io

Peer-review is important in journalism. By having our work reviewed by others, we can fix typos and reduce bias in our writing. We loved the open-source code review process in software development, and this project came from a question that occurred to us—What if journalism used public software for peer-reviewing writing?

From a technical standpoint, our project implements version control through a complex model of branches, commits, and merging.

Check out our pitch/demo for Hack The North 2020++ <a href="https://www.youtube.com/watch?v=pXDF2kgQGtk">here</a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

## 📁 Project Structure

```text
.
├── backend
|   └── TBD                 
├── frontend
│   ├── components
│   │   └── [component]             # Each component is isolated in its own folder
│   │       └── index.js              
│   ├── network                     # wrappers for making http requests for axios
│   ├── pages
│   │   ├── read                    # the next.js sets routing equivalent to our folder structure
│   │   ├── write
│   │   ├── _app.js                 # providers/wrappers for app
│   │   └── index.js                # content for root page
│   ├── stores
│   │   ├── [reducer]                   
│   │   │   └── actions.js          
│   │   │   ├── reducer.js    
│   │   │   └── selectors.js    
│   │   └── index.js                # root reducer - import & add reducers here!
│   ├── styles
│   ├── testing
│   └── theme
└── README.md                       # You are here! :)
```

## 💡 Contributing

freeflo.io follows Gitflow. We practice CI/CD where we continuously deploy off of main and use develop for feature work.

```
──────────────────────── main ────────────────────────────────────    # Deployments
        │                                   │
        └───────────── develop ─────────────                          # Development work
            │                              │
            └───── [type]/[featureName] ──                           # Feature branches
```

For internal team:
1. Clone the repo
2. See featurework

For open source contributors:
1. Fork the repo
2. `git remote add upstream https://github.com/white-van/freeflo.io/`
3. `git fetch upstream`
4. `git rebase upstream/develop`
5. See featurework

Frontend Acceptance Criteria:
1. It should be properly linted/formatted (run `make prettier`)
2. Adequate automated test coverage
3. Basic manual QA & accessibility checks with Axe

Backend Acceptance Criteria:
WIP

### ⛏️ Featurework:

1. `git checkout -b [type]/[name]` where type corresponds to the issue type (feature, chore, etc) and name is the feature's name
2. Write your code
3. Open a PR from that branch to develop (in the main repo)
4. Fill out the pull request template accordingly
5. To be approved, code must have adequate test coverage + formatted properly
6. Check frontend formatting with `npm run lint` and `make prettier`
7. Commits should be squashed

## 🚀 Local Development

Frontend:
1. `cd frontend && npm install`
2. `npm run dev`
3. Happy hacking :)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Backend:
WIP

## ✍️ Contributors <a name = "authors"></a>
- [@NivedithaK](https://github.com/NivedithaK)
- [@AipioxTechson](https://github.com/AipioxTechson)
- [@jcserv](https://jarrodservilla.com)
- [@noredeen-alzubi](https://github.com/noredeen-alzubi)

## 🏁 License

Distributed under the MIT License. See `LICENSE` for more information.

[contributors-shield]: https://img.shields.io/github/contributors/white-van/freeflo.io
[contributors-url]: https://github.com/white-van/freeflo.io/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/white-van/freeflo.io
[forks-url]: https://github.com/white-van/freeflo.io/network/members
[stars-shield]: https://img.shields.io/github/stars/white-van/freeflo.io
[stars-url]: https://github.com/white-van/freeflo.io/stargazers
[issues-shield]: https://img.shields.io/github/issues/white-van/freeflo.io
[issues-url]: https://github.com/white-van/freeflo.io/issues
