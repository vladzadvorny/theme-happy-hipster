# Publishing to VS Code Marketplace

## 1. Prerequisites

1. Create a publisher in VS Code Marketplace (it must match `"publisher"` in `package.json`).
2. Create an Azure DevOps Personal Access Token with Marketplace publish permissions.
3. Make sure extension metadata is ready:
   - `package.json`
   - `README.md`
   - `LICENSE`
   - `CHANGELOG.md`

## 2. Verify locally

```bash
npm run verify
```

## 3. Build VSIX

```bash
npm run package:vsix
```

This produces a `.vsix` file in the project root.

## 4. Publish

Use one of the version bump commands:

```bash
npm run publish:patch
npm run publish:minor
npm run publish:major
```

If you want to pass token explicitly:

```bash
npx @vscode/vsce publish patch -p <MARKETPLACE_TOKEN>
```

## 5. Quick checklist before each release

1. Update `CHANGELOG.md`.
2. Ensure `version` in `package.json` is correct (if publishing manually without bump command).
3. Run `npm run verify`.
4. Publish and validate listing in Marketplace.
