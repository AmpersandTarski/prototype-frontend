# Way of working

## Branch naming conventions

- `feat/some-feature-name` for creating new/additional features
- `fix/some-fix-name` for fixing bugs
- `test/some-test-name` for writing tests
- `docs/some-doc-name` for writing documentation

## Gitflow

The Gitflow consists of two main branches:

1. `main`
2. `dev`

The `main` branch stores the release history whereas the `dev` branch serves as an integration branch for e.g. features. The `main` branch will be updated each sprint through a pull request from the `dev` branch. The `dev` branch will be updated through **feature branches**.

For each new feature, there must be a `feat` branch created. Whenever that feature is finished, a pull request must be created into `dev`.

### Quickstart Git: Creating a new feature

1. Whenever a new feature is implemented, you must go to the `dev` branch and pull the latest results:
   ```
   // goes to the dev branch
   git checkout dev
   // pulls the latest version
   git pull
   ```
2. Create a new feature branch for the feature.
   ```
   git checkout -b "feat/your-feature"
   ```
3. Whenever significant code changes has been made, they have to be commited. Note that there can be multiple commits in a single branch.
   ```
   // add all changes
   git add .
   // commits your message
   git commit -m "your-message"
   ```
4. When the feature has been completed, it has to be pushed to the remote repository.
   ```
    git push --set-upstream origin feat/your-feature
   ```
5. Create a pull request on GitHub
   1. Go to the `prototype-frontend` repository
   2. Click on _Pull requests_
   3. Click on _New pull request_
   4. Set the **base** to `dev` and the _compare_ to `feat/your-feature`
   5. Create the pull request
