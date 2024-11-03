module.exports = {
    branches: ["release"],
    repositoryUrl: "https://github.com/Sxmmm/test-package.git",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        [
            "@semantic-release/github",
            {
                assets: [
                    { path: "dist/*.js", label: "JavaScript distribution" },
                    {
                        path: "dist/*.d.ts",
                        label: "TypeScript declaration files",
                    },
                ],
            },
        ],
        [
            "@semantic-release/git",
            {
                assets: ["CHANGELOG.md", "package.json"],
                message:
                    "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
            },
        ],
    ],
};
